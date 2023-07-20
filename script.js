"use strict";

// global variables
let outputIdName = 'output';
let key = 'saved';

function firstLoad() {
    // create the outer block and name it - output
    let parent = document.createElement('ul');
    document.body.append(parent);
    parent.setAttribute('id', outputIdName);

    // if none, insert empty array
    // else, render them
    let arr = JSON.parse(localStorage.getItem(key));
    if(arr == null)
        localStorage.setItem(key, JSON.stringify([]));
    else {
        for(let str of arr) {
            renderNewEle(parent, str);
        }
    }
}

function renderNewEle(parent, str) {
    parent.insertAdjacentHTML('beforeend', 
    `<li>
        <a href='${str}'>
            ${str}
        </a>
    </li>`);
}

document.getElementById("saveInput").addEventListener('click', function() {
    let ele = document.getElementById("input");

    // Getting input and clearing textbox
    let input = ele.value;
    ele.value = "";

    // Storing input
    let arr = JSON.parse(localStorage.getItem(key));
    arr.push(input);
    localStorage.setItem(key, JSON.stringify(arr)); //is there no faster way to do this than setting it in full again? performance improvement

    // Rendering the new ele
    let parent = document.getElementById(outputIdName);
    renderNewEle(parent, input);
});

document.getElementById("deleteAll").addEventListener('click', function() {
    // make the array empty
    localStorage.setItem(key, JSON.stringify([]));

    // remove all children
    let parent = document.getElementById(outputIdName);
    parent.innerHTML = "";
})

document.addEventListener('DOMContentLoaded', firstLoad);
