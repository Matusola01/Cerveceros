import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	dni: {
		type: String,
		required: true,
	},

	relationship: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
});

export default mongoose.model.User || mongoose.model('User', UserSchema);
