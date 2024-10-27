'use strict';

import { BaseComponent } from '../../base/base.js';

import { PinComponent } from '../pin/pin.js';

const DEFAULT_FULLPAGE_WIDTH = 1920;
const DEFAULT_COLUMNS_N_FOR_FULLPAGE = 7;

/**
 * Represents a Grid Component that contains multiple Pin Components.
 * @class
 */
export class GridComponent extends BaseComponent {
	#pins = []; // pins stored on the grid 

	/**
	 * Creates an instance of GridComponent.
	 * @param {HTMLElement} parent - The parent element for rendering.
	 * @param {Array} pins - An array of objects representing pin data.
	 */
	constructor(parent, pins) {
		super(parent);
		this.#pins = pins;

		// Providing layout rebuild on resize events
		window.addEventListener('resize', (event) => {
			event.preventDefault();
			this.buildLayout();
		}, true);
	}

	/**
	 * Renders the component template and displays the pins.
	 * Clears the parent container and adds new pin elements.
	 */
	renderTemplate() {
		const template = Handlebars.templates['grid.hbs'];
		let pinsToRender = [];
	
		// Render each PinComponent using its template
		this.#pins.forEach((pinData) => {
			const newPin = new PinComponent(pinData);
			pinsToRender.push(newPin);
		});

		const renderedTemplate = template({
			pins: pinsToRender.map((pin) => pin.renderTemplate())
		});

		return renderedTemplate
	}

	buildLayout() {
		const columnsN = this.adaptiveColumnsN;
		const widthGutter = 30, heightGutter = 15;
		let heights = new Array(columnsN).fill(0);

		const columnWidth = (this.parentContainerWidth - widthGutter * (columnsN + 1)) / columnsN;

		for (const pin of this.#pins) {
			const pinContainer = document.querySelector(`#pin__content-container-${pin.PinID}`);
			const pinImage = document.querySelector(`.pin__image-${pin.PinID}`);
			
			pinContainer.style.width = pinImage.style.width = `${columnWidth}px`;

			// Next column index to insert the pinContainer
			const minIdx = heights.indexOf(Math.min(...heights));

			pinContainer.style.top = `${heights[minIdx] + heightGutter}px`;
			pinContainer.style.left = `${minIdx * columnWidth + widthGutter * (minIdx + 1)}px`;

			heights[minIdx] += pinContainer.offsetHeight + heightGutter;
		}

		const layoutContainer = document.querySelector('.feed__layout-container');
		layoutContainer.style.height = `${Math.max(...heights)}px`;
	}

	get parentContainerWidth() {
		return this.Parent.innerWidth || this.Parent.clientWidth;
	}

	get parentContainerColumnsRatio() {
		return DEFAULT_FULLPAGE_WIDTH / DEFAULT_COLUMNS_N_FOR_FULLPAGE;
	}

	get adaptiveColumnsN() {
		let newColumnN = Math.floor(this.parentContainerWidth / this.parentContainerColumnsRatio);
		if (newColumnN == 0)
			newColumnN = 1;
		return newColumnN;
	}
}
