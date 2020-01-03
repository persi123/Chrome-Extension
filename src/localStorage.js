import { elements } from "./config";
import uuidv4 from "@bundled-es-modules/uuid/v4.js";
import Structure from "./structure";
import { Fetch } from "./UiStructure/UiFetch";
import { UiTagAdd } from "./util";


export const pushing = input => {
  var item,
    id = uuidv4();
  console.log(uuidv4());
  var eventList = [];

  var events = JSON.parse(localStorage.getItem("events"));
  console.log(events);

  if (events == null) {
    events = eventList;
  }
  console.log(events);
  item = new Structure(id, input);
  events.push(item);
  localStorage.setItem("events", JSON.stringify(events));
  Fetch(input);
};

export const GetData = () => {
  var elements = JSON.parse(localStorage.getItem("events"));
  //let items = elements.length;
  if (elements == null) {
    return;
  }
  elements.forEach(data => {
    Fetch(data.text);
  });
  // for (let i = 0; i < items; i++) {

  // }
};

export const TagAdd = text => {
  let tagdata = [];
  let tags = JSON.parse(localStorage.getItem("hashtags"));
  console.log(text);
  if (tags == null) {
    tags = tagdata;
    localStorage.setItem("hashtags", tagdata);
  }
  tags.push(text);
  localStorage.setItem("hashtags", JSON.stringify(tags));
  UiTagAdd(text);
};

