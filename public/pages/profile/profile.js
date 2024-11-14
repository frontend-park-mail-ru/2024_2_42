'use strict';

import { BaseComponent } from '../../components/base.js';

import { ButtonComponent as Button } from '../../components/button/button.js';
import { HeaderComponent as Header } from '../../components/complex/header/header.js';
import { SearchInputComponent as SearchInput } from '../../components/search-input/search-input.js';
import { BoardGridComponent as BoardGrid } from './board-grid.js';
import { DropDownMenuComponent as DropDownMenu } from '../../components/drop-down-menu/drop-down-menu.js';
import { GridComponent as Grid } from '../../components/complex/grid/grid.js';

import { app } from '../../index.js';
import { ROUTES } from '../../constants/routes.js';

import { postMethod } from '../../modules/network.js';
import { BACKEND_LOGOUT_ROUTE } from '../../constants/api.js';
import { isAuthorized } from '../../modules/network.js';

import { IconButtonComponent as IconButton } from '../../components/button/icon-button.js';

/**
 * Page of a user profile.
 */
export class ProfilePageComponent extends BaseComponent {
    /**
     * Creates a ProfilePageComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {Object} state - profile information.
     */
    constructor(parent, state) {
        super(parent, state);

        window.addEventListener('resize', (event) => {
            event.preventDefault();

            this.resizeBoardsCovers();
        });
    }

    /**
     * Renders a template of profile page component.
     * @returns rendered template of profile page component.
     */
    async renderTemplate() {
        const template = Handlebars.templates['profile.hbs'];

        if (!this.State.currentUser) {
            this.State.chatButton = new Button(this.Parent, {
                label: 'Написать',
                type: 'submit',
                className: 'profile__user-chat-button',
            }).renderTemplate();

            this.State.subscribeButton = new Button(this.Parent, {
                label: 'Подписаться',
                type: 'submit',
                className: 'profile__user-subscribe-button',
            }).renderTemplate();
        }

        const renderedTemplate = template({
            header: new Header(this.Parent, await isAuthorized()).renderTemplate(),
            searchInputBar: new SearchInput(this.Parent, {
                Placeholder: 'Искать в досках',
            }).renderTemplate(),
            profile: this.State,
            boardGrid: new BoardGrid(this.Parent, this.State.boards, this.State.currentUser).renderTemplate(),
        });

        this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);

        const headerHeight = document.querySelector('.header__content-container').clientHeight;
        const profileContainer = document.querySelector('.profile__content-container');
        const profileContainerMarginTop = 20;
        profileContainer.style.top = headerHeight + profileContainerMarginTop + 'px';

        this.addLogoListener();
        this.resizeBoardsCovers();
        this.addNickNameCopyBtnListener();
        this.addSearchInputsListeners();
        this.addBoardsSearchBarListener();
        this.addProfileImgListener();
        this.addBoardDetailsIconListener();
        this.addBoardListener();

