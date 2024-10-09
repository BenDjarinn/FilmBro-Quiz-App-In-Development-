import React from 'react'
import styles from '../QuizEndPage/QuizEndPage.module.scss';
import Button from '../../common/Button/RegButton/Button'

function QuizEndPage() {
  return (
    <>
        <div className={styles.pageHeader}>
            <p className={styles.correctAns}>The correct answer:</p>

            <h3 className={styles.questionAns}>5/5</h3>

            <p className={styles.correctAns}>Great!</p>

        </div>
        
        <Button  width='160px' height='50px' backgroundColor='#9C5C5C' color='#ffffff' className='button'>Play Again</Button>
    </>
  )
}

export default QuizEndPage