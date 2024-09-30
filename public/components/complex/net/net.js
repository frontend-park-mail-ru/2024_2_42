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

    // Создаем элемент для отображения пинов
    const netContainer = document.createElement("div");
    netContainer.classList.add("net__container");
    this.#parent.appendChild(netContainer); // Добавляем контейнер в родительский элемент

    // Рендерим каждый PinComponent, используя его шаблон
    this.#state.pins.forEach((pinData, index) => {
      const pin = new PinComponent(netContainer, pinData);
      pin.renderTemplate();
    });
  }
}
