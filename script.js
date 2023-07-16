"use strict";

function saveInput(event) {
    let input = document.getElementById("input").value;
    helper(input);
}

function saveTab(event) {
    let input = location.href;
    helper(input);
}

function helper(input) {

    let value = sessionStorage.getItem("saved");
    if(value !== null) {
        value = JSON.parse(value);
        value.push(input);
        sessionStorage.setItem('saved', JSON.stringify(value));
    }
    else {
        sessionStorage.setItem('saved', JSON.stringify([input]));
    }

    renderer();
}

function deleteAll(event) {
    sessionStorage.clear();
    renderer();
}

function renderer() {
    let parent = document.getElementById('output');
    if(parent != null)
        parent.remove();

    parent = document.createElement('ul');
    document.body.appendChild(parent);
    parent.setAttribute('id', 'output');

    let key = "saved";
    let arr = JSON.parse(sessionStorage.getItem(key));
    for(let str of arr) {
        let para = document.createElement('li');
        para.textContent = str;
        parent.appendChild(para);
    }
}

document.addEventListener('DOMContentLoaded', () => {renderer();});
