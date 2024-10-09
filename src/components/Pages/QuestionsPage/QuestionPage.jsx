import React from 'react'
import styles from '../QuestionsPage/QuestionPage.module.scss'
import AnswerButton from '../../common/Button/AnswerButton/AnswerButton'

export default function QuestionPage() {
  return (
    <>
    <div className={styles.header}>
        <p>Question 1</p>
        <p>01 : 30</p>  
    </div>

    <div className={styles.questionCard}>
        <p className={styles.question}>Who's not member of Akatsuki
        </p>

        <div className={styles.options}>

                <AnswerButton  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>Sasuke Uchiha</AnswerButton>

                <AnswerButton  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>Nagato</AnswerButton>

                <AnswerButton  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>Itachi Uchiha</AnswerButton>

                <AnswerButton  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>Obito</AnswerButton>


        </div>


    </div>
    </>

    
  )
}
