import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: {message: 'Name is required'},
        maxLenfth: [30, 'Name can not be more than 50 characters']
    },
    surname:{
        type: String,
        required: [true, "Surname is required"],
        maxLength: [25, "Surname cannot exceed 25 characters"]
    },
    username:{
        type: String,
        required: true,
        unique:true,
        minLenght: [8, "Username must be at least 8 characters long"],
        maxLength: [1, "Username cannot exceed 15 characters"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    role:{
        type: String,
        required: true,
        enum: ["TEACHER_ROLE", "STUDENT_ROLE"]
    },
    status:{
        type: Boolean,
        default: true
    }

},
{
    versionKey: false,
    timeStamps: true
})
userSchema.methods.toJSON = function(){
    const {password, _id, ...usuario} = this.toObject()
    usuario.uid = _id
    return usuario
}

export default model("User", userSchema)