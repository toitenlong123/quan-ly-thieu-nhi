// js/student.js

const db = firebase.firestore();
const studentTableBody = document.getElementById("studentTableBody");

function renderStudents() {
  db.collection("students").onSnapshot(snapshot => {
    studentTableBody.innerHTML = "";
    snapshot.forEach(doc => {
      const student = doc.data();
      const row = `
        <tr>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.class}</td>
          <td>
            <button onclick="editStudent('${doc.id}', '${student.name}', '${student.age}', '${student.class}')" class="btn btn-sm btn-warning">Sửa</button>
            <button onclick="deleteStudent('${doc.id}')" class="btn btn-sm btn-danger">Xoá</button>
          </td>
        </tr>
      `;
      studentTableBody.innerHTML += row;
    });
  });
}

function addStudent() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const className = document.getElementById("class").value;

  db.collection("students").add({ name, age, class: className }).then(() => {
    document.getElementById("studentForm").reset();
  });
}

function editStudent(id, name, age, className) {
  document.getElementById("name").value = name;
  document.getElementById("age").value = age;
  document.getElementById("class").value = className;

  document.getElementById("submitBtn").innerText = "Cập nhật";
  document.getElementById("submitBtn").onclick = function () {
    db.collection("students").doc(id).update({
      name: document.getElementById("name").value,
      age: parseInt(document.getElementById("age").value),
      class: document.getElementById("class").value
    }).then(() => {
      document.getElementById("studentForm").reset();
      document.getElementById("submitBtn").innerText = "Thêm";
      document.getElementById("submitBtn").onclick = addStudent;
    });
  };
}

function deleteStudent(id) {
  db.collection("students").doc(id).delete();
}

renderStudents();
