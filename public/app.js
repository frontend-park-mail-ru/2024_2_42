import {LoginComponent as Login} from './pages/login/login.js';
import {SignUpComponent as SignUp} from './pages/signup/signup.js';

// import Menu from './components/Menu/Menu.js';

export const ROUTES = {
	// feed: '/feed',
	login: '/login',
	signup: '/signup',
};

export default class App {
	state;
	handlers = {};
	#structure = {};
	config;
	root;

	constructor(config, root) {
		this.config = config;
		this.root = root;
	}

	render(pageRoute) {
		switch (pageRoute) {
            case ROUTES.login:
                history.pushState({}, '', ROUTES.login);
				this.#renderLogin();
				break;
            case ROUTES.signup:
                history.pushState({}, '', ROUTES.signup);
                this.#renderSignup();
                break;
			// default:
			// 	history.pushState({}, '', ROUTES.feed);
			// 	this.#renderFeed();
		}
	}

	goToPage(pageRoute, deleteEverything = false) {
        console.log('Clearing everything...')

        this.clear(deleteEverything);

        console.log('Randering', pageRoute + '...')

		this.render(pageRoute);
	}

	clear(deleteEverything) {
		document.removeEventListener('scroll', this.handlers.scrollHandler);
		Object.keys(this.#structure).forEach((key) => {
			if (deleteEverything || key !== 'menu') {
				this.#structure[key].remove();
				delete this.#structure[key];
			}
		});
	}

	// #renderMenu() {
	// 	const menu = new Menu(this.config.homeConfig.menu, this.root);
	// 	if (!this.#structure.menu) {
	// 		this.#structure.menu = menu;
	// 		menu.render();
	// 	}
	// 	// хэндлеры добавлять после рендера, иначе стираются eventListenerы (при использовании innerHTML +=)
	// 	menu.addHandler(
	// 		menu.htmlElement.querySelector('a[data-section="feed"]'),
	// 		'click',
	// 		(event) => {
	// 			event.preventDefault();
	// 			this.goToPage(PAGE_LINKS.feed);
	// 		},
	// 	);
	// 	menu.addHandler(
	// 		menu.htmlElement.querySelector('a[data-section="signup"]'),
	// 		'click',
	// 		(event) => {
	// 			event.preventDefault();
	// 			this.goToPage(PAGE_LINKS.signup, true);
	// 		},
	// 	);
	// }

	// #renderFeed() {
	// 	const config = this.config.homeConfig;

	// 	this.#renderMenu();

	// 	const main = new Container({ key: 'main', ...config.main }, this.root);
	// 	main.render();
	// 	this.#structure.main = main;

	// 	const header = new Header(
	// 		{ key: 'header', ...config.main.header },
	// 		main.htmlElement,
	// 	);
	// 	header.render();
	// 	this.#structure.main.header = header;

	// 	const content = new Container(
	// 		{ key: 'content', ...config.main.content },
	// 		main.htmlElement,
	// 	);
	// 	content.render();
	// 	this.#structure.main.content = content;

	// 	const aside = new Container(
	// 		{
	// 			key: 'aside',
	// 			...config.main.aside,
	// 		},
	// 		main.htmlElement,
	// 	);
	// 	aside.render();
	// 	this.#structure.main.aside = aside;

	// 	this.#fillContent();

	// 	this.handlers.scrollHandler = () => {
	// 		const scrollPosition = window.scrollY;
	// 		const contentHeight = document.body.offsetHeight;
	// 		const windowHeight = window.innerHeight;

	// 		if (scrollPosition + windowHeight * 2 >= contentHeight) {
	// 			this.#addPost();
	// 		}
	// 	};
	// 	document.addEventListener('scroll', this.handlers.scrollHandler);
	// }

	// #addPost() {
	// 	let config;
	// 	Ajax.get('/api/post', (data, error) => {
	// 		if (error) {
	// 			console.log('add post error');
	// 		} else if (data) {
	// 			config = data;
	// 			const post = new Post(
	// 				config,
	// 				this.#structure.main.content.htmlElement,
	// 			);
	// 			post.render();
	// 		}
	// 	});
	// }

	// #addPostPromise() {
	// 	return Ajax.getPromise('/api/post');
	// }

	// #fillContent() {
	// 	const fill = async () => {
	// 		while (window.innerHeight * 2 > document.body.offsetHeight) {
	// 			const promise = this.#addPostPromise();
	// 			await promise
	// 				.then((data) => {
	// 					const post = new Post(
	// 						data,
	// 						this.#structure.main.content.htmlElement,
	// 					);
	// 					post.render();
	// 				})
	// 				.catch((error) => {
	// 					console.log('fill content error:', error);
	// 				});
	// 		}
	// 	};
	// 	fill();
	// }

	#renderLogin() {
        const config = this.config.loginConfig;
		const login = new Login(this.root, config.inputs, config.button);
		login.renderTemplate();
		this.#structure.login = login;
	}

    #renderSignup() {
        const config = this.config.signupConfig;
        const signUp = new SignUp(this.root, config.inputs, config.button);
        signUp.renderTemplate();
        this.#structure.signUp = signUp;
    }
}
