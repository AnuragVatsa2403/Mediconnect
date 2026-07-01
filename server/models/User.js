const mongoose= require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 10 },
    DateofBirth: { type: Date },
    Address: {type: String},
    Contact: {type: Number, minlength: 10000000}, 
    GovernmentId: {type: Number},
    role: {
      type: String,
      enum: ['patient', 'doctor', 'admin'],
    },
    preferredLanguage: { type: String, enum: ['en', 'hi'], default: 'en' },
    specialization: { type: String },
    location: { type: String },
    isVerified: { type: Boolean, default: false },
    availableSlots: [{ type: String }],
    UniqueRegistrationNumber: { type: Number, unique: true, sparse: true }

})
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};


module.exports = mongoose.model('User', userSchema);