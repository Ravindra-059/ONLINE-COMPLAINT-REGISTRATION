const mongoose = require("mongoose");
const assigned ComplaintSchema = mongoose.Schema({
agentId: { type: mongoose.Schema. Types. ObjectId, required: true, ref: "User"},
complaintId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Complaint" },
status: { type: String, required: true },
agentName: { type: String, required: true },
});
module.exports = mongoose.model("Assigned Complaint", assigned ComplaintSchema);
const mongoose = require("mongoose");
const complaintSchema = mongoose. Schema ({
userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
name: { type: String, required: true },
address: { type: String, required: true },
city: { type: String, required: true },
state: { type: String, required: true },
pincode: { type: Number, required: true },
comment: { type: String, required: true },
status: { type: String, required: true },
});
module.exports = mongoose.model("Complaint", complaintSchema);
const mongoose = require("mongoose");
const userSchema = mongoose.Schema ({
name: { type: String, required: 'Name is required' },
email: { type: String, required: 'Email is required' },
password: { type: String, required: 'Password is required' },
phone: { type: Number, required: 'Phone is required' },
role: { type: String,
enum: ["Admin", "Agent", "Ordinary"],
default: "Ordinary",},
}, {
timestamps: true,
});
module.exports = mongoose.model("User", userSchema);
