"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("./fetch");
// !!! The APIs for POST / DELETE are closed as of now. The API for GET will still be open for limited time
// To continue, you'll need to define your own APIs (here we used Firebase: https://firebase.google.com/docs/database)
window.onload = () => {
    const USERS_KEY = 'APP-USERS';
    // const users = localStorage.getItem(USERS_KEY);
    // [{id: 'X', name: ''}]
    let userList;
    // const apiCall = new XMLHttpRequest();
    // apiCall.addEventListener('load', () => {
    //   console.log('XMLHttpRequest RESPONSE BODY', apiCall.response)
    //   const response = JSON.parse(apiCall.response);
    //
    //   userList = Object.keys(response).map(userId => {
    //     return {
    //       id: userId,
    //       name: response[userId].name
    //     }
    //   })
    //
    //   console.log('USER LIST FROM SERVER', userList);
    //
    //   localStorage.setItem(USERS_KEY, JSON.stringify(userList));
    //   renderUsers();
    //
    //   // debugger;
    // })
    // apiCall.open('GET', 'https://js-course-2.firebaseio.com/users.json');
    // apiCall.send();
    // if (users) {
    //   userList = users.split(',');
    // } else {
    //   userList = ['Andrei', 'Catalin', 'Gigi'];
    //   localStorage.setItem(USERS_KEY, userList);
    // }
    fetch_1.callApi('https://js-course-2.firebaseio.com/users.json').then(responseBody => {
        const safeResponseBody = responseBody || {};
        userList = Object.keys(safeResponseBody).map(userId => {
            return {
                id: userId,
                name: responseBody[userId].name,
            };
        });
        console.log('USER LIST FROM SERVER', userList);
        localStorage.setItem(USERS_KEY, JSON.stringify(userList));
        renderUsers();
    });
    function renderUsers() {
        const nameList = document.getElementsByClassName('name-list')[0];
        nameList.innerHTML = '';
        const usersFragment = userList
            .map(user => {
            const listItem = document.createElement('li');
            listItem.innerText = user.name;
            listItem.setAttribute('DATA-ID', user.id);
            listItem.classList.add('name-list-item');
            removeOnClick(listItem);
            return listItem;
        })
            .reduce((currentFragment, listItem) => {
            currentFragment.appendChild(listItem);
            return currentFragment;
        }, document.createDocumentFragment());
        nameList.appendChild(usersFragment);
        function removeOnClick(listItem) {
            listItem.addEventListener('click', () => {
                const userIdToRemove = listItem.getAttribute('DATA-ID');
                fetch_1.callApi(`https://js-course-2.firebaseio.com/users/${userIdToRemove}.json`, 'DELETE').then(() => {
                    userList = userList.filter(user => user.id !== userIdToRemove);
                    console.log('REMOVE USER', userList);
                    localStorage.setItem(USERS_KEY, JSON.stringify(userList));
                    renderUsers();
                });
            });
        }
    }
    const button = document.getElementsByClassName('add-button')[0];
    button.addEventListener('click', () => {
        const newNameInput = document.getElementsByClassName('name-input')[0];
        const newName = newNameInput.value.trim();
        if (newName !== '') {
            const userAlreadyExists = userList.find(user => user.name.toLowerCase() === newName.toLowerCase());
            if (userAlreadyExists) {
                showValidationMessage('User already exists');
            }
            else {
                const newUser = {
                    id: '',
                    name: newName,
                };
                fetch_1.callApi('https://js-course-2.firebaseio.com/users.json', 'POST', newUser).then(responseBody => {
                    newUser.id = responseBody.name;
                    console.log('ADD USER', newUser);
                    userList = [...userList, newUser];
                    localStorage.setItem(USERS_KEY, JSON.stringify(userList));
                    newNameInput.value = '';
                    renderUsers();
                });
            }
        }
        else {
            showValidationMessage('You have to write at least 1 character');
        }
    });
    function showValidationMessage(message) {
        const existingValidation = document.getElementsByClassName('validation-message');
        if (existingValidation.length === 0) {
            const paragraph = document.createElement('p');
            // paragraph.innerText = 'You have to write at least 1 character';
            const paragraphText = document.createTextNode(message);
            paragraph.appendChild(paragraphText);
            paragraph.classList.add('validation-message');
            const body = document.getElementsByTagName('body')[0];
            body.insertBefore(paragraph, button);
            setTimeout(() => paragraph.remove(), 3000);
        }
    }
    const nameInput = document.getElementsByClassName('name-input')[0];
    nameInput.addEventListener('focus', event => {
        const focusTarget = event.target;
        focusTarget.style.width = '300px';
    });
    nameInput.addEventListener('blur', event => {
        const blurTarget = event.target;
        blurTarget.style.width = 'initial';
    });
    const buttonColors = ['cyan', 'red', 'blue', 'purple', 'magenta', 'grey'];
    let currentColorIndex = 0;
    const changeColorInterval = setInterval(() => {
        button.style.backgroundColor = buttonColors[currentColorIndex];
        currentColorIndex++;
        if (currentColorIndex === buttonColors.length) {
            clearInterval(changeColorInterval);
        }
    }, 1000);
};
//# sourceMappingURL=script.js.map