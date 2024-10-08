import React from 'react'
import styles from '../Homepage/HomepageStyle.module.scss';
import Button from '../../common/Button/Button';

function Homepage() {
  return (
    <>
       <div className={styles.homepageContainer}>
            <h1 className={styles.quotes}>Just prove to us that you’re the real FilmBro.</h1>
            
            <Button  width='180px' height='60px' backgroundColor='#9C5C5C' color='#ffffff' className='button'>LET'S BEGIN</Button>

            <p className={styles.totalQuestion}><b>Total Questions :</b> 10</p>
       </div>
    </>
  )
}

export default Homepage;