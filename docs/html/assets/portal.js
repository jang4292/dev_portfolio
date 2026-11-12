"use strict";

document.querySelectorAll("[data-filter-list]").forEach((group) => {
  const controls = group.querySelector("[data-filter-controls]");
  const input = group.querySelector("[data-filter-input]");
  const clear = group.querySelector("[data-filter-clear]");
  const count = group.querySelector("[data-filter-count]");
  const empty = group.querySelector("[data-filter-empty]");
  const items = [...group.querySelectorAll("[data-search]")];

  function filter() {
    const terms = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    items.forEach((item) => {
      const text = item.dataset.search.toLocaleLowerCase();
      item.hidden = !terms.every((term) => text.includes(term));
      if (!item.hidden) visible += 1;
    });
    count.textContent = `${visible} / ${items.length}개 표시`;
    empty.hidden = visible !== 0;
  }

  input.addEventListener("input", filter);
  clear.addEventListener("click", () => {
    input.value = "";
    filter();
    input.focus();
  });
  controls.hidden = false;
  filter();
});
