import { BaseComponent } from '../../components/base/base.js';
import { ButtonComponent as Button } from '../../components/button/button.js';
import { InputComponent } from '../../components/input/input.js';

/**
 * Component that is used to create and edit pins.
 */
export default class EditPinComponent extends BaseComponent {
  #pin;
  #editMode;

  /**
   * Creates a EditPinComponent.
   * @param {HTMLElement} parent - HTML element of the parent container.
   * @param {Object} pin - object of PinComponent class.
   */
  constructor(parent, pin, editMode) {
    super(parent);
    this.#pin = pin;
    this.#editMode = editMode;
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  renderTemplate() {
    const template = Handlebars.templates['editPin.hbs'];

    const titleInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'Добавьте название *',
      typeOfInput: 'text',
    });
    const descriptionInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'Добавьте описание',
      typeOfInput: 'text',
    });

    if (this.#editMode) {
      titleInput.setValue(this.#pin.Title);
      descriptionInput.setValue(this.#pin.Description);
    }

    const publishButton = new Button(this.Parent, {
      label: 'Опубликовать',
      type: 'submit',
      disabled: false,
      hover: false,
      active: false,
    });

    let renderedTemplate;
    renderedTemplate = template({
      TitleInput: titleInput.renderTemplate(),
      DescriptionInput: descriptionInput.renderTemplate(),
      PublishButton: publishButton.renderTemplate(),
      InEditMode: this.#editMode,
      PinBoard: this.#pin.PinBoard,
      noImage: true,
    });

    this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);
    const imageContainer = this.Parent.querySelector(
      '.editpin__image-container'
    );
    const imageInput = this.Parent.querySelector('#editpin__image-input');
    imageContainer.addEventListener('click', this.handleImageClick);
    imageInput.addEventListener('change', this.handleImageUpload);
  }

  handleImageClick(event) {
    event.preventDefault();
    const imageInput = this.Parent.querySelector('#editpin__image-input');
    imageInput.click();
  }

  async handleImageUpload(event) {
    event.preventDefault();
    const imageInput = event.target;

    if (imageInput.files && imageInput.files.length > 0) {
      const file = imageInput.files[0];
      const formData = new FormData();
      formData.append(this.filename, file);

      const responce = await fetch;
    }
  }
}
