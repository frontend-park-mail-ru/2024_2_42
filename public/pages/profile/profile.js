'use strict'

import { BaseComponent } from "../../components/base/base.js"

import { HeaderComponent as Header } from "../../components/complex/header/header.js"
import { SearchInputComponent as SearchInput } from "../../components/search-input/search-input.js";
import { BoardGridComponent as BoardGrid } from "./board-grid.js";
import { DropDownMenuComponent as DropDownMenu } from "../../components/drop-down-menu/drop-down-menu.js";
import { isAuthorized } from "../../modules/network.js";

import { app } from "../../index.js";
import { ROUTES } from "../../constants/routes.js";

import { postMethod } from "../../modules/network.js";
import { BACKEND_LOGOUT_ROUTE } from "../../constants/api.js";

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

    async renderTemplate() {
        const template = Handlebars.templates['profile.hbs'];
        const renderedTemplate = template({
            header: new Header(this.Parent, await isAuthorized()).renderTemplate(),
            searchInputBar: new SearchInput(this.Parent, { Placeholder: 'Искать в досках' }).renderTemplate(),
            profile: this.State,
            boardGrid: new BoardGrid(this.Parent, this.State.boards).renderTemplate(),
        });

        this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);

        const headerHeight = document.querySelector('.header__content-container').clientHeight;
        const profileContainer = document.querySelector('.profile__content-container');
        const profileContainerMarginTop = 20;
        profileContainer.style.top = headerHeight + profileContainerMarginTop + 'px';

        this.resizeBoardsCovers();
        this.addNickNameCopyBtnListener();
        this.addSearchInputsListeners();
        this.addBoardsSearchBarListener();
        this.addProfileImgListener();

        return renderedTemplate;
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

        const matchedBoardsComponent = new BoardGrid(this.Parent, matchedBoards);
        const renderedMatchedBoards = matchedBoardsComponent.renderTemplate();
        const boardsContainer = document.querySelector('.profile__boards-container');
        const currentBoardsGrid = document.querySelector('.profile__boards-list-container');

        boardsContainer.removeChild(currentBoardsGrid);

        boardsContainer.insertAdjacentHTML('beforeend', renderedMatchedBoards);
        this.resizeBoardsCovers();
    }

    addBoardsSearchBarListener() {
        const searchInputBar = document.querySelector(`.profile__boards-header-search-block
                                                    .searchinput__content-container
                                                    .searchinput__search-field`);
        searchInputBar.addEventListener('input', (event) => {
            event.preventDefault();
            this.boardsSearchBarListenerHandler();
        });
    }

    resizeBoardsCovers() {
        const boardsCovers = document.querySelectorAll('.profile__board-cover');
        for (const cover of boardsCovers) {
            cover.style.height = cover.clientWidth + 'px';
        }
    }

    addNickNameCopyBtnListener() {
        const nickNameCopyBtn = document.querySelector('.profile__user-nickname-copy');
        nickNameCopyBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const nickNameText = document.querySelector('.profile__user-nickname-text').textContent;
            navigator.clipboard.writeText(nickNameText)
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
                        const dropDownMenuMarginTop = -10, dropDownMenuMarginRight = 10;
                        dropDownMenuElement.style.top = header.clientHeight + dropDownMenuMarginTop + 'px';
                        dropDownMenuElement.style.right = dropDownMenuMarginRight + 'px';
        
                        this.addLogoutButtonListener();
                        this.addProfileListener();
                    }
                }
                else {
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
                    document.cookie = "session_token" + '=; Max-Age=0'
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
        const menuProfileButton = document.querySelector('.drop-down-menu__user-option')
        if (menuProfileButton) {
            menuProfileButton.addEventListener('click', (event) => {
                event.preventDefault();

                root.innerHTML = '';
                app.renderPage(ROUTES.profile);
            });
        }
    }
};
