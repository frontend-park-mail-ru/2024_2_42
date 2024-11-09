'use strict';

import { HeaderComponent as Header } from '../../components/complex/header/header.js';
import { GridComponent as Grid } from '../../components/complex/grid/grid.js';
import { isAuthorized } from '../../modules/network.js';

import { ROUTES } from '../../constants/routes.js';
import { BACKEND_LOGOUT_ROUTE } from '../../constants/api.js';
import { postMethod } from '../../modules/network.js';

import { app } from '../../index.js';
import { BaseComponent } from '../../components/base/base.js';

import { DropDownMenuComponent as DropDownMenu } from '../../components/drop-down-menu/drop-down-menu.js';

/**
 * Represents the Main Page Component.
 * @class
 */
export class MainPageComponent extends BaseComponent {
  /**
   * An array of pins.
   */
  #pins;

  /**
   * Creates an instance of MainPage Component.
   * @constructor
   * @param {HTMLElement} parent - The parent element where the main page will be rendered.
   * @param {Object} pins - data provided for pins propagation.
   */
  constructor(parent, pins) {
    super(parent);
    this.#pins = pins;
  }

  /**
   * Renders the MainPage component.
   * @returns {string} - The rendered HTML template of the main page.
   */
  async renderTemplate() {
    const template = Handlebars.templates['main.hbs'];

    const grid = new Grid(this.Parent, this.#pins, true);

    const renderedTemplate = template({
      header: new Header(this.Parent, await isAuthorized()).renderTemplate(),
      grid: grid.renderTemplate(),
    });
    console.log(renderedTemplate);

    this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);

    if (!Array.isArray(this.#pins)) {
      this.#pins = [];
    }

    for (const pin of this.#pins) {
      console.log(pin);
      grid.buildPinPreview(pin);
    }

    document.body.addEventListener(
      'load',
      (event) => {
        event.preventDefault();
        grid.buildLayout();
      },
      true
    );

    const createBtn = document.querySelector(
      '.header__create-btn-container button'
    );
    console.log('createBtn', createBtn);
    createBtn.addEventListener('click', (event) => {
      event.preventDefault();
      app.render(ROUTES.editPin);
    });

    // Listeners
    this.addLogoListener();
    this.addLoginBtnListener();
    this.addSearchInputListener();
    this.addProfileImgListener();

    return renderedTemplate;
  }

  /**
   * Creates a listener of the search input bar.
   */
  addSearchInputListener() {
    const searchInputClearIcon =
      document.querySelector(`.header__search-input-content-container
                                                            .searchinput__content-container
                                                            .searchinput__clear-icon`);
    if (!searchInputClearIcon) {
      return;
    }

    searchInputClearIcon.addEventListener('click', (event) => {
      event.preventDefault();
      const searchInputField =
        document.querySelector(`.header__search-input-content-container
                                                            .searchinput__content-container
                                                            .searchinput__search-field`);
      searchInputField.value = '';
      searchInputField.focus();
    });
  }

  /**
   * Creates a listener of the logo icon.
   */
  addLogoListener() {
    const headerLogInButton = document.querySelector('.header__logo-container');
    if (headerLogInButton) {
      headerLogInButton.addEventListener('click', (event) => {
        event.preventDefault();

        root.innerHTML = '';
        app.renderPage(ROUTES.main);
      });
    }
  }

  /**
   * Creates a listener of login button.
   */
  addLoginBtnListener() {
    const headerLogInButton = document.querySelector(
      '.header__login-btn-container'
    );
    if (headerLogInButton) {
      headerLogInButton.addEventListener('click', (event) => {
        event.preventDefault();

        root.innerHTML = '';
        app.renderPage(ROUTES.login);
      });
    }
  }

  /**
   * Creates a listener of profile icon.
   */
  addProfileImgListener() {
    const profileContainer = document.querySelector(
      '.header__profile-container'
    );
    if (profileContainer) {
      profileContainer.addEventListener('click', (event) => {
        event.preventDefault();

        if (!document.querySelector('.drop-down-menu__content-container')) {
          const dropDownMenu = new DropDownMenu(this.Parent);
          const renderedTemplate = dropDownMenu.renderTemplate();
          profileContainer.insertAdjacentHTML('beforeend', renderedTemplate);

          const dropDownMenuElement = document.querySelector(
            '.drop-down-menu__content-container'
          );
          if (dropDownMenuElement) {
            const header = document.querySelector('.header__content-container');
            const dropDownMenuMarginTop = -10,
              dropDownMenuMarginRight = 10;
            dropDownMenuElement.style.top =
              header.clientHeight + dropDownMenuMarginTop + 'px';
            dropDownMenuElement.style.right = dropDownMenuMarginRight + 'px';

            this.addLogoutButtonListener();
            this.addProfileListener();
          }
        } else {
          const dropDownMenu = document.querySelector(
            '.drop-down-menu__content-container'
          );
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
    const logOutButton = document.querySelector(
      '.drop-down-menu__logout-option'
    );
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
    const menuProfileButton = document.querySelector(
      '.drop-down-menu__user-option'
    );
    if (menuProfileButton) {
      menuProfileButton.addEventListener('click', (event) => {
        event.preventDefault();

        root.innerHTML = '';
        app.renderPage(ROUTES.profile);
      });
    }
  }
}
