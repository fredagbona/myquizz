const quizData = require('../data/quizData');

exports.getQuiz = (req, res) => {
    res.json(quizData);
}