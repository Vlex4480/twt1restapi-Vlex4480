const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: mongoose.Schema.Types.Int32,
  nomeDoCurso: mongoose.Schema.Types.String,
});

module.exports = mongoose.model('Curso', cursoSchema, 'cursos');