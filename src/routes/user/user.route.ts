import * as express from 'express';

import { isValidEmail } from '../../utils/email.util';

import { createUserController } from '../../controllers/user/user.controller';

const router = express.Router();

router.post('', async (req, res) => {
	try {
		const { email, name, password } = req.body;

		if (!email) throw new Error('email is required');
		if (!name) throw new Error('name is required');
		if (!password) throw new Error('password is required');
		if (password.length < 5) throw new Error('password need have at least 6 characters');
		if (!isValidEmail({ email })) throw new Error('email is not valid');

		const createdUserOutput = await createUserController({
			user: {
				email,
				name,
				password,
			},
		});

		return res.status(200).json({
			message: 'ok',
			user: createdUserOutput,
		});
	} catch (err) {
		const error = err as Error;
		console.error(err);

		const inputValidations = [
			'email is not valid',
			'email is required',
			'name is required',
			'password is required',
			'password need have at least 6 characters',
			'user already created',
		];

		if (inputValidations.includes(error.message)) {
			return res.status(400).json({
				message: error.message,
			});	
		}

		return res.status(500).json({
			message: 'Try again later',
		});
	}
});

export default router;