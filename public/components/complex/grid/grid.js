'use strict';

import { BaseComponent } from '../../base.js';

import { PinComponent } from '../pin/pin.js';

import { PreviewComponent as Preview } from '../preview/preview.js';
import { SaveBoxComponent as SaveBox } from '../savebox/savebox.js';

import { BoardsListComponent as BoardsList } from '../../boards-list/boards-list.js';
import { DetailsMenuComponent as DetailsMenu } from '../../details-menu/details-menu.js';

const DEFAULT_FULLPAGE_WIDTH = 1920;
const DEFAULT_COLUMNS_N_FOR_FULLPAGE = 7;

const PREVIEW_IMG_X_FACTOR = 1.5;

/**
 * Represents a Grid Component that contains multiple Pin Components.
 * @class
 */
export class GridComponent extends BaseComponent {
	#pins = []; // pins stored on the grid 
	#marginTop;

	/**
	 * Creates an instance of GridComponent.
	 * @param {HTMLElement} parent - The parent element for rendering.
	 * @param {Array} pins - An array of objects representing pin data.
	 * @param {Boolean} marginTop - Should grid be margin topped or not.
	 */
	constructor(parent, pins, marginTop) {
		super(parent);
		this.#pins = pins;
		this.#marginTop = marginTop;

		// Providing layout rebuild on resize events
		window.addEventListener('resize', (event) => {
			event.preventDefault();

			let body = document.body,
				html = document.documentElement;

			let height = Math.max(body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight);

			const pageDarkBlurBack = document.getElementById('page__dark-blur-container');
			if (pageDarkBlurBack) {
				pageDarkBlurBack.style.height = height + 'px';
			}
			const pageTransparentBlurBack = document.getElementById('page__transparent-container');
			if (pageTransparentBlurBack) {
				pageTransparentBlurBack.style.height = height + 'px';
			}

			this.buildLayout();
		}, true);
	}

	/**
	 * Renders the component template and displays the pins.
	 * Clears the parent container and adds new pin elements.
	 */
	renderTemplate() {
		const template = Handlebars.templates['grid.hbs'];
		let pinsToRender = [];

		// Render each PinComponent using its template
		for (const pinData of this.#pins) {
			pinData.media_url = pinData.media_url.replace('http://minio:9000', 'http://localhost:9000');
			const newPin = new PinComponent(pinData);
			pinsToRender.push(newPin);
		};

		const renderedTemplate = template({
			pins: pinsToRender.map((pin) => pin.renderTemplate())
		});

		return renderedTemplate
	}

	/**
	 * Dynamically calculates layout parameters and positions grid. 
	 */
	buildLayout() {
		const columnsN = this.adaptiveColumnsN;
		const widthGutter = 30, heightGutter = 15;
		let heights = new Array(columnsN).fill(0);

		let headerHeight = 0;
		if (this.#marginTop) {
			const header = document.querySelector('.header__content-container');
			if (header) {
				headerHeight = header.clientHeight;
			}
		}

		const columnWidth = (this.parentContainerWidth - widthGutter * (columnsN + 1)) / columnsN;

		for (const pin of this.#pins) {
			const pinContainer = document.querySelector(`.pin__content-container-${pin.pin_id}`);
			if (pinContainer) {
				const pinImage = document.querySelector(`.pin__image-${pin.pin_id}`);
	
				pinContainer.style.width = pinImage.style.width = `${columnWidth}px`;
	
				// Next column index to insert the pinContainer
				const minIdx = heights.indexOf(Math.min(...heights));
	
				pinContainer.style.top = `${heights[minIdx] + heightGutter + headerHeight}px`;
				pinContainer.style.left = `${minIdx * columnWidth + widthGutter * (minIdx + 1)}px`;
	
				heights[minIdx] += pinContainer.offsetHeight + heightGutter;
			}
		}

		const layoutContainer = document.querySelector('.feed__layout-container');
		if (layoutContainer) {
			layoutContainer.style.height = `${Math.max(...heights)}px`;
		}
	}

	/**
	 * Returns width of parent container.
	 */
	get parentContainerWidth() {
		return this.Parent.innerWidth || this.Parent.clientWidth;
	}

	/**
	 * Returns a default ration that must be maintained between page size and columns number.
	 */
	get parentContainerColumnsRatio() {
		return DEFAULT_FULLPAGE_WIDTH / DEFAULT_COLUMNS_N_FOR_FULLPAGE;
	}

