let siteName = document.getElementById("bookmarkName");
let siteUrl = document.getElementById("bookmarkURL");
let submitBtn = document.getElementById("submitBtn");
let content = document.getElementById("tableContent");
let error = document.querySelector(".alert-parent");
let closeBtn = document.querySelector(".alert-header button");

let bookmarkList = [];

if (localStorage.getItem("bookmarks") !== null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
  display();
}

function addBookmark() {
  if (validateSiteUrl() && validateSiteName()) {
    let normalizedUrl = siteUrl.value.startsWith("http")
      ? siteUrl.value
      : `https://${siteUrl.value}`;
    for (let i = 0; i < bookmarkList.length; i++) {
      if (
        bookmarkList[i].name.trim() === siteName.value.trim() ||
        bookmarkList[i].link.trim() === normalizedUrl.trim()
      ) {
        error.classList.remove("d-none");
        return;
      }
    }

    let obj = {
      name: siteName.value,
      link: normalizedUrl,
    };
    bookmarkList.push(obj);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    display();
    clearForm();
  }
}

function clearForm() {
  siteName.value = null;
  siteUrl.value = null;
  siteName.classList.remove("is-valid");
  siteUrl.classList.remove("is-valid");
}

function display() {
  content.innerHTML = "";

  for (let i = 0; i < bookmarkList.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerText = i + 1;
    td2.innerText = bookmarkList[i].name;

    let visit = document.createElement("a");
    visit.classList.add("btn", "btn-visit");
    visit.setAttribute("href", bookmarkList[i].link);
    visit.setAttribute("target", "_blank");

    let anchorIcon = document.createElement("i");
    anchorIcon.classList.add("fa-solid", "fa-eye", "pe-2");

    visit.appendChild(anchorIcon);
    visit.innerText = "Visit";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-delete", "pe-2");

    let btnIcon = document.createElement("i");
    btnIcon.classList.add("fa-solid", "fa-trash-can");

    deleteButton.appendChild(btnIcon);
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function () {
      bookmarkList.splice(i, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
      display();
    });

    td3.appendChild(visit);
    td4.appendChild(deleteButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    content.appendChild(tr);
  }
}

function validateSiteUrl() {
  let regex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[-a-zA-Z0-9%_.~+]*)*(\?[;&a-zA-Z0-9%_.~+=-]*)?(\#[-a-zA-Z0-9_]*)?$/;

  if (regex.test(siteUrl.value)) {
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
    return true;
  } else {
    siteUrl.classList.add("is-invalid");
    siteUrl.classList.remove("is-valid");
    error.classList.remove("d-none");
    return false;
  }
}
function validateSiteName() {
  let regex = /^[a-zA-Z0-9 ]{3,30}$/;

  if (regex.test(siteName.value)) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    error.classList.remove("d-none");
    return false;
  }
}

function CheckInputs() {
  if (!siteUrl.value || !siteName.value) {
    error.classList.remove("d-none");
  }
}

siteUrl.addEventListener("input", function () {
  validateSiteUrl();
});
siteName.addEventListener("input", function () {
  validateSiteName();
});
submitBtn.addEventListener("click", function () {
  CheckInputs();
  addBookmark();
});

closeBtn.addEventListener("click", function () {
  error.classList.add("d-none");
});

error.addEventListener("click", function (event) {
  if (event.target === error) {
    error.classList.add("d-none");
  }
});
