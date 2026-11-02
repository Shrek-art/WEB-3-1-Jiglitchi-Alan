function makeAvatar(name) {
  const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#3b6fd4"/><text x="50%" y="55%" font-size="30" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="Arial">' + initials + '</text></svg>';
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

let students = [
  { id: 1, name: "Ana Rusu", group: "TI-231", age: 19, specialty: "Informatică", avatar: makeAvatar("Ana Rusu") },
  { id: 2, name: "Mihai Ceban", group: "TI-232", age: 20, specialty: "Rețele", avatar: makeAvatar("Mihai Ceban") },
  { id: 3, name: "Elena Vasilache", group: "SI-221", age: 21, specialty: "Securitate", avatar: makeAvatar("Elena Vasilache") },
  { id: 4, name: "Dumitru Lungu", group: "TI-233", age: 22, specialty: "Programare", avatar: makeAvatar("Dumitru Lungu") }
];

let nextId = Math.max(...students.map(s => s.id)) + 1;

const container = document.getElementById("container");
const counter = document.getElementById("counter");
const form = document.getElementById("studentForm");
const errorBox = document.getElementById("error");

function renderStudents() {
  container.innerHTML = "";
  counter.textContent = "Număr de studenți: " + students.length;

  if (students.length === 0) {
    const msg = document.createElement("p");
    msg.className = "empty";
    msg.textContent = "Lista este goală. Nu există studenți de afișat.";
    container.appendChild(msg);
    return;
  }

  students.forEach(function (student) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = student.avatar;
    img.alt = student.name;

    const title = document.createElement("h3");
    title.textContent = student.name;

    const idP = document.createElement("p");
    idP.className = "id";
    idP.textContent = "ID: " + student.id;

    const groupP = document.createElement("p");
    groupP.textContent = "Grupa: " + student.group;

    const ageP = document.createElement("p");
    ageP.textContent = "Vârsta: " + student.age;

    const specP = document.createElement("p");
    specP.textContent = "Specialitatea: " + student.specialty;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Șterge";
    delBtn.addEventListener("click", function () { deleteStudent(student.id); });

    card.append(img, title, idP, groupP, ageP, specP, delBtn);
    container.appendChild(card);
  });
}

function deleteStudent(id) {
  students = students.filter(function (s) { return s.id !== id; });
  renderStudents();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const group = document.getElementById("group").value.trim();
  const ageRaw = document.getElementById("age").value.trim();
  const specialty = document.getElementById("specialty").value.trim();

  if (!name || !group || !ageRaw || !specialty) {
    errorBox.textContent = "Toate câmpurile trebuie completate.";
    return;
  }

  const age = Number(ageRaw);
  if (!Number.isInteger(age) || age < 14 || age > 100) {
    errorBox.textContent = "Vârsta trebuie să fie un număr întreg între 14 și 100.";
    return;
  }

  students.push({
    id: nextId++,
    name: name,
    group: group,
    age: age,
    specialty: specialty,
    avatar: makeAvatar(name)
  });

  errorBox.textContent = "";
  form.reset();
  renderStudents();
});

document.querySelectorAll(".btn-group").forEach(function (groupEl) {
  const prop = groupEl.dataset.prop;

  groupEl.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      container.style[prop] = btn.dataset.value;
      groupEl.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });

    if (btn.dataset.value === getComputedStyle(container)[prop]) {
      btn.classList.add("active");
    }
  });
});

renderStudents();