	/**
	 * Returns the number of columns adapted for current page width.
	 */
	get adaptiveColumnsN() {
		let newColumnN = Math.floor(this.parentContainerWidth / this.parentContainerColumnsRatio);
		if (newColumnN == 0)
			newColumnN = 1;
		
		return newColumnN;
	}

	/**
	 * Makes pins previewable.
	 * @param {Object} pin - pin object containing its information including ID and media url.
	 */
	buildPinPreview(pin) {
		const pinPreviewBtn = document.querySelector(`.pin__image-preview-button-${pin.pin_id}`);
		const parent = document.getElementById('root');

		const previewState = {
			MediaUrl: pin.media_url,
			AuthorAvatarUrl: './assets/imgs/avatar.jpg',
			AuthorName: pin.author_id,
			Boards: [
				{
					BoardCoverUrl: './assets/imgs/michael.jpg',
					BoardName: 'SingersSingersSingers',
					Private: true,
				},
				{
					BoardCoverUrl: './assets/imgs/recipe.jpg',
					BoardName: 'Recipes',
					Private: true,
				},
				{
					BoardCoverUrl: './assets/imgs/art.jpg',
					BoardName: 'Work-of-art',
					Private: false,
				},
				{
					BoardCoverUrl: './assets/imgs/michael.jpg',
					BoardName: 'Singers 2Singers 2Singers 2',
					Private: false,
				},
				{
					BoardCoverUrl: './assets/imgs/recipe.jpg',
					BoardName: 'Recipes 2',
					Private: true,
				},
				{
					BoardCoverUrl: './assets/imgs/art.jpg',
					BoardName: 'Work-of-art 2',
					Private: true,
				},
				{
					BoardCoverUrl: './assets/imgs/michael.jpg',
					BoardName: 'Singers 3',
					Private: false,
				},
				{
					BoardCoverUrl: './assets/imgs/recipe.jpg',
					BoardName: 'Recipes 3',
					Private: true,
				},
				{
					BoardCoverUrl: './assets/imgs/art.jpg',
					BoardName: 'Work-of-art 3',
					Private: false,
				},
			],
			DetailsOptions: [
				{
					ID: 1,
					Text: 'Открыть',
					Download: false,
				},
				{
					ID: 2,
					Text: 'Скачать',
					Download: true,
					FilePath: pin.MediaUrl,
				},
				{
					ID: 3,
					Text: 'Не интересно',
					Download: false,
				},
				{
					ID: 4,
					Text: 'Пожаловаться',
					Download: false,
				},
			],
			Bookmarked: false,
			BookmarksNumber: 390,
			ViewsNumber: 10_000_000,
		}

		pinPreviewBtn.addEventListener('click', (event) => {
			event.preventDefault();

			// create expanded pin version
			const preview = new Preview(parent, previewState);
			const previewRendered = preview.renderTemplate();

			parent.insertAdjacentHTML('beforeend', previewRendered);

			// Adding buttons listeners
			this.addBookmarkBtnListener(previewState);
			this.addSaveBtnListener(previewState.Boards);
			this.addMoreBtnListener(previewState.DetailsOptions);
			
			const pinImageElement = document.querySelector(`.pin__image-${pin.pin_id}`);

			let intWidth = parseInt(pinImageElement.style.width, 10);
			let intHeight = parseInt(pinImageElement.style.height, 10);

			const previewContainer = document.querySelector('.preview__content-container');
			const previewTopSide = document.querySelector('.preview__stats-bookmarks-container');
			const previewBottomSide = document.querySelector('.preview__author-container');
			const previewRightSide = document.querySelector('.preview__side-menu-container');

			previewContainer.style.width = `${intWidth * PREVIEW_IMG_X_FACTOR + previewRightSide.clientWidth}px`;
			previewContainer.style.height = `${intHeight * PREVIEW_IMG_X_FACTOR + previewTopSide.clientHeight + previewBottomSide.clientHeight}px`;
			previewContainer.style.marginTop = '3%';

			// Create dark transparent background and add event listeners
			this.createBackgroundListeners();

			this.#boardsToSaveTo = [];
		});
	}

