import React from 'react'
import Form from '../../common/Form/Form'
import Button from '../../common/Button/RegButton/Button';
import styles from '../RegisterPage/RegisterStyle.module.scss';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Form width="320px" height="500px" backgroundColor="#3C3C3C">  
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

            <div className="formInput">
              <input type='password' name='Password' placeholder='Re-enter Password'></input>
            </div>

            <Button width='365px' height='50px' backgroundColor='#9C5C5C' color='#C1C1C1' className='button'>SUBMIT</Button>
          </div>

          <p className={styles.question}>Have an account?
            <span>
            <Link to='/' className={styles.link}> Sign In</Link> 
            </span>
        </p>

      </Form>
    </>
  )
}

export default Register