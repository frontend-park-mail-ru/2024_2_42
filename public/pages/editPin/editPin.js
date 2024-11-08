import { BaseComponent } from '../../components/base/base.js';
import { ButtonComponent as Button } from '../../components/button/button.js';
import { InputComponent } from '../../components/input/input.js';
import { SaveBoxComponent } from '../../components/complex/savebox/savebox.js';

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
    this.uploadPinData = this.uploadPinData.bind(this);
  }

  renderTemplate() {
    this.Parent.innerHTML = '';
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
      Image: this.#pin.mediaUrl,
      MediaUrl: this.#pin.mediaUrl,
    });

    this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);
    const imageContainer = this.Parent.querySelector(
      '.editpin__image-container'
    );
    const imageInput = this.Parent.querySelector('#editpin__image-input');
    const submitBtn = this.Parent.querySelector('.editpin__submit button');
    imageContainer.addEventListener('click', this.handleImageClick);
    imageInput.addEventListener('change', this.handleImageUpload);
    submitBtn.addEventListener('click', this.uploadPinData);
  }

  handleImageClick(event) {
    event.preventDefault();
    const imageInput = this.Parent.querySelector('#editpin__image-input');
    imageInput.click();
  }

  async handleImageUpload(event) {
    event.preventDefault();
    let imageInput = event.target;

    if (imageInput.files && imageInput.files.length > 0) {
      const file = imageInput.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8080/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log(data['media-urls'][0]);

      this.#pin.mediaUrl = data['media-urls'][0].replace(
        'http://minio:9000',
        'http://localhost:9000'
      );

      console.log(this.#pin.mediaUrl);

      this.renderTemplate();
    }
  }

  async uploadPinData(event) {
    event.preventDefault();
    const TitleValue = this.Parent.querySelector('.editpin__title input').value;
    const DescriptionValue = this.Parent.querySelector(
      '.editpin__description input'
    ).value;
    const ImageUrl = this.#pin.mediaUrl;

    const requestBody = JSON.stringify({
      author_id: 1,
      description: DescriptionValue,
      title: TitleValue,
      media_url: ImageUrl,
    });
    
    console.log(requestBody);

    // await fetch('http://localhost:8080/create-pin', {
    //   method: 'POST',
    //   body: requestBody,
    // });

    await fetch('http://localhost:8080/create-pin', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    console.log(requestBody)

    console.log('fetch done successfully');
  }
}
