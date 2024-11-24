import { BaseComponent } from '../../base/base.js';
import { InputComponent } from '../../input/input.js';
import { postMethod } from '../../../modules/network.js';
import { SearchUserItemComponent } from '../../searchuser-item/searchuser-item.js';
import { DialogPreviewComponent } from '../../dialog-preview/dialog-preview.js';

export class SearchUserComponent extends BaseComponent {
  constructor(parent, state, chat) {
    super(parent, state);
    this.chat = chat;
    this.HandleUserInput = this.HandleUserInput.bind(this);
    this.HandleUserInputStop = this.HandleUserInputStop.bind(this);
    this.UpdateFoundUsersList = this.UpdateFoundUsersList.bind(this);
  }

  renderTemplate() {
    const template = Handlebars.templates['searchuser.hbs'];

    const messageInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'найдите друзей...',
    });

    const renderedTemplate = template({
      searchInput: messageInput.renderTemplate(),
    });

    this.Parent.insertAdjacentHTML('afterbegin', renderedTemplate);

    const userInput = this.Parent.querySelector('.search-user__input input');
    userInput.addEventListener('input', this.HandleUserInput);
    userInput.addEventListener('blur', this.HandleUserInputStop);
  }

  async HandleUserInput(event) {
    const userList = this.Parent.querySelector('.search-user__list');
    userList.style.display = 'block';

    const nickNameVal = event.currentTarget.value;
    const response = await postMethod('http://localhost:8080/users/by/params', {
      nick_name: nickNameVal,
    });
    this.foundUsers = response;
    this.UpdateFoundUsersList();
  }

  UpdateFoundUsersList() {
    const userList = this.Parent.querySelector('.search-user__list');
    userList.innerHTML = '';
    this.foundUsers.forEach((user) => {
      const newUserItem = new SearchUserItemComponent(this.Parent, {
        UserName: user.user_name,
        NickName: user.nick_name,
        AvatarUrl: user.avatar_url,
        UserID: user.user_id,
      });
      userList.insertAdjacentHTML('beforeend', newUserItem.renderTemplate());
    });
    const addChatBtns = this.Parent.querySelectorAll('.add-chat-btn');
    addChatBtns.forEach((btn) => {
      btn.addEventListener('mousedown', this.chat.AddUserChat);
    });
  }

  HandleUserInputStop(event) {
    if (event.currentTarget.classList.contains('.add-chat-btn')) {
      this.UpdateFoundUsersList();
    }
    const userList = this.Parent.querySelector('.search-user__list');
    userList.style.display = 'none';
  }
}
