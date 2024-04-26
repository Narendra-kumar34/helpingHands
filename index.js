let data = JSON.parse(localStorage.getItem("data")) || [];

function handleSubmit(event) {
  event.preventDefault();
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let category = document.getElementById("category");
  let quantity = document.getElementById("quantity");
  let address = document.getElementById("address");
  let occassion = document.getElementById("occassion");
  let currData = {
    name: name.value,
    phone: phone.value,
    category: category.value,
    quantity: quantity.value,
    address: address.value,
    occassion: occassion.value,
    date: new Date(),
  };
  data.push(currData);
  localStorage.setItem("data", JSON.stringify(data));
  name.value = "";
  phone.value = "";
  category.value = "";
  quantity.value = "";
  address.value = "";
  occassion.value = "";
  document.getElementById("submitMessage").textContent =
    "Thank you! Form Submitted Successfully! Our executive will reach you shortly.";
  addRow();
}

function addRow() {
  let tableBody = document.getElementById("tableBody");
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.textContent = data[i].name;
    row.append(name);
    let phone = document.createElement("td");
    phone.textContent = data[i].phone;
    row.append(phone);
    let category = document.createElement("td");
    category.textContent = data[i].category;
    row.append(category);
    let quantity = document.createElement("td");
    quantity.textContent = data[i].quantity;
    row.append(quantity);
    let address = document.createElement("td");
    address.textContent = data[i].address;
    row.append(address);
    let occassion = document.createElement("td");
    occassion.textContent = data[i].occassion;
    row.append(occassion);
    let dateCell = document.createElement("td");
    const date = new Date(data[i].date);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    dateCell.textContent = `${day}-${month}-${year}`;
    row.append(dateCell);
    tableBody.append(row);
  }
}

addRow();
