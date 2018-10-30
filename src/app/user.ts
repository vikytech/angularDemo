// export class User {
//     constructor(
//         public firstName: String,
//         public lastName: String,
//         public age : Number,
//         public id : String,
//         public gender: String,
//         public functionType : String,
//         public formData : FormData
//     ){}
// }

export class User {
    id : String;
    firstName: String;
    lastName: String;
    age : Number;
    gender: String;
    functionType : String;
    formData : FormData;
    constructor(user){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.gender = user.gender;
        this.functionType = user.functionType;
        this.formData = user.formData;
    }
}
