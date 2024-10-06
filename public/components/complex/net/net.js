'use strict';
import { PinComponent } from '../pin/pin.js'; // Importing PinComponent

/**
 * Represents a Net Component that contains multiple Pin Components.
 * @class
 */
export class NetComponent {
	#parent; // DOM element for rendering the component
	#state; // State of the component, includes pin data
	#pins = []; // pins stored on the net 

	/**
	 * Creates an instance of NetComponent.
	 * @param {HTMLElement} parent - The parent element for rendering.
	 * @param {Object} state - The state of the component, containing pin data.
	 * @param {Array} state.pins - An array of objects representing pin data.
	 * @example
	 * const net = new NetComponent(document.getElementById('root'), {
	 *   pins: [
	 *     { pinUrl: './image1.jpg', boards: ['Board 1'], ... },
	 *     { pinUrl: './image2.jpg', boards: ['Board 2'], ... },
	 *   ]
	 * });
	 */
	constructor(state, parent = this.#parent) {
		this.#state = state;
		this.#parent = parent;
	}

	/**
	 * Renders the component template and displays the pins.
	 * Clears the parent container and adds new pin elements.
	 */
	renderTemplate() {
		const template = Handlebars.templates['net.hbs'];

		// Render each PinComponent using its template
		this.#state.pins.forEach((pinData) => {
			const pin = new PinComponent(pinData);
			this.#pins.push(pin);
		});

		const renderedTemplate = template({
			pins: this.#pins.map((pin) => pin.renderTemplate())
		});

        return renderedTemplate
	}
}
