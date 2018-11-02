export class Request {
    id : String;
    firstName: String;
    lastName: String;
    age : Number;
    gender: String;
    functionId : String;
    formData : FormData;
    constructor(user){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.gender = user.gender;
        this.functionId = user.functionId;
        this.formData = user.formData;
    }
}