        return renderedTemplate;
    }

    /**
     * Creates a listener of the logo icon.
     */
    addLogoListener() {
        const headerLogInButton = document.querySelector('.header__logo-container');
        headerLogInButton.addEventListener('click', (event) => {
            event.preventDefault();

            root.innerHTML = '';
            app.renderPage(ROUTES.main);
        });
    }

    /**
     * Creates a listener of the search input bar.
     */
    addSearchInputsListeners() {
        const searchInputClearIcons = document.querySelectorAll('.searchinput__clear-icon');
        const searchInputFields = document.querySelectorAll('.searchinput__search-field');
        for (let i = 0; i < searchInputFields.length; i++) {
            searchInputClearIcons[i].addEventListener('click', (event) => {
                event.preventDefault();

                searchInputFields[i].value = '';
                searchInputFields[i].focus();
            });
        }
    }

    /**
     * Creates a handler for search bar events.
     */
    boardsSearchBarListenerHandler() {
        const searchInputBar = document.querySelector(`.profile__boards-header-search-block
                                                    .searchinput__content-container
                                                    .searchinput__search-field`);
        const typedIn = searchInputBar.value;
        let matchedBoards = [];
        for (const board of this.State.boards) {
            if (board.title.toLowerCase().includes(typedIn.toLowerCase())) {
                matchedBoards.push(board);
            }
        }

        const matchedBoardsComponent = new BoardGrid(this.Parent, matchedBoards, this.State.currentUser);
        const renderedMatchedBoards = matchedBoardsComponent.renderTemplate();
        const boardsContainer = document.querySelector('.profile__boards-container');
        const currentBoardsGrid = document.querySelector('.profile__boards-list-container');

        boardsContainer.removeChild(currentBoardsGrid);

        boardsContainer.insertAdjacentHTML('beforeend', renderedMatchedBoards);
        this.resizeBoardsCovers();
        this.addBoardDetailsIconListener();
        this.addBoardListener();
    }

    /**
     * Creates a listener of search bar events.
     */
    addBoardsSearchBarListener() {
        const searchInputBar = document.querySelector(`.profile__boards-header-search-block
                                                    .searchinput__content-container
                                                    .searchinput__search-field`);
        searchInputBar.addEventListener('input', (event) => {
            event.preventDefault();
            this.boardsSearchBarListenerHandler();
        });
    }

    /**
     * Resizes profile boards cover to be equal in height.
     */
    resizeBoardsCovers() {
        const boardsCovers = document.querySelectorAll('.profile__board-cover');
        for (const cover of boardsCovers) {
            cover.style.height = cover.clientWidth + 'px';
        }
    }

    /**
     * Creates a listener of nickname copy button click event.
     */
    addNickNameCopyBtnListener() {
        const nickNameCopyBtn = document.querySelector('.profile__user-nickname-copy');
        nickNameCopyBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const nickNameText = document.querySelector('.profile__user-nickname-text').textContent;
            navigator.clipboard.writeText(nickNameText);
        });
    }

    /**
     * Creates a listener of profile icon.
     */
    addProfileImgListener() {
        const profileContainer = document.querySelector('.header__profile-container');
        if (profileContainer) {
            profileContainer.addEventListener('click', (event) => {
                event.preventDefault();

                if (!document.querySelector('.drop-down-menu__content-container')) {
                    const dropDownMenu = new DropDownMenu(this.Parent);
                    const renderedTemplate = dropDownMenu.renderTemplate();
                    profileContainer.insertAdjacentHTML('beforeend', renderedTemplate);

                    const dropDownMenuElement = document.querySelector('.drop-down-menu__content-container');
                    if (dropDownMenuElement) {
                        const header = document.querySelector('.header__content-container');
                        const dropDownMenuMarginTop = -10,
                            dropDownMenuMarginRight = 10;
                        dropDownMenuElement.style.top = header.clientHeight + dropDownMenuMarginTop + 'px';
                        dropDownMenuElement.style.right = dropDownMenuMarginRight + 'px';

                        this.addLogoutButtonListener();
                        this.addProfileListener();
                    }
                } else {
                    const dropDownMenu = document.querySelector('.drop-down-menu__content-container');
                    if (dropDownMenu) {
                        profileContainer.removeChild(dropDownMenu);
                    }
                }
            });
        }
    }

    /**
     * Creates a listener of logout button.
     */
    addLogoutButtonListener() {
        const logOutButton = document.querySelector('.drop-down-menu__logout-option');
        if (logOutButton) {
            logOutButton.addEventListener('click', async (event) => {
                event.preventDefault();

                const resp = await postMethod(BACKEND_LOGOUT_ROUTE, {}, true);
                if (!resp.code_status) {
                    document.cookie = 'session_token' + '=; Max-Age=0';
                    this.Parent.innerHTML = '';
                    app.renderPage(ROUTES.main);
                }
            });
        }
    }

    /**
     * Creates a listener of profile button.
     */
    addProfileListener() {
        const menuProfileButton = document.querySelector('.drop-down-menu__user-option');
        if (menuProfileButton) {
            menuProfileButton.addEventListener('click', (event) => {
                event.preventDefault();

                root.innerHTML = '';
                app.renderPage(ROUTES.profile);
            });
        }
    }

    /**
     * Creates a listener of board click event.
     */
    addBoardListener() {
        const pinSet = [
            {
                PinID: 1,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 2,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 3,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 4,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 5,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 6,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 7,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 8,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 9,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 10,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 11,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 12,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 13,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 14,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 15,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 16,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 17,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 18,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 19,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 20,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 21,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 22,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 23,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 24,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 25,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 26,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 27,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 28,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 29,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 30,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 31,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 32,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 33,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 34,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 35,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 36,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 37,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 38,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 39,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 40,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 41,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 42,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 43,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 44,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 45,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 46,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 47,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
                BoardID: 1,
            },
            {
                PinID: 48,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 49,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 50,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 51,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 52,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
                BoardID: 1,
            },
            {
                PinID: 53,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 54,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 55,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
            {
                PinID: 56,
                imageOnly: true,
                AuthorName: 'Mary Jane',
                AuthorFollowersNumber: 100,
                MediaUrl:
                    'https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
            },
        ];

        const pinGridParent = document.querySelector('.profile__boards-container');

        const pinGrid = new Grid(pinGridParent, pinSet, false);
        const renderedPinGrid = pinGrid.renderTemplate();

        const boardGrid = document.querySelector('.profile__boards-list-container');
        const allBoards = document.querySelectorAll('.profile__board');
        const boardsContainer = document.querySelector('.profile__boards-container');

        const navigationBar = document.querySelector('.profile__boards-header-navigation');
        const navArrow = navigationBar.querySelector('.profile__boards-header-navigation-arrow');
        const nextNavArrow = navArrow.cloneNode(true);

        const navBarSectionText = navigationBar.querySelector('.profile__boards-header-nav-to-profile-link');
        const nextNavBarSectionText = navBarSectionText.cloneNode(true);

        const headerSearchBlock = document.querySelector('.profile__boards-header-search-block');

        for (const board of allBoards) {
            board.addEventListener('click', (event) => {
                event.preventDefault();

                const boardTitle = board.querySelector('.profile__board-title').textContent;

                // Update navigation bar menu
                navigationBar.appendChild(nextNavArrow);
                nextNavBarSectionText.textContent = boardTitle;
                nextNavBarSectionText.className = 'profile__boards-header-nav-to-board';

                // CHANGE HREF HERE
                nextNavBarSectionText.href = '/profile/board';
                navigationBar.appendChild(nextNavBarSectionText);

                // Update title
                document.querySelector('.profile__boards-header-title p').textContent = boardTitle;
                const headerTitleContainer = document.querySelector('.profile__boards-header-title');
                headerTitleContainer.removeChild(document.querySelector('.profile__boards-header-create-board-btn'));
                headerTitleContainer.insertAdjacentHTML(
                    'beforeend',
                    new IconButton(this.Parent, {
                        className: 'icon-button__edit-img',
                        iconPath: './assets/icons/edit.svg',
                    }).renderTemplate()
                );
                headerTitleContainer.insertAdjacentHTML(
                    'beforeend',
                    new IconButton(this.Parent, {
                        className: 'icon-button__delete-img',
                        iconPath: './assets/icons/delete.svg',
                    }).renderTemplate()
                );

                // Update search input bar
                headerSearchBlock.removeChild(headerSearchBlock.querySelector('.searchinput__content-container'));
                const actualSearchBar = new SearchInput(this.Parent, {
                    Placeholder: `Искать в доске ${boardTitle}`,
                });
                const renderedSearchBar = actualSearchBar.renderTemplate();
                headerSearchBlock.insertAdjacentHTML('afterbegin', renderedSearchBar);

                // Replace board grid with pins grid
                boardsContainer.removeChild(boardGrid);
                boardsContainer.insertAdjacentHTML('beforeend', renderedPinGrid);

                document.body.addEventListener(
                    'load',
                    (event) => {
                        event.preventDefault();
                        pinGrid.buildLayout();
                    },
                    true
                );

                // Providing layout rebuild on resize events
                window.addEventListener(
                    'resize',
                    (event) => {
                        event.preventDefault();
                        pinGrid.buildLayout();
                    },
                    true
                );

                for (const pin of pinSet) {
                    pinGrid.buildPinPreview(pin);
                }
            });
        }
    }

    /**
     * Creates a listener of board details icon click events.
     */
    addBoardDetailsIconListener() {
        const detailsIcons = document.querySelectorAll('.profile__board-cover-more-icon');

        for (const icon of detailsIcons) {
            icon.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
            });
        }
    }
}
