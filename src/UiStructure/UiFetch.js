export const Fetch = text => {
  const Uitext = ` <li class="listBlock"><td>${text}</td></li>`;

  document.querySelector(".list").insertAdjacentHTML("beforeend", Uitext);
};