	/**
	 * Creates a handler for dark blured background and its listeners.
	 */
	createBackgroundListeners() {
		const root = document.getElementById('root');

		if (!document.getElementById('page__dark-blur-container')) {
			const pageBluredBackground = document.createElement('div');
			pageBluredBackground.id = 'page__dark-blur-container';

			pageBluredBackground.style.height = `${document.body.scrollHeight}px`;

			root.appendChild(pageBluredBackground);

			// Add eventListener on Escape press
			document.addEventListener('keydown', (event) => {
				this.removePreviewOnEscape(event, pageBluredBackground)
			});

			// Also add eventListener on background click
			const self = this;
			pageBluredBackground.addEventListener('click', (event) => {
				event.preventDefault();

				const pinPreview = document.querySelector('.preview__content-container');
				if (root.contains(pinPreview)) {
					root.removeChild(pinPreview);
				}
				root.removeChild(pageBluredBackground);

				document.removeEventListener('keydown', self.removePreviewOnEscape);
			});
		}
	}

	/**
	 * Handles preview container remove on Escape key press.
	 * @param {Event} event - event that was generated by key press.
	 * @param {HTMLElement} pageBluredBackground - dark blured background HTML element.
	 * @returns 
	 */
	removePreviewOnEscape(event, pageBluredBackground) {
		if (event.target.matches('[name="search-input"]')) {
			return;
		}

		event.preventDefault();

		if (event.code == 'Escape' && event.key == 'Escape') {
			const pinPreview = document.querySelector('.preview__content-container');
			if (root.contains(pinPreview)) {
				root.removeChild(pinPreview);
			}
			const transparentBackground = document.getElementById('page__transparent-container');
			if (root.contains(transparentBackground)) {
				root.removeChild(transparentBackground);
			}
			if (root.contains(pageBluredBackground)) {
				root.removeChild(pageBluredBackground);
			}

		}

		document.removeEventListener('keydown', this.removePreviewOnEscape);
	}

	/**
	 * Creates a handler for bookmark button click events.
	 * @param {HTMLElement} bookmarkElement - a bookmark button HTML element that was clicked.
	 * @param {Object} previewState - preview state object containing its state info.
	 */
	bookmarkListenerHandler(bookmarkElement, previewState) {
		if (previewState.Bookmarked) {
			bookmarkElement.src = './assets/icons/bookmark-empty.svg';
			previewState.Bookmarked = false;
			previewState.BookmarksNumber--;
		}
		else {
			bookmarkElement.src = './assets/icons/bookmark-fill.svg';
			previewState.Bookmarked = true;
			previewState.BookmarksNumber++;
		}
		document.querySelector('.preview__stats-bookmarks-number').textContent = previewState.BookmarksNumber;
	}

	/**
	 * Creates a listener for bookmark button events. 
	 * @param {Object} previewState - preview state object containing its state info.
	 */
	addBookmarkBtnListener(previewState) {
		const bookmarkBtn = document.querySelector('.preview__side-menu-bookmark');
		bookmarkBtn.addEventListener('click', (event) => {
			event.preventDefault();
			this.bookmarkListenerHandler(bookmarkBtn, previewState);
		});
	}

	/**
	 * Boolean flag signilizing about save button click state.
	 */
	#saveBtnClicked;

