const Todo = require('../models/todo');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Todo.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const TODO_MODEL = {
      content: req.body.content,
      completed: req.body.completed
    };

    try {
      const todo = await Todo.create(TODO_MODEL);
      console.log('Todo crerated');
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const TODO_MODEL = {
      content: req.body.content,
      completed: req.body.completed
    };

    try {
      const todo = await Todo.update(TODO_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(todo);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const todo = await Todo.destroy({ where: { id: req.params.id } });
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error);
  }
};
