const openBookmarkBtn = document.querySelector("#setting-bookmark");
const bookmarkListContainer = document.querySelector(
  "#bookmark-list-container"
);

const bookmarkForm = bookmarkListContainer.querySelector("#add-bookmark-form")
const bookmarkList = bookmarkListContainer.querySelector("#bookmark-list")

const bookmarkName = bookmarkForm.querySelector("#bookmark-name");
const bookmarkURL = bookmarkForm.querySelector("#bookmark-link");

let bookmarks = []

function deleteBookmark(event) {
  const li = event.target.parentElement;
  li.remove();

}

function addBookmark(newBookmarkObj) {
  const li = document.createElement("li");
  li.id = newBookmarkObj.id
  const alink = document.createElement("a")
  alink.classList.add("bookmark-alink")
  alink.target = "_blank"
  alink.text = newBookmarkObj.name;
  alink.href= newBookmarkObj.url;
  
  const cancleBtn = document.createElement("button");
  cancleBtn.innerText = "❌"
  cancleBtn.addEventListener("click", deleteBookmark);

  li.appendChild(alink)
  li.appendChild(cancleBtn);

  bookmarkList.appendChild(li)
}

function handleBookmarkSubmit(event) {
  event.preventDefault();
  const newBkName = bookmarkName.value;
  const newBkURL = bookmarkURL.value;

  // 이전에 입력한 URL 을 중복하지 않습니다.


  bookmarkName.value = ""
  bookmarkURL.value = ""
  
  console.log(newBkName, newBkURL)
  const newBookmarkObj = {
    id: Date.now(),
    name: newBkName,
    url: newBkURL
  };

  bookmarks.push(newBookmarkObj);
  addBookmark(newBookmarkObj);
}


function openSetBookmark(event) {
  bookmarkListContainer.classList.toggle("hidden");
}

openBookmarkBtn.addEventListener("click", openSetBookmark);
bookmarkForm.addEventListener("submit", handleBookmarkSubmit);