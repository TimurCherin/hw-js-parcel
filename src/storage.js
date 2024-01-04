import { currentName } from "./app";
import { currentEmail } from "./app";
import { currentMessage } from "./app";
const storage = {
    name: currentName,
    email: currentEmail,
    message: currentMessage
}
console.log(storage)
alert("Ваша інформація успішно надіслана")