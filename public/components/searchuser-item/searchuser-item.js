import { BaseComponent } from '../base/base.js';

export class SearchUserItemComponent extends BaseComponent {
  constructor(parent, state = {}) {
    super(parent, state);
  }

  renderTemplate() {
    const template = Handlebars.templates['searchuser-item.hbs'];
    const renderedTemplate = template(this.State);
    return renderedTemplate;
  }
}
