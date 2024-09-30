"use strict";
import { PinComponent } from "../pin/pin.js"; // Подключаем PinComponent

export class NetComponent {
  #parent;
  #state;

  constructor(parent, state) {
    this.#parent = parent;
    this.#state = state;
  }

  renderTemplate() {
    this.#parent.innerHTML = ""; // Очищаем родительский контейнер

    // Создаем и рендерим PinComponent для каждого пина
    this.#state.pins.forEach((pinData, index) => {
      const pinContainer = document.createElement("div"); // Контейнер для каждого пина
      pinContainer.classList.add("net__container");
      pinContainer.setAttribute("data-index", index); // Добавляем атрибут для индекса
      this.#parent.appendChild(pinContainer);

      // Создаем и рендерим PinComponent
      const pin = new PinComponent(pinContainer, pinData);
      pin.renderTemplate();
    });
  }
}
