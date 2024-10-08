import React from 'react'
import styles from '../QuestionsPage/QuestionPage.module.scss'
import Button from '../../common/Button/Button'

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

                <Button  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>Sasuke Uchiha</Button>

                <Button  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>True</Button>

                <Button  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>True</Button>

                <Button  width='250px' height='100px' backgroundColor='#9C5C5C' color='#ffffff' className={styles.button}>True</Button>


        </div>


    </div>
    </>

    
  )
}
