const show = () => {
    const show = document.querySelector("#signup")
    show.classList.toggle("show")
    document.querySelector(".layer").style.display = "block"
}
const hide = () => {
    const hide = document.querySelector("#signup")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display = "none"
}