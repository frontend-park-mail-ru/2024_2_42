'use strict';

import { BaseComponent } from '../base/base.js';

export class MessageComponent extends BaseComponent {
  constructor(parent, state) {
    super(parent, state);
  }

  renderTemplate() {
    console.log('message', this.State.AuthorID, this.State.ChatOwnerID);
    if (this.State.AuthorID === this.State.ChatOwnerID) {
      this.myMessage = true;
    } else {
      this.myMessage = false;
    }
    const template = Handlebars.templates['message.hbs'];
    const renderedTemplate = template({
      Content: this.State.Content,
      myMessage: this.myMessage,
    });

    return renderedTemplate;
  }
}
