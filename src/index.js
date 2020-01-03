"use strict";

import { elements } from "./config";
import { pushing, GetData, TagAdd } from "./localStorage";
import { Gethashtag } from "./util";

let tags;
let hashTag;

elements.nextPage.addEventListener("click", function() {
  const element = document.querySelector(".taskList");
  const content = document.querySelector(".mainField");
  content.style.display = "none";

  element.style.display = "inline-block";
  // content.classList.add("animated", "slideOutRight");
  element.classList.add("animated", "slideInRight duration-3s");
});

elements.home.addEventListener("click", function() {
  const element = document.querySelector(".taskList");
  const content = document.querySelector(".mainField");
  element.style.display = "none";
  content.style.display = "inline-block";

  content.classList.add("animated", "slideInLeft");
});

export const NewTags = () => {
  tags = document.querySelectorAll(".day");
  hashTag = Array.from(tags);
};
NewTags();

let inputText = elements.tweetData;
// localStorage.clear();
GetData();
Gethashtag();
console.log(inputText);

const tagClicked = function(data) {
  let preValue = inputText.value;
  console.log(data);
  inputText.value = `${preValue} ${data}`;
};

export const TagsArray = () => {
  console.log(hashTag);
  hashTag.forEach(tag => {
    tag.addEventListener("click", function() {
      console.log(tag);
      tagClicked(tag.innerText);
    });
  });
};

TagsArray();
elements.shareButton.addEventListener("click", share);

function share() {
  console.log(inputText.value.replace("#", "%23"));
  if (inputText.value.length <= 144) {
    chrome.tabs.create({
      url: `${elements.url}?text=${inputText.value.replace(
        new RegExp("#", "g"),
        "%23"
      )}`
    });
    document.querySelector(".limit").style.display = "none";
    inputText.value = " ";
  } else {
    document.querySelector(".limit").style.display = "block";
  }
}

elements.Addtag.addEventListener("click", () => {
  if (elements.inputTag.value.trim().length > 0) {
    console.log(elements.inputTag.value.trim());
    TagAdd(elements.inputTag.value);
    NewTags();
    TagsArray();
    console.log(hashTag);
  }
});

elements.TaskAdd.addEventListener("click", () => {
  pushing(inputText.value);
});
