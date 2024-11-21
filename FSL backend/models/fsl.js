import mongoose from "mongoose";

const FslSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    dob: { type: Date, required: false },
    gender: { type: String, required: false },
    aadharFront: { type: String, required: false },
    aadharBack: { type: String, required: false },
    laddress: { type: String},
    paddress: { type: String, required: false },
    fname: { type: String, required: false },
    fphone: { type: Number, required: false },
    areYoua: { type: String, required: false },
    areYoua: { type: String, required: false },
    qualification: { type: String },
    qualificationYear: { type: Number },
    college: { type: String },
    designation: { type: String },
    company: { type: String },
    Course: { type: String, required: false },
    knowus: { type: String, required: false },
    friendname: { type: String },
    Terms_condition: { type: Boolean, required: false },
    password: { type: String}
},
    { timestamps: true, versionKey: false });
const FslModel = mongoose.model("fsl", FslSchema);
export default FslModel;