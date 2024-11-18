import { BaseComponent } from '../../components/base/base.js';
import { HeaderComponent as Header } from '../../components/complex/header/header.js';
import { MessageListComponent } from '../../components/complex/messagelist/messagelist.js';
import { DialogPreviewComponent } from '../../components/dialog-preview/dialog-preview.js';
import { InputComponent } from '../../components/input/input.js';
import { MessageComponent } from '../../components/message/message.js';
import { SearchInputComponent } from '../../components/search-input/search-input.js';
import { isAuthorized } from '../../modules/network.js';

export class ChatPageComponent extends BaseComponent {
  constructor(parent) {
    super(parent);
    this.getChatMessages = this.getChatMessages.bind(this);
    this.SendMessageFunc = this.SendMessageFunc.bind(this);
    this.AddReseivedMessage = this.AddReseivedMessage.bind(this);
  }

  async renderTemplate() {
    const template = Handlebars.templates['chat.hbs'];

    const userIDResponse = await fetch('http://localhost:8080/is_authorized', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const userIDResponseData = await userIDResponse.json();

    this.ChatOwnerID = userIDResponseData.user_id;

    const svgIcon = await this.loadSVG('./assets/icons/navigation-arrow.svg');

    const headerPart = new Header(this.Parent, false);

    const messageInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'Введите сообщение...',
      inputImageRight: svgIcon,
    });
    const searchInput = new SearchInputComponent(this.Parent, {
      Placeholder: 'искать друзей...',
    });

    const response = await fetch('http://localhost:8080/mychats', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const userChats = await response.json();

    const chatTemplates = [];
    userChats.forEach((chat) => {
      const component = new DialogPreviewComponent(this.Parent, {
        ChatID: chat['chat_id'],
        AvatarUrl: chat.companion['avatar_url'],
        NickName: chat.companion['nick_name'],
      });
      chatTemplates.push(component.renderTemplate());
    });

    const renderedTemplate = template({
      header: headerPart.renderTemplate(),
      messageInput: messageInput.renderTemplate(),
      searchInput: searchInput.renderTemplate(),
      dialogPreviews: chatTemplates,
    });

    this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);

    const dialogs = document.querySelectorAll('.dialog-preview');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', this.getChatMessages);
    });

    this.socket = new WebSocket('ws://localhost:8080/handshake');
    this.socket.onopen = function () {
      console.log('Соединение установлено');
    };

    this.socket.onclose = function (event) {
      console.log('Соединение закрыто:', event.reason);
    };

    this.socket.onmessage = this.AddReseivedMessage;

    const messageSubmitBtn = document.querySelector('.input__icon');
    messageSubmitBtn.addEventListener('click', this.SendMessageFunc);
  }

  async AddReseivedMessage(event) {
    const message = JSON.parse(event.data);
    const messageContainer = document.querySelector('.message-container');
    const messageComponent = new MessageComponent(this.Parent, {
      Content: message.data.content,
      AuthorID: message.data.sender_id,
      ChatOwnerID: this.ChatOwnerID,
    });
    const renderedMessages = messageComponent.renderTemplate();
    messageContainer.insertAdjacentHTML('beforeend', renderedMessages);
  }

  async SendMessageFunc(event) {
    event.preventDefault();

    const inputField = document.querySelector('.chat__dialog-input input');
    const messageValue = inputField.value;

    const message = {
      chat_id: parseInt(this.currentChatID),
      content: messageValue,
    };

    const messageJson = JSON.stringify(message);

    this.socket.send(messageJson);
    inputField.value = '';
  }

  async getChatMessages(event) {
    event.preventDefault();

    const dialogs = document.querySelectorAll('.dialog-preview');
    dialogs.forEach((dialog) => {
      dialog.classList.remove('active');
      dialog.classList.add('disabled');
    });
    event.currentTarget.classList.remove('disabled');
    event.currentTarget.classList.add('active');

    this.currentChatID = event.currentTarget.dataset.chatId;
    const urlPath =
      'http://localhost:8080/chat/' +
      this.currentChatID.toString() +
      '/messages';
    const response = await fetch(urlPath, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const messages = await response.json();
    const messageList = new MessageListComponent(this.Parent, {
      messagesInfo: messages,
      ChatOwnerID: this.ChatOwnerID,
    });
    const renderedMessages = messageList.renderTemplate();

    let dialogMessages = document.querySelector('.chat__dialog-messages');
    dialogMessages.innerHTML = '';
    dialogMessages.insertAdjacentHTML('afterbegin', renderedMessages);
  }

  async loadSVG(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const svgContent = await response.text();
      return svgContent;
    } catch (error) {
      console.error('Ошибка загрузки SVG:', error);
      return '';
    }
  }
}
