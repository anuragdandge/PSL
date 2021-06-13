var db = firebase.firestore();
function DisplayData() {
  let count = 1;
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((docs) => {
        const data = docs.data();
        addItems(count, data.name, data.number, data.email, data.date);
        count++;
      });
    });
}

function addItems(count, name, number, email, date) {
  var tbody = document.getElementById("tableBody");

  var trow = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  // var td5 = document.createElement("td");

  td1.innerHTML = count;
  td2.innerHTML = name;
  td3.innerHTML = number;
  td4.innerHTML = date;
  // td5.innerHTML = date;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  // trow.appendChild(td5);

  tbody.appendChild(trow);
}
