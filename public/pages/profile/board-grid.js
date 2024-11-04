'use strict'

import { BaseComponent } from "../../components/base.js"

/**
 * Component that is used to display boards grid on user profile page.
 */
export class BoardGridComponent extends BaseComponent {
    #boards;
    #currentUser;

    /**
     * 
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Array} boards - list of boards of currently authorized user.
     * @param {Boolean} currentUser - whether print boards of authorized user or not.
     */
    constructor(parent, boards, currentUser) {
        super(parent);
        this.#boards = boards;
        this.#currentUser = currentUser;
    }

    /**
     * Renders a template of board grid component.
     * @returns rendered template of board grid component.
     */
    renderTemplate() {
        const template = Handlebars.templates['board-grid.hbs'];
        const renderedTemplate = template({
            boards: this.#boards,
            profile: {
                currentUser: this.#currentUser,
            },
        });

        return renderedTemplate;
    }
};
