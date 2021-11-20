const Orders = require('../models/Orders');
const Categories = require('../models/Categories');
const HttpError = require('../models/http-error');

exports.create = async (req, res, next) => {
	const {
		category_id,
		contact,
		agency,
		company,
		description,
		deadline
	} = req.body;
	if (
		!category_id ||
		!contact ||
		!agency ||
		!company ||
		!description ||
		!deadline) {
		const error = new HttpError(
			'Inválido cadastrar ordem com algum dos campos vazios',
			422,
		);
		return next(error);
	}
	try {
		const createOrder = await Orders.create({
			category_id,
			contact,
			agency,
			company,
			description,
			deadline
		});
		const returnData = {
			id: createOrder.id,
			category_id,
			contact,
			agency,
			company,
			description,
			deadline
		}
		return res.status(201).send(returnData);
	} catch (err) {
		console.log(err);
		const error = new HttpError('Erro ao inserir no banco', 500);
		return next(error);
	}
};

exports.listAll = async (req, res, next) => {
	try {
		const orders = await Orders.findAll({
			include: [
				{
					model: Categories,
					as: 'category',
					attributes: ["name", "id"]
				},
			]
		});
		return res.status(200).send(orders);
	} catch (err) {
		console.log(err)
		const error = new HttpError('Erro ao consultar ordens', 400);
		return next(error);
	}
};

exports.listOne = async (req, res, next) => {
	const { id } = req.params
	try {
		const order = await Orders.findOne({
			where: { id },
			include: [
				{
					model: Categories,
					as: 'category',
					attributes: ["name", "id"]
				},
			]
		});
		return res.status(200).send(order);
	} catch (err) {
		const error = new HttpError('Erro ao consultar ordem', 400);
		return next(error);
	}
};

exports.update = async (req, res, next) => {
	const { id } = req.params
	const {
		category_id,
		contact,
		agency,
		company,
		description,
		deadline
	} = req.body
	try {
		await Orders.update({
			category_id,
			contact,
			agency,
			company,
			description,
			deadline
		}, { where: { id } });
		const order = await Orders.findOne({ where: { id } });
		return res.status(200).send(order);
	} catch (err) {
		const error = new HttpError('Erro ao atualizar ordem', 400);
		return next(error);
	}
};

exports.delete = async (req, res, next) => {
	const { id } = req.params
	try {
		await Orders.destroy({ where: { id } });
		return res.sendStatus(204);
	} catch (err) {
		const error = new HttpError('Erro ao deletar ordem', 400);
		return next(error);
	}
};