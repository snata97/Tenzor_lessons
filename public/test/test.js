import {Student} from '../js/student.js';
import {Header} from '../js/header.js';

describe("Тестируем компоненты", function() {
   'use strict';
   describe("Тестируем компонент Student", function() {
        it('birthDateStr должен вернуть строковый вариант даты рождения (например, 2 декабря)', function() {
            // arrange
            const itemStudent = {
                "id": 1,
                "fullName": "Миша Петров",
                "university": "УГАТУ",
                "course": 2,
                "birthDate": "1990-12-02",
                "photoUrl": "img/ava01.jpg"
            };
            let student = new Student({ item: itemStudent});
            // act
            let bds = student.birthDateStr;

            //assert
            assert.equal(bds, "2 декабря");
        });
   })
   describe("Тестируем компонент Header", function() {
        it('Конструирование компонента Header с тестовыми данными, тестирование функции toString()', function() {
            // arrange
            const options = {
                title: 'title_test',
                description: 'description_test'  
            };
            const head = new Header(options);

            // act
            let render = head.toString();

            //assert
            assert.equal(render.replace(/ /g, ''),`<header class="title">
                    <img class="title__logo" src="img/logo.jpg" alt="Логотип">
                    <h1 class="title__name" title="title_test">title_test</h1>
                    <p class="title__body" title="description_test">description_test</p>
                </header>`.replace(/ /g, '')
            );
        });
    })
});

mocha.run();

   