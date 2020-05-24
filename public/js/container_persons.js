import {Component} from './component.js';

class ContainerPersons extends Component {
    render() {
        return `
        <div class="persons">
            <div class="persons__items">
            </div>
        </div>
        `;
    }
}

export {ContainerPersons};