import { tweet, url, shareButton } from "./config";

// const Event = () => {

// };

// Event();
shareButton.addEventListener("click", () => {
  window.open(`${url}?text=${tweet}; width=500 height=300`);
});
