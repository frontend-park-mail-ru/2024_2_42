'use strict';

import { BaseComponent } from '../../base/base.js';

import StateManagerInstance from '../../../modules/state.js';

export class PreviewComponent extends BaseComponent {
    /**
     *
     * @param {HTMLElement} parent - The parent element for rendering the preview.
     * @param {Object} state - Information provided for preview.
     * @example
     *  state = {
     *      MediaUrl: 'https://images.unsplash.com/photo-1700075489227-47f36fb2709b',
     *      AuthorAvatarUrl: 'https://images.unsplash.com/photo-1700075489227-47f36fb2709b',
     *      AuthorName: 'Mary Jane',
     *      AuthorFollowersNumber: 100,
     *      Boards: [
     *          {
     *              BoardCoverUrl: 'https://images.unsplash.com/photo-1700075489227-47f36fb2709b',
     *              BoardName: 'Singers',
     *              Private: false,
     *          },
     *          {
     *              BoardCoverUrl: 'https://images.unsplash.com/photo-1700075489227-47f36fb2709b',
     *              BoardName: 'Recipes',
     *              Private: true,
     *          },
     *      ],
     *      DetailsOptions: [
     *			{
     *				ID: 1,
     *				Text: 'Открыть',
     *				Download: false,
     *			},
     *			{
     *				ID: 2,
     *				Text: 'Скачать',
     *				Download: true,
     *				FilePath: pin.MediaUrl,
     *			},
     *			{
     *				ID: 3,
     *				Text: 'Не интересно',
     *				Download: false,
     *			},
     *			{
     *				ID: 4,
     *				Text: 'Пожаловаться',
     *				Download: false,
     *			},
     *		],
     *		Bookmarked: false,
     *      BookmarksNumber: 10,
     *      ViewsNumber: 30,
     *  }
     */
    constructor(parent, state) {
        super(parent, state);
    }

    /**
     * Renderes template of pin preview component.
     * @returns rendered template of pin preview component.
     */
    renderTemplate() {
        const template = Handlebars.templates['preview.hbs'];

        // Render save button if user isAuthorized
        this.State.BookmarksNumber = this.abbreviateNumber(this.State.BookmarksNumber);
        this.State.ViewsNumber = this.abbreviateNumber(this.State.ViewsNumber);
        const renderedTemplate = template({
            preview: this.State,
            userState: StateManagerInstance.getState(),
        });

        return renderedTemplate;
    }

    /**
     * Create an abbreviation from a given number.
     * @param {Number} num - number that has to be formatted into abbreviation.
     * @returns string presentation of number abbreviation.
     */
    abbreviateNumber(num) {
        let fixed = 1;
        if (num === null) {
            return null;
        }
        if (num === 0) {
            return '0';
        }
        fixed = !fixed || fixed < 0 ? 0 : fixed;
        var b = num.toPrecision(2).split('e'),
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
            c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', 'k', 'm', 'b', 't'][k];
        return e;
    }
}
