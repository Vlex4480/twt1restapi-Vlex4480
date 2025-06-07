// API real a ser implementada
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Aluno = require('./models/aluno');
const Curso = require('./models/curso');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


app.get('/alunos', async (req, res) => {
    

    try {
        const alunos = await Aluno.find({});
        res.json(alunos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
});

app.post('/aluno-update', async (req, res) => {
    const { id, nome, apelido, anoCurricular, curso, idade } = req.body;

    try {
        const aluno = await Aluno.findByIdAndUpdate(id, {
            nome,
            apelido,
            anoCurricular,
            curso,
            idade
        }, { new: true });

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        res.json({message: 'Aluno atualizado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
  
});

app.delete('/aluno-delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const aluno = await Aluno.findByIdAndDelete(id);

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        res.json({ message: 'Aluno deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar aluno' });
    }
});

app.post('/aluno-create', async (req, res) => {
    const { nome, apelido, anoCurricular, curso, idade } = req.body;

    try {
        const novoAluno = new Aluno({
            nome,
            apelido,
            anoCurricular,
            curso,
            idade
        });

        await novoAluno.save();
        res.status(201).json({ message: 'Aluno criado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar aluno' });
    }
});

app.get('/cursos', async (req, res) => {
    const cursos = await Curso.find();
    res.json(cursos);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});