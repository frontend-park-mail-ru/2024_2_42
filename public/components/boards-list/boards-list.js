'use strict'

import { BaseComponent } from "../base.js";

/**
 * A component that is used to display all boards of currently authorized user.
 */
export class BoardsListComponent extends BaseComponent {
    /**
     * An array of boards objects.
     */
    #boards;
    
    /**
     * 
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Array} boards - all boards of a user.
     */
    constructor(parent, boards) {
        super(parent);
        this.#boards = boards;
    }

    /**
     * Renders a template of boards list component.
     * @returns rendered template of boards list component.
     */
    renderTemplate() {
        const template = Handlebars.templates['boards-list.hbs'];
        const renderedTemplate = template({
            boards: this.#boards,
        });

        return renderedTemplate;
    }
};
