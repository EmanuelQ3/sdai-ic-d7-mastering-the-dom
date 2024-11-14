// Write your JavaScipt code below this line.

const mainTitle = document.getElementById("main-title")
mainTitle.textContent = "Welcome to our sneeze-inducing furrball adoption center"

const description = document.getElementById("description")
description.textContent = "Find your purrrfect dust pillow!"

const cat1Button = document.getElementById("cat-1-button")
cat1Button.addEventListener("click", () => {
    const whiskersCard = document.getElementById("cat-1")
    whiskersCard.remove()
    alert("Congrats on your new best friend Whiskers!")
})

const cat2Button = document.getElementById("cat-2-button")
cat2Button.addEventListener("click", () => {
    const daisyCard = document.getElementById("cat-2")
    daisyCard.remove()
    alert("Congrats on your new best friend Daisy!")
})

const cat3Button = document.getElementById("cat-3-button")
cat3Button.addEventListener("click", () => {
    const terryCard = document.getElementById("cat-3")
    terryCard.remove()
    alert("Congrats on your new best friend Terry!")
})

