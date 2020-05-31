import {Component} from './component.js';
import {Popup} from './popup.js';

class PopupList extends Component {
    constructor(options) {
       super(options);
       this.popups = {};
    }
    render() {
       return `<div class="popup-list"></div>`;
    }
    open(key, options) {
       const popup = new Popup(options);
          this.popups[key] = popup;
          popup.mount(this.container);
    }
    clear(key){
      if (this.popups[key]) {
         this.popups[key].unmount();
         this.popups=[];
      }
    }
 }

 export {PopupList};