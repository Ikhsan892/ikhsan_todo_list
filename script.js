function checklist(e) {
  var list = e.target.closest("li");

  var h5 = list.querySelectorAll("h5");
  h5[0].classList.toggle("checked");
}

function removeList(e) {
  var list = e.target.closest("li");

  list.remove();
}

function addList(e) {
  e.preventDefault();

  var list = document.getElementById("lists");

  if (e.target[0].value == "") {
    alert("kosong euy");
  }

  var h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = e.target[0].value;

  e.target[0].value = "";

  var btnCheck = document.createElement("button");
  btnCheck.classList.add("btn");

  var iconCheck = document.createElement("i");
  iconCheck.classList.add("fa-solid", "fa-check");
  btnCheck.append(iconCheck);
  btnCheck.setAttribute("onclick", "checklist(event)");

  var btnRemove = document.createElement("button");
  btnRemove.classList.add("btn");

  var iconRemove = document.createElement("i");
  iconRemove.classList.add("fa-solid", "fa-trash");
  btnRemove.append(iconRemove);
  btnRemove.setAttribute("onclick", "removeList(event)");

  var divButton = document.createElement("div");
  divButton.classList.add("d-flex");
  divButton.appendChild(btnCheck);
  divButton.appendChild(btnRemove);

  var div = document.createElement("div");
  div.classList.add("d-flex", "w-100", "justify-content-between");
  div.appendChild(h5);
  div.appendChild(divButton);

  var item = document.createElement("li");
  item.classList.add("list-group-item");
  item.appendChild(div);

  list.appendChild(item);
}
