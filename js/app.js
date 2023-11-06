const body = document.getElementsByTagName("body ") [0]
const header = document.getElementsByName("header") [0]
const nav= document.getElementsByName("nav ul") [0]
const ul = document.getElementsByName(" ul") [0]
const main = document.getElementsByName("main") [0]
const section = document.getElementsByName("section") [0]
const footer = document.getElementsByName("footer") [0]

body.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el body")})

header.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el header")})

nav.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el nav")})

ul.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el ul")})
ul.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el ul")})
main.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el main")})
footer.addEventListener("click", () =>{crossOriginIsolated.log("se hizo clic en el footer")})
