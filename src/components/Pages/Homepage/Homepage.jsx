import React, { useState, useEffect } from 'react';
import styles from '../Homepage/HomepageStyle.module.scss';
import Button from '../../common/Button/RegButton/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Homepage() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const navigatePage = () => {
    navigate('/questions')
  }

  useEffect(() => {
    const fetchQuestions = async () => {
        try {
            const response = await axios.get('https://opentdb.com/api.php?amount=5&category=11&type=multiple');
            setQuestions(response.data.results);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    fetchQuestions();
  }, []); 


  return (
    <>
       <div className={styles.homepageContainer}>
            <h1 className={styles.quotes}>Just prove to us that you’re the real FilmBro.</h1>
            
            <Button  width='180px' height='60px' backgroundColor='#9C5C5C' color='#ffffff' className='button' onClick={navigatePage}>LET'S BEGIN</Button>

            <p className={styles.totalQuestion}>
              <b>Total Questions : </b>
              {questions.length > 0 ? questions.length : 'Loading...'}
            </p>
       </div>
    </>
  )
}

export default Homepage; 