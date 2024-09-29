"use strict";
import { PinComponent } from "../pin/pin.js";

export class NetComponent {
  #parent;
  #state;

  constructor(parent, state) {
    this.#parent = parent;
    this.#state = state;
  }

  renderTemplate() {
    this.#parent.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("pins-container");
    this.#parent.appendChild(container);

    this.#state.pins.forEach((pinData) => {
      const pinContainer = document.createElement("div");
      pinContainer.classList.add("pin-container");
      container.appendChild(pinContainer);

      const pin = new PinComponent(pinContainer, pinData);
      pin.renderTemplate();
    });
  }
}
