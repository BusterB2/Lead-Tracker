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
    sessionStorage.setItem(String(counter++), input);
    renderer();
}

function deleteAll(event) {
    sessionStorage.clear();
    renderer();
}

function renderer() {
    let keys = Object.keys(sessionStorage);
    let parent = document.getElementById('output');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(let key of keys) {
        let input = sessionStorage.getItem(key);
        let para = document.createElement('p');
        let node = document.createTextNode(input);
        para.appendChild(node);
        parent.appendChild(para);
    }
}
