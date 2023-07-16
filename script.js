"use strict";

function saveInput(event) {
    let input = document.getElementById("input").value;
    helper(input);
}

function saveTab(event) {
    let input = location.href;
    helper(input);
}

let counter = 0;
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
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    let key = "saved";
    let arr = JSON.parse(sessionStorage.getItem(key));
    for(let str of arr) {
        let para = document.createElement('p');
        let node = document.createTextNode(str);
        para.appendChild(node);
        parent.appendChild(para);
    }
}

document.addEventListener('DOMContentLoaded', () => {renderer();});