	/**
	 * Creates a handler for save button click events.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	saveBtnListenerHandler(boards) {
		if (document.querySelector('.details-menu__content-container')) {
			const detailsMenuContainer = document.querySelector('.details-menu__content-container');
			document.querySelector('.preview__side-menu-more-container').removeChild(detailsMenuContainer);
			this.#moreBtnClicked = false;

			const pageTransparentBackground = document.getElementById('page__transparent-container');
			document.getElementById('root').removeChild(pageTransparentBackground);
		}

		if (this.#saveBtnClicked) {
			document.querySelector('.preview__board-selector').style.background = 'no-repeat right 0.8em center / 1.4em';
			const saveBtnIcon = document.querySelector('.preview__board-selector-container-icon');
			saveBtnIcon.style.transform = 'none';
			saveBtnIcon.src = './assets/icons/expand-list.svg';
			document.querySelector('.preview__board-selector-container-text').style.color = 'white';
			this.#saveBtnClicked = false;

			const previewBoardSelectorContainer = document.querySelector('.preview__board-selector');
			const saveBoxContainer = document.querySelector('.savebox__content-container');
			previewBoardSelectorContainer.removeChild(saveBoxContainer);

			const transparentContainer = document.getElementById('page__transparent-container');
			if (transparentContainer) {
				document.querySelector('#root').removeChild(transparentContainer);
			}
		}
		else {
			document.querySelector('.preview__board-selector').style.background = 'white';
			const saveBtnIcon = document.querySelector('.preview__board-selector-container-icon');
			saveBtnIcon.src = './assets/icons/expand-list-flipped.svg';
			saveBtnIcon.style.transform = 'ScaleY(-1)';
			document.querySelector('.preview__board-selector-container-text').style.color = 'black';
			this.#saveBtnClicked = true;

			const saveBoxMarginTop = 20;
			const saveBox = new SaveBox(this.Parent, boards);
			const previewBoardSelectorContainer = document.querySelector('.preview__board-selector');
			const renderedSaveBox = saveBox.renderTemplate();
			previewBoardSelectorContainer.insertAdjacentHTML('beforeend', renderedSaveBox);

			const saveBoxContentContainer = document.querySelector('.savebox__content-container');
			const saveBtnContainer = document.querySelector('.preview__board-selector');

			saveBoxContentContainer.style.top = saveBtnContainer.clientHeight + saveBoxMarginTop + 'px';

			this.addSearchInputListener(boards);
			this.addInputClearBtnListener(boards);
			this.addSaveToBoardListener(boards);
			this.addTransparentLayoutForSaveBox();

			for (const boardName of this.#boardsToSaveTo) {
				const checkedBoard = document.getElementById(`checkbox-${boardName}`);
				if (checkedBoard) {
					checkedBoard.checked = true;
				}
			}
		}
	}

	/**
	 * Creates a listeners for save button events.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	addSaveBtnListener(boards) {
		this.#saveBtnClicked = false;

		document.querySelector('.preview__board-selector-container').addEventListener('click', (event) => {
			event.preventDefault();
			this.saveBtnListenerHandler(boards);
		})
	}

	/**
	 * Boolean flag signilizing about more button click state.
	 */
	#moreBtnClicked;

	/**
	 * Creates a handler for side menu 'more' button and its events.
	 * @param {Array} options - options provided for details menu container.
	 */
	moreBtnListenerHandler(options) {
		if (this.#moreBtnClicked) {
			const detailsMenuContainer = document.querySelector('.details-menu__content-container');
			document.querySelector('.preview__side-menu-more-container').removeChild(detailsMenuContainer);
			this.#moreBtnClicked = false;
		}
		else {
			const detailsMenu = new DetailsMenu(this.Parent, options);
			const renderedDetailsMenu = detailsMenu.renderTemplate();
			document.querySelector('.preview__side-menu-more-container').insertAdjacentHTML('beforeend', renderedDetailsMenu);
	
			this.addTransparentLayoutForDetailsMenu();

			const detailMenuContainer = document.querySelector('.details-menu__content-container');
			const menuMoreElement = document.querySelector('.preview__side-menu-more');
	
			const detailMenuContainerMarginTop = -15;
			detailMenuContainer.style.top = menuMoreElement.clientHeight + detailMenuContainerMarginTop + 'px';

			detailMenuContainer.style.left = - ((detailMenuContainer.clientWidth - menuMoreElement.clientWidth) / 2) + 'px';

			this.#moreBtnClicked = true;
		}
	}

	/**
	 * Creates a listener of side menu 'more' button events.
	 * @param {Array} options 
	 */
	addMoreBtnListener(options) {
		this.#moreBtnClicked = false;

		document.querySelector('.preview__side-menu-more').addEventListener('click', (event) => {
			event.preventDefault();
			this.moreBtnListenerHandler(options);
		});
	}

	/**
	 * Creates a handler for search input clear button click event.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	searchInputClearBtnListenerHandler(boards) {
		const searchInputField = document.querySelector(`.savebox__content-main-box
														.searchinput__content-container
														.searchinput__search-field`);
		searchInputField.value = '';
		searchInputField.focus();
		this.searchInputListenerHandler(searchInputField, boards);
	}

	/**
	 * Creates a listener of search input clear button events.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	addInputClearBtnListener(boards) {
		const searchInputClearIcon = document.querySelector(`.savebox__content-main-box
														.searchinput__content-container
														.searchinput__clear-icon`);
		searchInputClearIcon.addEventListener('click', (event) => {
			event.preventDefault();
			this.searchInputClearBtnListenerHandler(boards);
		});
	}

	/**
	 * List of checked boards at that time.
	 */
	#boardsToSaveTo = [];

