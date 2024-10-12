import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styles from '../QuestionsPage/QuestionPage.module.scss';
import AnswerButton from '../../common/Button/AnswerButton/AnswerButton';
import axios from 'axios';
import { decode } from 'he';

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timer, setTimer] = useState(90);
    const [isLoading, setIsLoading] = useState(true); 

    const navigate = useNavigate(); 

    useEffect(() => {
        const storedQuestions = localStorage.getItem('questions');
        const storedIndex = localStorage.getItem('currentQuestionIndex');
        const storedScore = localStorage.getItem('score');
        const storedTimer = localStorage.getItem('timer');

        if (storedQuestions && storedIndex && storedScore && storedTimer) {
            setQuestions(JSON.parse(storedQuestions));
            setCurrentQuestionIndex(parseInt(storedIndex));
            setScore(parseInt(storedScore));
            setTimer(parseInt(storedTimer));
            setIsLoading(false); 
        } else {
            const fetchQuestions = async () => {
                try {
                    const response = await axios.get('https://opentdb.com/api.php?amount=5&category=11&type=multiple');
                    setQuestions(response.data.results);
                    setCurrentQuestionIndex(0);
                    setScore(0); 
                    setTimer(90); 
                    setIsQuizFinished(false); 
                    localStorage.setItem('questions', JSON.stringify(response.data.results));
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            };
            fetchQuestions();
        }
    }, []);

    useEffect(() => {
        if (questions.length > 0) {  
            localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
            localStorage.setItem('score', score);
            localStorage.setItem('timer', timer);
        }
    }, [currentQuestionIndex, score, timer, questions]);

    useEffect(() => {
        if (!isLoading) { 
            const interval = setInterval(() => {
                setTimer((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setIsQuizFinished(true);
                        removeQuizDataFromLocalStorage(); 
                        navigate('/quizEnd');
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [navigate, isLoading]);

    const handleAnswer = (isCorrect) => {
        setIsAnswered(true); 

        const answeredQuestions = currentQuestionIndex + 1;
        localStorage.setItem('answeredQuestions', answeredQuestions);

        
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setIsAnswered(false); 
            } else {
                setIsQuizFinished(true); 
                removeQuizDataFromLocalStorage(); 
                localStorage.setItem('score', score + (isCorrect ? 1 : 0));
                localStorage.setItem('totalQuestions', questions.length);
                navigate('/quizEnd');
            }
        }, 1000); 
    };

    const removeQuizDataFromLocalStorage = () => {
        localStorage.removeItem('questions');
        localStorage.removeItem('currentQuestionIndex');
        localStorage.removeItem('score');
        localStorage.removeItem('timer');
    };

    if (isLoading) {
        return <div style={{color: 'white', fontWeight: 'bolder', fontSize: '32px'}}>Loading questions...</div>;
    }

    if (isQuizFinished) {
        return null; 
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(); 

    return (
        <>
            <div className={styles.header}>
                <p>Question {currentQuestionIndex + 1}</p>
                <p>Time left: {timer}s</p>
            </div>

            <div className={styles.questionCard}>
                <div className={styles.question}>
                  <p>{decode(currentQuestion.question)}</p>
                </div>

                <div className={styles.options}>
                    {answers.map((answer, index) => (
                        <AnswerButton
                            key={index}
                            width='250px'
                            height='100px'
                            backgroundColor='#9C5C5C'
                            color='#ffffff'
                            className={styles.button}
                            onClick={() => handleAnswer(answer === currentQuestion.correct_answer)}
                            disabled={isAnswered} 
                        >
                            {decode(answer)}
                        </AnswerButton>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuestionsPage;
