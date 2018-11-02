import { emailValidator } from "./email-validator";

export function getCustomValidator(type :string) {
    if(type === "emailValidation") return emailValidator;
}