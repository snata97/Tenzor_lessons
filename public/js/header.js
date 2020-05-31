import {Component} from './component.js';

class Header extends Component {
    constructor(options) {
       super(options);
    }
    render(options) {
        return `<header class="title">
            <img class="title__logo" src="img/logo.jpg" alt="Логотип">
            <h1 class="title__name" title="${options.title}">${options.title}</h1>
            <p class="title__body" title="${options.description}">${options.description}</p>
        </header>`;
    }
}

export {Header};