import React from 'react'
import Form from '../../common/Form/Form'
import Button from '../../common/Button/Button'
import styles from '../LoginPage/LoginStyle.module.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Form width="320px" height="400px" backgroundColor="#3C3C3C">  
          <h1 
            className={styles.logo}>FilmBro<span className={styles.sublogo}>Quiz</span>
          </h1>

          <div className={styles.inputs}>
            <div className="formInput">
              <input type='text' name='username' placeholder='Username'></input>
            </div>

            <div className="formInput">
              <input type='password' name='Password' placeholder='Password'></input>
            </div>

            <Button width='365px' height='50px' backgroundColor='#9C5C5C' color='#C1C1C1' className='button'>SUBMIT</Button>
          </div>

          <p className={styles.question}>Dont' have an account yet?
            <span>
              <Link to='register' className={styles.link}> Sign Up</Link>  
            </span>
          </p>

      </Form>
    </>
  )
}

export default Login