const toHTML = document.querySelector(".container")
let favThing = document.querySelector("#fav-thing")
let wishList = document.querySelector("#whereToBuy")
document.querySelector("#add").addEventListener("click", () => {
    if (favThing.value.length === 0 && wishList.value.length === 0) {
        alert("You didn't type anything in at all!")
    } else if (favThing.value.length === 0) {
        alert("You didnt type anything in Favorite thing!")
    } else if (wishList.value.length === 0){
        alert("You didnt type anything in Where to Buy!")
    } else {
    const convertToHTML = toDom(favThing.value, wishList.value)
    toHTML.innerHTML += convertToHTML
    favThing.value = ""
    wishList.value = ""
    favThing.focus()
    }
})

const toDom = (thing, list) => {
    return `
    <div class="sentence">I can purchase ${thing} at ${list}.</div>`
}
