import { sendMessage } from "./sendMessage"; 
import { saveDb } from "./saveDb";
const btn = document.querySelector(".form-btn")
const form = document.querySelector(".form")
form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault()
    const data = e.currentTarget.elements;
    sendMessage(data)
    form.reset()
    saveDb()
}