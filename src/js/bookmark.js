const openBookmarkBtn = document.querySelector("#setting-bookmark");
const bookmarkListContainer = document.querySelector(
  "#bookmark-list-container"
);

const bookmarkForm = bookmarkListContainer.querySelector("#add-bookmark-form")
const bookmarkList = bookmarkListContainer.querySelector("#bookmark-list")

const bookmarkName = bookmarkForm.querySelector("#bookmark-name");
const bookmarkURL = bookmarkForm.querySelector("#bookmark-link");
const BOOKMARK_KEY = "bookmarks"

let bookmarks = []

function deleteBookmark(event) {
  const li = event.target.parentElement;
  li.remove(); // x버튼 클릭하면 화면에 북마크 삭제

  // 삭제대상 북마크를 제외한 나머지를 저장.
  bookmarks = bookmarks.filter( (bookmark) => {
    return parseInt(li.id) !== bookmark.id;
  });

  // 로컬스토리지에 저장된 북마크 저장
  saveBookmark();
}

function saveBookmark() {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks))
}

function paintBookmark(newBookmarkObj) {
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
  if(checkDuplicateURL(newBkURL)){
    alert("이미 북마크에 등록된 URL 입니다!")
    return;
  }

  bookmarkName.value = ""
  bookmarkURL.value = ""
  
  console.log(newBkName, newBkURL)
  const newBookmarkObj = {
    id: Date.now(),
    name: newBkName,
    url: newBkURL
  };

  bookmarks.push(newBookmarkObj);
  saveBookmark(); // 로컬스토리지에 새로운 북마크 추가
  paintBookmark(newBookmarkObj); // 새로운북마크를 화면에 뿌림.
}

// 중복되는 북마크 확인
function checkDuplicateURL(newBkURL) {
  bookmarks.forEach( (bookmark) => {
    if(bookmark.url === newBkURL)
      return true;
  });
  return false;
}


function openSetBookmark(event) {
  bookmarkListContainer.classList.toggle("hidden");
}

openBookmarkBtn.addEventListener("click", openSetBookmark);
bookmarkForm.addEventListener("submit", handleBookmarkSubmit);

// 로컬스토리지로부터 북마크배열이 있는지 확인
const savedBookmarks = localStorage.getItem(BOOKMARK_KEY);
if (savedBookmarks !== null) {
  // 문자열 -> json 으로 변환후 bookmarks 배열을 다시 세팅.
  const parsedBookmarks = JSON.parse(savedBookmarks);
  bookmarks= parsedBookmarks; // bookmarks 전역변수에 북마크객체들을 저장.
  parsedBookmarks.forEach(paintBookmark); // 각각을 화면에 뿌린다

}