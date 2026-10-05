//Exercitiu 1

let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log(fructe);
console.log(fructe[0], fructe[fructe.length - 1]);
console.log(fructe.length);

//Exercitiu 2

let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");

console.log(orase);

orase.pop();
orase.shift();

console.log(orase);

//Exercitiu 3

let produse = ["Pâine", "Lapte", "Ouă"];

function adaugaInceput() {
    let adauga = document.getElementById("product");

    produse.unshift(adauga.value);
    console.log(produse);
}

function adaugaSfarsit() {
    let adauga = document.getElementById("product");

    produse.push(adauga.value);
    console.log(produse);
}

//Exercitiu 4

function stergeInceput() {
    let del = document.getElementById("product");

    produse.shift(del.value);
    console.log(produse);
}

function stergeSfarsit() {
    let del = document.getElementById("product");

    produse.pop(del.value);
    console.log(produse);
}

//Exercitiu 5

let elevi = [
    { nume: "Popescu Ana", varsta: 17, nota: 9 },
    { nume: "Rusu Mihai", varsta: 18, nota: 8 },
    { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
    let afisare = document.getElementById("pupil");

    afisare.textContent = "";

    for (let i = 0; i < elevi.length; i++) {
        afisare.textContent +=
            (i + 1) + ". " + elevi[i].nume + "\n" +
            "Varsta: " + elevi[i].varsta + "\n" +
            "Nota: " + elevi[i].nota + "\n\n";
    }

    document.getElementById("numarElevi").textContent =
        "Numar de elevi: " + elevi.length;
}

afiseazaElevi();

function adaugaElev() {
    let nume = document.getElementById("name").value;
    let varsta = document.getElementById("age").value;
    let nota = document.getElementById("mark").value;

    let elevNou = {
        nume: nume,
        varsta: varsta,
        nota: nota
    };

    elevi.push(elevNou);

    console.log(elevi);

    afiseazaElevi();
}

function stergeElev() {
    let nume = document.getElementById("deleteName").value;

    for (let i = 0; i < elevi.length; i++) {
        if (elevi[i].nume == nume) {
            elevi.splice(i, 1);
            break;
        }
    }

    afiseazaElevi();
}

function cautaElev() {
    let nume = document.getElementById("searchName").value;

    let elevGasit = elevi.find(function(elev) {
        return elev.nume == nume;
    });

    let rezultat = document.getElementById("rezultat");

    if (elevGasit) {
        rezultat.textContent =
            "Elev gasit!\n" +
            "Nume: " + elevGasit.nume + "\n" +
            "Varsta: " + elevGasit.varsta + "\n" +
            "Nota: " + elevGasit.nota;
    } else {
        rezultat.textContent = "Elevul nu a fost gasit!";
    }
}