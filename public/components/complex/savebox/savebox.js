'use strict';

import { BaseComponent } from '../../base.js';

import { SearchInputComponent as SearchInput } from '../../search-input/search-input.js';

import { BoardsListComponent as BoardsList } from '../../boards-list/boards-list.js';

/**
 * Class of save box components which is used to save pins to specific boards.
 */
export class SaveBoxComponent extends BaseComponent {
    /**
     * An array of boards of currently authorized user.
     */
    #boards;

    /**
     * Creates a SaveBoxComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Array} boards - the list of boards which belongs to current authorized user.
     */
    constructor(parent, boards) {
        super(parent);
        this.#boards = boards;
    }

    /**
     * Renders a template of save box component.
     * @returns rendered template of save box component.
     */
    renderTemplate() {
        const template = Handlebars.templates['savebox.hbs'];
        const renderedTemplate = template({
            searchInput: new SearchInput(this.Parent, {
                Placeholder: 'Искать в досках',
            }).renderTemplate(),
            boardsList: new BoardsList(this.Parent, this.#boards).renderTemplate(),
            boards: this.#boards,
        });

        return renderedTemplate;
    }
}
