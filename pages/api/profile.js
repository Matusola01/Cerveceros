import jwt from 'jsonwebtoken';

export default function profileHandler(req, res) {
	const { myTokenName } = req.cookies;
	console.log(req.cookies);

	if (!myTokenName) {
		return res.status(401).json({ error: 'Not logged in' });
	}

	const { payload } = jwt.verify(myTokenName, 'secret');
	return res.status(200).json({ payload });
}
