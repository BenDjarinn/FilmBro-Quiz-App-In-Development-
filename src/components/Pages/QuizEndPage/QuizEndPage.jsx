import React, { useEffect, useState } from 'react'
import styles from '../QuizEndPage/QuizEndPage.module.scss';
import Button from '../../common/Button/RegButton/Button'
import { useNavigate } from 'react-router-dom';

function QuizEndPage() {

  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    const storedTotalQuestions = localStorage.getItem('totalQuestions');
    if (storedScore && storedTotalQuestions) {
      setScore(parseInt(storedScore));
      setTotalQuestions(parseInt(storedTotalQuestions));
    }
  }, []);


  const navigatePage = () => {
    navigate('/questions')
  }

  const getGreeting = () => {
    if (score <= 2) {
      return "Nah, you're not the FilmBro";
    } else if (score === 3) {
      return "Not bad! A bit more, you're the the real FilmBro";
    } else {
      return "Great! Just keep it Up your title";
    }
  };

  return (
    <>
        <div className={styles.pageHeader}>
            <p className={styles.greeting}>{getGreeting()}</p>

            <p className={styles.correctAns}>Answered Questions : {totalQuestions}</p>
            <p className={styles.correctAns}>The correct answers : {score}/{totalQuestions}</p>

        </div>
        
        <Button  width='180px' height='60px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button} onClick={navigatePage}>PLAY AGAIN?</Button>
    </>
  )
}

export default QuizEndPage