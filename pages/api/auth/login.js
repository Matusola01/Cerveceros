import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import User from '../../../Models/User';
import connectDB from '../../../lib/mongodb';

connectDB();

export default async function loginHandler(req, res) {
	const { dni } = req.body;
	const response = await User.find({ dni });
	const users = response.map(e => {
		const user = e.toObject();
		user._id = user._id.toString();
		return user;
	});
	// console.log(users);
	const userDni = users.map(e => e.dni);
	const userAuth = userDni.shift();
	if (userAuth === dni) {
		const token = sign(users.shift(), 'secret');

		const serialized = serialize('myTokenName', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 1000 * 60 * 60 * 24 * 30,
			path: '/',
		});

		res.setHeader('Set-Cookie', serialized);
		return res.status(200).json({
			message: 'Login successful',
		});
	}
	res.status(401).send('invalid credentials');
}
