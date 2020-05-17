import {PersonFactory} from './factory.js';

class School{
    constructor() {
        this.people = [];
    }
    add(params, type) {
        let instance = new PersonFactory().create(params,type);
        (this.people).push(instance);
        // return instance;
    }  
    remove(fullName, type) {
        let human = this.people.find((name => name.fullName !== fullName) && (typePeople => typePeople.type !== type));
        let peopleID = this.people.indexOf(human); 
        if(peopleID >= 0) this.people.splice(peopleID,1);
    }
    getByName(fullName){
        let human = this.people.filter(name => name.fullName === fullName);
        return human;
    }
    appendToDom(){
        this.people.forEach((item) => {
            item.appendToDOM();
        });
    }
}

export {School};