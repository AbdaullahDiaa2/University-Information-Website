let butx = document.querySelector(".butx")
let butfree = document.querySelector(".butfree")
let pobb = document.querySelector(".pobb")
let textcard = document.querySelectorAll(".textcard")
console.log(textcard)

butx.onclick = _ => {
    pobb.style.display = "none";
}
textcard.onclick = _ => {
    pobb.style.display = "grid";
}
textcard.forEach(e => {
    e.addEventListener("click", _ => { pobb.style.display = "grid"; })
})

window.onscroll = e => {
    console.log(scrollY);
    if (scrollY > 564) {
        butfree.style.display = "flex";
    } else {
        butfree.style.display = "none";

    }
}