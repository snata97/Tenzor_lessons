import {Component} from './component.js';

class Header extends Component {
    render({title, description}) {
        return `
        <header class="title">
            <img class="title__logo" src="img/logo.jpg" alt="Логотип">
            <h1 class="title__name" title="${title}">${title}</h1>
            <p class="title__body" title="${description}">${description}</p>
        </header>
        `;
    }
}

export {Header};