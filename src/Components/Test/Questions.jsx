import React, { useState } from 'react';
import './Question.css';

export default Question => {
	const questions = [
		{
			questionText: 'Qual é meu pet?',
			answerOptions: [
				{ answerText: 'Scooby', isCorrect: false },
				{ answerText: 'Rodolpho', isCorrect: false },
				{ answerText: 'Caramelo', isCorrect: true },
				{ answerText: 'Sophia', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é meu futuro pet?',
			answerOptions: [
				{ answerText: 'Mel', isCorrect: false },
				{ answerText: 'Scooby', isCorrect: true },
				{ answerText: 'Sophia', isCorrect: false },
				{ answerText: 'Lalinha', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a minha área atual de trabalho e estudo?',
			answerOptions: [
				{ answerText: 'TI', isCorrect: true },
				{ answerText: 'Psicologia', isCorrect: false },
				{ answerText: 'Vendas', isCorrect: false },
				{ answerText: 'Direito', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é meu hobby?',
			answerOptions: [
				{ answerText: 'Correr', isCorrect: false },
				{ answerText: 'Malhar', isCorrect: false },
				{ answerText: 'Jogar', isCorrect: false },
				{ answerText: 'Ler', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Você acertou: {score} de {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}