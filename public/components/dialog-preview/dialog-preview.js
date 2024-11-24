'use strict';

import { BaseComponent } from '../base/base.js';

export class DialogPreviewComponent extends BaseComponent {
  constructor(parent, state = {}) {
    super(parent, state);
  }

  renderTemplate() {
    const template = Handlebars.templates['dialog-preview.hbs'];
    const renderedTemplate = template(this.State);
    return renderedTemplate;
  }
}
