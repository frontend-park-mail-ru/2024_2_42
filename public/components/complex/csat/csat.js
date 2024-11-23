'use strict';

import { BaseComponent } from '../../base.js';
import { ButtonComponent as Button } from '../../button/button.js';
import { csatConfig } from '../../../constants/config.js';

Handlebars.registerHelper('range', function (start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
});

Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

/**
 * Represents the CSAT Component
 * This class is responsible for rendering the CSAT which includes
 * the question and rating stars.
 *
 * @class
 */
export class CSATComponent extends BaseComponent {
    #config;
    #state = {
        question_id: 0,
        question: '',
        rating: 0, // default rating
    };

    /**
     * Create an instance of CSATComponent.
     * @param {Object} state - The initial state for the CSAT component.
     * @param {HTMLElement} parent - The parent element where the CSAT will be rendered.
     */
    constructor(state, parent) {
        super(parent, state);
        this.#config = csatConfig;
        this.#state = state || {};
    }

    /**
     * Handles the star click event to change the rating.
     * @param {Event} event - The click event.
     */
    changeStarRating(event) {
        const clickedStarIndex = parseInt(event.target.getAttribute('data-index'), 10);
        this.#state.rating = clickedStarIndex; // Set the rating based on the clicked star
        this.renderTemplate(); // Re-render the component with the updated rating
    }

    /**
     * Renders the CSAT component using Handlebars.
     * @returns {string} - The rendered HTML template.
     */
    renderTemplate() {
        const template = Handlebars.templates['csat.hbs']; // Ensure precompiled template is available
        const renderedTemplate = template({
            csat: {
                question: this.#state.question || 'How satisfied are you with our service?',
                rating: this.#state.rating, // Pass current rating to the template
                createButton: new Button(this.Parent, this.#config.CreateButton).renderTemplate(),
            },
        });

        return renderedTemplate;
    }
}
