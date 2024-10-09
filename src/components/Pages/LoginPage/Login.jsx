import React, { useState } from 'react'
import Form from '../../common/Form/Form'
import Button from '../../common/Button/RegButton/Button';
import styles from '../LoginPage/LoginStyle.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import app from '../../../firebase';

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const validateForm = async () => {
    const errors = {};

    if (!usernameInput) {
      errors.username = "Username is required";
    }

    if (!passwordInput) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const navigatePage = async () => {
    const validationErrors = await validateForm(); 

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors); 
      return; 
    } 

    const db = getDatabase(app);
    const usersRef = ref(db, 'userData/users');

    const usernameQuery = query(usersRef, orderByChild('username'), equalTo(usernameInput));

    try {
      console.log("Checking username availability...");
      const snapshot = await get(usernameQuery);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const userKey = Object.keys(userData)[0]; 
        const user = userData[userKey];
        
        if (user.password === passwordInput) {
          navigate('/homepage');
        } else {
          setErrorMessages({ password: "Incorrect Password" }); 
        }
      } else {
        setErrorMessages({ username: "Username not found" });
      }
    } catch (error) {
      console.error('Error querying username:', error.message);
      alert("Error occurred while checking username.");
    }
  };

  const formHeight = Object.keys(errorMessages).length > 0 ? "450px" : "400px";

  return (
    <>
      <Form width="320px" height={formHeight} backgroundColor="#3C3C3C">  
          <h1 className={styles.logo}>
            FilmBro<span className={styles.sublogo}>Quiz</span>
          </h1>

          <div className={styles.inputs}>
            <div className="formInput">
              <input
                type='text' 
                name='username' 
                placeholder='Username'
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
              {errorMessages.username && (
                <p className={styles.errorMessage}>{errorMessages.username}</p>
              )}
            </div>

            <div className="formInput">
              <input
                type='password'
                name='Password'
                placeholder='Password'
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {errorMessages.password && (
                <p className={styles.errorMessage}>{errorMessages.password}</p>
              )}
            </div>

            <Button 
              width='365px' 
              height='50px' 
              backgroundColor='#9C5C5C' 
              color='#C1C1C1' 
              className='button'
              onClick={navigatePage}
            >
              SUBMIT
            </Button>
          </div>

          <p className={styles.question}>Don't have an account yet?
            <span>
              <Link to='register' className={styles.link}> Sign Up</Link>  
            </span>
          </p>
      </Form>
    </>
  )
}

export default Login;
