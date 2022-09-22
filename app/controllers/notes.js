const Note = require('../models/note');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Note.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const note = await Note.findByPk(req.params.id);
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const NOTE_MODEL = {
      title: req.body.title,
      content: req.body.content,
    };

    try {
      const note = await Note.create(NOTE_MODEL);
      console.log('Note crerated');
      return res.status(201).json(note);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const NOTE_MODEL = {
      title: req.body.title,
      content: req.body.content,
    };

    try {
      const note = await Note.update(NOTE_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(note);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const note = await Note.destroy({ where: { id: req.params.id } });
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json(error);
  }
};
