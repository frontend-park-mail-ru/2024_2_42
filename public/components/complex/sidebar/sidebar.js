'user strict'

import { BaseComponent } from "../../base.js"

import { IconButtonComponent as IconButton } from "../../button/icon-button.js";

export class SidebarComponent extends BaseComponent {
    #visible;

    /**
     * Creates a SidebarComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Boolean} visible - specifies the visibility of sidebar.
     */
    constructor(parent, visible) {
        super(parent);
        this.#visible = visible;
    }

    /**
     * Renders a template of SidebarComponent. 
     * @returns rendered template of SidebarComponent. 
     */
    renderTemplate() {
        const template = Handlebars.templates['sidebar.hbs'];
        const renderedTemplate = template({
            visible: this.#visible,

            collapseIconButton: new IconButton(this.parent, {
                className: 'sidebar__collapse-button',
                iconPath: './assets/icons/sidebar/collapse.svg',
            }).renderTemplate(),
            feedIconButton: new IconButton(this.parent, {
                className: 'sidebar__feed-button',
                iconPath: './assets/icons/sidebar/feed.svg',
            }).renderTemplate(),
            messagesIconButton: new IconButton(this.parent, {
                className: 'sidebar__messages-button',
                iconPath: './assets/icons/sidebar/messages.svg',
            }).renderTemplate(),
            notificationsIconButton: new IconButton(this.parent, {
                className: 'sidebar__notifications-button',
                iconPath: './assets/icons/sidebar/notifications.svg',
            }).renderTemplate(),
            bookmarksIconButton: new IconButton(this.parent, {
                className: 'sidebar__bookmarks-button',
                iconPath: './assets/icons/sidebar/bookmarks.svg',
            }).renderTemplate(),
        });

        return renderedTemplate;
    }
};
