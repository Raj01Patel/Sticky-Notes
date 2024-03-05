let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let notes = document.getElementById("notes_container");
let hide = document.getElementById("hided");
let color = document.getElementById("color");

function addNotes() {

    if (text.value == "") {
        alert("Enter some text");
        return;
    }

    hide.innerText = "";

    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.classList.add("add")

    cross_btn.innerText = 'X';
    cross_btn.classList.add("del");
    div.appendChild(cross_btn);

    p.innerText = text.value;
    p.classList.add("noteStyle");
    div.appendChild(p);

    div.style.backgroundColor = color.value;

    notes.appendChild(div);

    text.value = "";

    cross_btn.addEventListener("click", (e) => {
        div.style.display = "none";
    })
}

function colorChange() {
    text.style.backgroundColor = color.value;
}
btn.addEventListener('click', addNotes);
color.addEventListener("change", colorChange);
