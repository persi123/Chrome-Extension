import { elements } from "./config";
import { NewTags } from "./index";

export const UiTagAdd = data => {
  console.log(data);
  const html = `<button class="day">#${data.trim()}</button>`;
  document.querySelector(".HashTags").insertAdjacentHTML("beforeend", html);
  let tags = document.querySelectorAll(".day");
  let hashTag = Array.from(tags);
  console.log(hashTag);

  elements.inputTag.value = " ";
};

export const Gethashtag = () => {
  var substan = JSON.parse(localStorage.getItem("hashtags"));

  //let items = substan.length;
  if (substan == null) {
    return;
  }

  substan.forEach(data => {
    UiTagAdd(data);
    NewTags();
  });
};
