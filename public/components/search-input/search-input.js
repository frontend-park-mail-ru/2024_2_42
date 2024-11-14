'use strict';

import { BaseComponent } from '../base.js';

/**
 * A component that is used to display search bar.
 */
export class SearchInputComponent extends BaseComponent {
    /**
     * Creates a SearchInputComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Object} state - state object providing info for this search bar.
     */
    constructor(parent, state) {
        super(parent, state);
    }

    /**
     * Renderes a template of search input component.
     * @returns rendered template of search input component.
     */
    renderTemplate() {
        const template = Handlebars.templates['search-input.hbs'];
        const renderedTemplate = template({
            state: this.State,
        });

        return renderedTemplate;
    }
}
