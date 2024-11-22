import { BaseComponent } from '../../components/base/base.js';
import { HeaderComponent as Header } from '../../components/complex/header/header.js';
import { MessageListComponent } from '../../components/complex/messagelist/messagelist.js';
import { DialogPreviewComponent } from '../../components/dialog-preview/dialog-preview.js';
import { InputComponent } from '../../components/input/input.js';
import { MessageComponent } from '../../components/message/message.js';
import { isAuthorized, postMethod } from '../../modules/network.js';
import ImgProcess from '../../modules/imgprocess.js';
import { SearchUserComponent } from '../../components/complex/searchuser/searchuser.js';
import { getMethod } from '../../modules/network.js';

export class ChatPageComponent extends BaseComponent {
  constructor(parent) {
    super(parent);
    this.getChatMessages = this.getChatMessages.bind(this);
    this.SendMessageFunc = this.SendMessageFunc.bind(this);
    this.AddReseivedMessage = this.AddReseivedMessage.bind(this);
    this.AddUserChat = this.AddUserChat.bind(this);
  }

  async renderTemplate() {
    const template = Handlebars.templates['chat.hbs'];

    const userIDResponseData = await getMethod(
      'http://localhost:8080/is_authorized'
    );

    this.ChatOwnerID = userIDResponseData.user_id;

    const svgIcon = await ImgProcess.loadSVG(
      './assets/icons/navigation-arrow.svg'
    );

    const headerPart = new Header(this.Parent, false);

    const messageInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'Введите сообщение...',
      inputImageRight: svgIcon,
    });

    const userChats = await getMethod('http://localhost:8080/mychats');

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
      dialogPreviews: chatTemplates,
      chatOpened: this.currentChatID,
    });

    this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);

    const chatSidebarSearch = document.querySelector('.chat__sidebar-search');

    const searchUserInput = new SearchUserComponent(
      chatSidebarSearch,
      {},
      this
    );
    searchUserInput.renderTemplate();

    const dialogs = document.querySelectorAll('.dialog-preview');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', this.getChatMessages);
    });

    this.socket = new WebSocket('ws://localhost:8080/handshake');

    this.socket.onmessage = this.AddReseivedMessage;

    const messageSubmitBtn = document.querySelector('.input__icon');
    messageSubmitBtn.addEventListener('click', this.SendMessageFunc);
  }

  async AddUserChat(event) {
    const companionID = event.currentTarget.dataset.companionId;
    const response = await postMethod(
      `http://localhost:8080/create/chat/${companionID}`
    );
    const component = new DialogPreviewComponent(this.Parent, {
      ChatID: response['chat_id'],
      AvatarUrl: response.companion['avatar_url'],
      NickName: response.companion['nick_name'],
    });
    const chatPreviewList = document.querySelector(
      '.chat__sidebar-dialog-list'
    );
    chatPreviewList.insertAdjacentHTML(
      'afterbegin',
      component.renderTemplate()
    );
    chatPreviewList.firstChild.addEventListener('click', this.getChatMessages);
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

    const chatDialogInput = document.querySelector('.chat__dialog-input');
    chatDialogInput.style.display = 'block';

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
    const messages = await getMethod(urlPath);
    const messageList = new MessageListComponent(this.Parent, {
      messagesInfo: messages,
      ChatOwnerID: this.ChatOwnerID,
    });
    const renderedMessages = messageList.renderTemplate();

    let dialogMessages = document.querySelector('.chat__dialog-messages');
    dialogMessages.innerHTML = '';
    dialogMessages.insertAdjacentHTML('afterbegin', renderedMessages);
  }
}
