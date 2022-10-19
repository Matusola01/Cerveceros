import Head from 'next/head';
import connectDB from '../lib/mongodb';
import User from '../Models/User';
import Navbar from './components/navbar';
import Credential from './components/credential';

export default function Home({ users }) {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="bg-cover bg-no-repeat w-screen h-screen position:absolute">
				<Credential user={users} />
			</div>
		</>
	);
}

export async function getServerSideProps() {
	try {
		await connectDB();

		const res = await User.find({});
		const users = res.map(e => {
			const user = e.toObject();
			user._id = user._id.toString();
			return user;
		});
		return { props: { users: users } };
	} catch (error) {
		console.log(error);
	}
}
