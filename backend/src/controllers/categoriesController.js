const Categories = require('../models/Categories');
const HttpError = require('../models/http-error');

exports.create = async (req, res, next) => {
	const {
		name
	} = req.body;
	if (!name) {
		const error = new HttpError(
			'Inválido cadastrar Categoria sem nome',
			422,
		);
		return next(error);
	}
	try {
		let createCategory = await Categories.create({
			name
		});
		const returnData = {
			id: createCategory.id,
			name: createCategory.name,
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
		const categories = await Categories.findAll();
		return res.status(200).send(categories);
	} catch (err) {
		const error = new HttpError('Erro ao consultar categorias', 400);
		return next(error);
	}
};

exports.listOne = async (req, res, next) => {
	const { id } = req.params
	try {
		const category = await Categories.findOne({ where: { id } });
		return res.status(200).send(category);
	} catch (err) {
		const error = new HttpError('Erro ao consultar categoria', 400);
		return next(error);
	}
};

exports.update = async (req, res, next) => {
	const { id } = req.params
	const { name } = req.body
	try {
		await Categories.update({ name }, { where: { id } });
		const category = await Categories.findOne({ where: { id } });
		return res.status(200).send(category);
	} catch (err) {
		const error = new HttpError('Erro ao atualizar categoria', 400);
		return next(error);
	}
};

exports.delete = async (req, res, next) => {
	const { id } = req.params
	try {
		await Categories.destroy({ where: { id } });
		return res.sendStatus(204);
	} catch (err) {
		const error = new HttpError('Erro ao deletar categoria', 400);
		return next(error);
	}
};