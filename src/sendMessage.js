import { storage } from "./storage";
export function sendMessage(data) {
    const name = data.name.value;
    const email = data.email.value;
    const message = data.message.value; 
    Object.assign(storage, { name, email, message })
    alert("Ваша інформація успішно надіслана")
}