	/**
	 * Creates a handler for search input field change events.
	 * @param {HTMLElement} inputField - a HTMLElement of search input field.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	searchInputListenerHandler(inputField, boards) {
		let matchedBoards = [];
		const searchText = inputField.value;
		for (const board of boards) {
			if (board.BoardName.toLowerCase().includes(searchText.toLowerCase())) {
				matchedBoards.push(board);
			}
		}

		// Remove boards from current list
		const boardsListContainer = document.querySelector('.savebox__boards-list-container');
		const boardsList = document.querySelector('.savebox__boards-list');
		if (boardsListContainer.contains(boardsList)) {
			boardsListContainer.removeChild(boardsList);
		}

		// Rerender boards list with new matched boards
		const newBoardsList = new BoardsList(this.Parent, matchedBoards);
		const renderedList = newBoardsList.renderTemplate();
		boardsListContainer.insertAdjacentHTML('beforeend', renderedList);

		this.addSaveToBoardListener(matchedBoards);

		for (const boardName of this.#boardsToSaveTo) {
			const checkedBoard = document.getElementById(`checkbox-${boardName}`);
			if (checkedBoard) {
				checkedBoard.checked = true;
			}
		}
	}

	/**
	 * Creates a listener of search input field change event.
	 * @param {Array} boards - the list of boards which belongs to current authorized user.
	 */
	addSearchInputListener(boards) {
		const searchInputField = document.querySelector(`.savebox__content-main-box
														.searchinput__content-container
														.searchinput__search-field`);
		searchInputField.addEventListener('input', (event) => {
			event.preventDefault();
			this.searchInputListenerHandler(searchInputField, boards);
		});
	}

	/**
	 * Adds transparent layout under the save box.
	 */
	addTransparentLayoutForSaveBox() {
		const root = document.getElementById('root');
		if (!document.getElementById('page__transparent-container')) {
			const pageTransparentBackground = document.createElement('div');
			pageTransparentBackground.id = 'page__transparent-container';

			pageTransparentBackground.style.height = `${document.body.scrollHeight}px`;

			root.appendChild(pageTransparentBackground);

			pageTransparentBackground.addEventListener('click', (event) => {
				event.preventDefault();

				document.querySelector('.preview__board-selector').style.background = 'none';
				const saveBtnIcon = document.querySelector('.preview__board-selector-container-icon');
				saveBtnIcon.style.transform = 'none';
				saveBtnIcon.src = './assets/icons/expand-list.svg';
				document.querySelector('.preview__board-selector-container-text').style.color = 'white';
				this.#saveBtnClicked = false;

				const saveBox = document.querySelector('.savebox__content-container');

				document.querySelector('.preview__board-selector').removeChild(saveBox);
				root.removeChild(pageTransparentBackground);
			});
		}
	}

	/**
	 * Adds transparent layout under the detailes menu box.
	 */
	addTransparentLayoutForDetailsMenu() {
		const root = document.getElementById('root');
		if (!document.getElementById('page__transparent-container')) {
			const pageTransparentBackground = document.createElement('div');
			pageTransparentBackground.id = 'page__transparent-container';

			pageTransparentBackground.style.height = `${document.body.scrollHeight}px`;

			root.appendChild(pageTransparentBackground);

			pageTransparentBackground.addEventListener('click', (event) => {
				event.preventDefault();

				const detailsMenuContainer = document.querySelector('.details-menu__content-container');
				if (detailsMenuContainer) {
					document.querySelector('.preview__side-menu-more-container').removeChild(detailsMenuContainer);
					this.#moreBtnClicked = false;
				}
				root.removeChild(pageTransparentBackground);
			});
		}
	}

	/**
	 * Creates a handler for boards list checkboxes.
	 * @param {Event} event - event that was generated by checkboxes state.
	 */
	saveToBoardListenerHandler(event) {
		if (event.currentTarget.checked) {
			this.#boardsToSaveTo.push(event.currentTarget.value);
		}
		else {
			const index = this.#boardsToSaveTo.indexOf(event.currentTarget.value);
			if (index > -1) {
				this.#boardsToSaveTo.splice(index, 1);
			}
		}

		if (this.#boardsToSaveTo.length > 0) {
			document.querySelector('.preview__board-selector-container-text').textContent = 'Сохранено';
		}
		else {
			document.querySelector('.preview__board-selector-container-text').textContent = 'Сохранить';
		}
	}

	/**
	 * Creates a listener of save-to-board checkboxes change event.
	 * @param {Array} boards - the list of boards which belongs to current authorized user. 
	 */
	addSaveToBoardListener(boards) {
		for (const board of boards) {
			document.getElementById(`checkbox-${board.BoardName}`).addEventListener('change', (event) => {
				event.preventDefault();
				this.saveToBoardListenerHandler(event);
			});
		}
	}
};
