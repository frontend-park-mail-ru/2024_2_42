/**
 * Class to manage global application state as a singleton.
 * Synchronizes the state with LocalStorage for persistence.
 */
class StateManager {
    /**
     * Initializes the global state with default values.
     * Loads existing state from LocalStorage if available.
     */
    constructor() {
        this.defaultState = {
            userID: null, // Current user's information (default: null).
            userAvatar: '/assets/imgs/avatar.jpg',
            isAuthorized: false,
        };

        this.state = this.loadStateFromLocalStorage();
    }

    /**
     * Loads the state from LocalStorage.
     * If no state exists in LocalStorage, returns the default state.
     * @returns {Object} - The loaded or default state object.
     */
    loadStateFromLocalStorage() {
        const savedState = localStorage.getItem('appState');
        return savedState ? JSON.parse(savedState) : { ...this.defaultState };
    }

    /**
     * Saves the current state to LocalStorage.
     */
    saveStateToLocalStorage() {
        localStorage.setItem('appState', JSON.stringify(this.state));
    }

    /**
     * Gets the current state object.
     * Avoid direct mutations; use `updateState` or `resetState` for controlled updates.
     * @returns {Object} - The current global state object.
     */
    getState() {
        const savedState = localStorage.getItem('appState');
        return savedState ? JSON.parse(savedState) : { ...this.defaultState };
    }

    /**
     * Updates the state with new data. Merges provided values into the existing state.
     * Automatically saves the updated state to LocalStorage.
     * @param {Object} newState - An object containing key-value pairs to update the state.
     * @example
     * StateManager.updateState({ userID: 1, userAvatar: "new-avatar.jpg" });
     */
    updateState(newState) {
        this.state = { ...this.state, ...newState };
        this.saveStateToLocalStorage();
    }

    /**
     * Resets the state to its initial default values.
     * Clears the LocalStorage entry as well.
     * @example
     * StateManager.resetState();
     */
    resetState() {
        this.state = { ...this.defaultState };
        this.saveStateToLocalStorage();
    }
}

/**
 * Exported singleton instance of the StateManager class.
 * Use this instance to manage the application's global state.
 * @example
 * import StateManager from './StateManager';
 * StateManager.updateState({ userID: 1 });
 */
const StateManagerInstance = new StateManager();
export default StateManagerInstance;
