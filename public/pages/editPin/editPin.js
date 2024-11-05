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
	}

	/**
	 * Renderes a template of the edit pin page.
	 */
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
			active: false
		});

		let renderedTemplate;
		if (this.#editMode) {
			renderedTemplate = template({
				TitleInput: titleInput.renderTemplate(),
				DescriptionInput: descriptionInput.renderTemplate(),
				PublishButton: publishButton.renderTemplate(),
				InEditMode: this.#editMode,
				PinBoard: this.#pin.PinBoard,
			});
		}
		else {
			renderedTemplate = template({
				TitleInput: titleInput.renderTemplate(),
				DescriptionInput: descriptionInput.renderTemplate(),
				PublishButton: publishButton.renderTemplate(),
			});
		}

		this.Parent.insertAdjacentHTML('beforeend', renderedTemplate);
	}
}
