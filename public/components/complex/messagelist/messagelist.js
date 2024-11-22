'use strict';

import { MessageComponent } from '../../message/message.js';
import { BaseComponent } from '../../base/base.js';

export class MessageListComponent extends BaseComponent {
  constructor(parent, state) {
    super(parent, state);
  }

  renderTemplate() {
    const template = Handlebars.templates['messagelist.hbs'];

    const messageList = [];
    if (this.State.messagesInfo) {
      this.State.messagesInfo.forEach((message) => {
        const component = new MessageComponent(this.Parent, {
          Content: message.content,
          AuthorID: message.sender_id,
          ChatOwnerID: this.State.ChatOwnerID,
        });
        messageList.push(component.renderTemplate());
      });
    }

    const renderedTemplate = template({
      Messages: messageList,
    });

    return renderedTemplate;
  }
}
