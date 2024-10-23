'use strict';

/**
 * Base class for all components.
 */
export class BaseComponent {
    #parent;
    #state = {};

    /**
     * Creates an instance of BaseComponent.
     * @constructor
     * @param {HTMLElement} parent - The parent element where the component will be rendered.
     * @param {Object} initialState - The initial state for the component.
     */
    constructor(parent, initialState = {}) {
        this.#parent = parent;
        this.#state = { ...initialState };
    }

    /**
     * Renders the component template. 
     * This should be overridden by child components.
     */
    renderTemplate() {
        throw new Error('renderTemplate() must be implemented by a subclass');
    }

    /**
     * Sets the state and re-renders the component.
     * @param {Object} newState - New state object to update.
     */
    setState(newState) {
        this.#state = { ...this.#state, ...newState };
        this.renderTemplate(); // Trigger re-render in child component
    }

    /**
     * Gets the current state of the component.
     * @returns {Object} - The current state object.
     */
    getState() {
        return this.#state;
    }

    /**
     * Gets the parent element of the component.
     * @returns {HTMLElement} - The parent element.
     */
    getParent() {
        return this.#parent;
    }
}