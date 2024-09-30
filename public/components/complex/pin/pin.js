"use strict";
import { ButtonComponent } from "../../button/button.js";

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent {
  #parent;
  #state = {
    pinUrl: "", // путь к изображению
    boards: [], // список досок
    disabled: true, // флаг отключения по умолчанию
    showText: false,
    buttons: {
      saveButton: {
        label: "Save to Board",
        type: "primary",
        disabled: true, // кнопка отключена по умолчанию
      },
      shareButton: {
        label: "",
        iconLeft: "",
        type: "link",
        disabled: true,
      },
      menuButton: {
        label: "",
        iconLeft: "",
        type: "link",
        disabled: true,
      },
    },
  };

  constructor(parent, state = this.#state) {
    this.#parent = parent;
    this.#state = { ...this.#state, ...state };
  }

  renderTemplate() {
    const template = Handlebars.templates["pin.hbs"];
    const renderedTemplate = template(this.#state);

    // Вместо очистки родительского контейнера, добавляем рендер в конец
    const pinContainer = document.createElement("div");
    pinContainer.innerHTML = renderedTemplate; // Заполняем содержимое

    this.#parent.appendChild(pinContainer); // Добавляем новый пин в родительский контейнер

    // Проверяем контейнеры для кнопок
    const saveBtnContainer = pinContainer.querySelector(".pin__save-button");
    const shareBtnContainer = pinContainer.querySelector(".pin__share-button");
    const menuBtnContainer = pinContainer.querySelector(".pin__save-button-container");

    if (!saveBtnContainer) {
      console.error("Save button container not found.");
    }
    if (!shareBtnContainer) {
      console.error("Share button container not found.");
    }
    if (!menuBtnContainer) {
      console.error("Menu button container not found.");
    }

    // Рендерим кнопки только если контейнеры найдены
    if (saveBtnContainer) {
      new ButtonComponent(
        saveBtnContainer,
        this.#state.buttons.saveButton,
      ).renderTemplate();
    }
    if (shareBtnContainer) {
      new ButtonComponent(
        shareBtnContainer,
        this.#state.buttons.shareButton,
      ).renderTemplate();
    }
    if (menuBtnContainer) {
      new ButtonComponent(
        menuBtnContainer,
        this.#state.buttons.menuButton,
      ).renderTemplate();
    }
    
    return renderedTemplate; // Можно оставить для отладки, если нужно
  }

  setState(newState) {
    this.#state = { ...this.#state, ...newState };
    this.renderTemplate();
  }

  getState() {
    return this.#state;
  }

  setBoardsInPin(newState) {
    this.#state = { ...this.#state, ...newState };

    // Если есть доски, активировать select и кнопку сохранения
    if (this.#state.boards.length > 0) {
      this.#state.disabled = false;
      this.#state.buttons.saveButton.disabled = false;
    } else {
      // Если досок нет, отключить select и кнопку сохранения
      this.#state.disabled = true;
      this.#state.buttons.saveButton.disabled = true;
    }

    this.renderTemplate();
  }
}
