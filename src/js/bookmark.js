const setBookmarkBtn = document.querySelector("#setting-bookmark");
const bookmarkListContainer = document.querySelector(
  "#bookmark-list-container"
);

function openSetBookmark(event) {
  bookmarkListContainer.classList.toggle("hidden");
}

setBookmarkBtn.addEventListener("click", openSetBookmark);
