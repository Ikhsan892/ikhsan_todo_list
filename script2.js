function addList(event) {
  event.preventDefault();

  var todo = event.target[0].value;

  if (todo == "") {
    alert("Kosong gan...!!!");
  }

  // <li class="list-group-item" aria-current="true">
  //   <div class="d-flex w-100 justify-content-between">
  //     <h5 class="mb-1">List group item heading</h5>
  //     <div>
  //       <button class="btn" onclick="checkList(event)">
  //         <i class="fa-solid fa-check"></i>
  //       </button>
  //       <button class="btn" onclick="removeList(event)">
  //         <i class="fa-solid fa-trash"></i>
  //       </button>
  //     </div>
  //   </div>
  // </li>;

  /**
   * Icon Check
   */
  var iconCheck = document.createElement("i");
  iconCheck.setAttribute("class", "fa-solid fa-check");

  /**
   * Icon Trash
   */
  var iconTrash = document.createElement("i");
  iconTrash.setAttribute("class", "fa-solid fa-trash");

  /**
   * Button Check list
   */
  var btnCheck = document.createElement("button");
  btnCheck.append(iconCheck);
  btnCheck.classList.add("btn");
  btnCheck.setAttribute("onclick", "checkList(event)");

  /**
   * Button Remove List
   */
  var btnRemove = document.createElement("button");
  btnRemove.append(iconTrash);
  btnRemove.classList.add("btn");
  btnRemove.setAttribute("onclick", "removeList(event)");

  /**
   * Element Div
   */
  var divWrapper = document.createElement("div");
  divWrapper.append(btnCheck, btnRemove);

  /**
   * Text H5
   */
  var h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = todo;

  var divList = document.createElement("div");
  divList.classList.add("d-flex", "w-100", "justify-content-between");
  divList.append(h5, divWrapper);

  var listElement = document.createElement("li");
  listElement.classList.add("list-group-item");
  listElement.append(divList);

  var ul = document.getElementById("lists");
  ul.append(listElement);
}

function checkList(event) {
  var list = event.target.closest("li");

  var h5 = list.querySelectorAll("h5");
  h5[0].classList.toggle("checked");
}

function removeList(event) {
  var list = event.target.closest("li"); // Pilih element <li ... ></li>

  list.remove(); // method remove() untuk menghapus element
}
