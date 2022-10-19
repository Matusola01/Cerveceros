import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
	const [credentials, setCredentials] = useState({
		dni: '',
	});
	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await axios.post('/api/auth/login', credentials);
		// console.log(res);
		// console.log(credentials);

		if (res.status === 200) {
			router.push('/');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="DNI"
					onChange={e =>
						setCredentials({
							...credentials,
							dni: e.target.value,
						})
					}
				/>
				<button>Entrar</button>
			</form>
		</div>
	);
}

export default Login;
