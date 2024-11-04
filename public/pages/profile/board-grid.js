'use strict'

import { BaseComponent } from "../../components/base/base.js"

/**
 * Component that is used to display boards grid on user profile page.
 */
export class BoardGridComponent extends BaseComponent {
    #boards;
    
    /**
     * 
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Array} boards - list of boards of currently authorized user.
     */
    constructor(parent, boards) {
        super(parent);
        this.#boards = boards;
    }

    renderTemplate() {
        const template = Handlebars.templates['board-grid.hbs'];
        const renderedTemplate = template({
            boards: this.#boards,
        });

        return renderedTemplate;
    }
};
