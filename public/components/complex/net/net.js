"use strict";
import { PinComponent } from "../pin/pin.js"; // Убедитесь, что путь правильный

export class NetComponent {
  #parent;
  #state;

  constructor(parent, state) {
    this.#parent = parent;
    this.#state = state;
  }

  renderTemplate() {
    this.#parent.innerHTML = ""; // Очистка родительского контейнера

    const container = document.createElement("div");
    container.classList.add("pins-container"); // Контейнер для всех пинов
    this.#parent.appendChild(container);

    // Создаем и рендерим PinComponent для каждого пина в состоянии
    this.#state.pins.forEach((pinData) => {
      const pinContainer = document.createElement("div"); // Создаем контейнер для пина
      pinContainer.classList.add("pin-container"); // Добавляем класс
      container.appendChild(pinContainer); // Добавляем его в общий контейнер

      const pin = new PinComponent(pinContainer, pinData); // Создаем новый PinComponent
      pin.renderTemplate(); // Рендерим пин
    });
  }
}