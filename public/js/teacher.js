import {Person} from './person.js';

class Teacher extends Person{
    constructor(params) {
       super(params);
       this.experience = params.experience;
       this.type = "teacher";
    }
}

export {Teacher};