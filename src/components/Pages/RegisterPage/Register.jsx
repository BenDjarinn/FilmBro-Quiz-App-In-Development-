import React, { useState } from 'react';
import Form from '../../common/Form/Form';
import Button from '../../common/Button/RegButton/Button';
import styles from '../RegisterPage/RegisterStyle.module.scss';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set, push, query, orderByChild, equalTo, get } from 'firebase/database';
import app from '../../../firebase';

function Register() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repasswordInput, setRepasswordInput] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const validateForm = async () => {
    const errors = {};

    if (!usernameInput) {
      errors.username = "Username is required";
    }

    if (!passwordInput) {
      errors.password = "Password is required";
    }

    if (!repasswordInput) {
      errors.repassword = "Re-enter Password is required";
    }

    if (usernameInput && usernameInput.length < 8) {
      errors.username = "Username must be at least 8 characters long";
    }

    if (passwordInput && passwordInput.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (passwordInput && repasswordInput && passwordInput !== repasswordInput) {
      errors.repassword = "Passwords must match";
    }

    if (usernameInput) {
      const db = getDatabase(app);
      const usersRef = ref(db, 'userData/users');
      const usernameQuery = query(usersRef, orderByChild('username'), equalTo(usernameInput));

      try {
        console.log("Checking username availability...");
        const snapshot = await get(usernameQuery);
        
        if (snapshot.exists()) {
          errors.username = "Username already exists";
        }
      } catch (error) {
        console.error('Error querying username:', error.message);
        errors.username = "Failed to check username availability"; 
      }
    }


    return errors;
  };

  const saveData = async () => {
    const validationErrors = await validateForm(); 

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors); 
      return; 
    }

    const db = getDatabase(app);
    const usersRef = ref(db, 'userData/users');
    const newDocRef = push(usersRef);

    try {
      await set(newDocRef, {
        username: usernameInput,
        password: passwordInput,
      });

      alert("Registration succeed!");

      setUsernameInput("");
      setPasswordInput("");
      setRepasswordInput("");
      setErrorMessages({});
    } 
    catch (error) {
      console.error("Error: ", error.message);
      setErrorMessages({ general: "Registration failed. Please try again." }); 
    }
  };

  const formHeight = Object.keys(errorMessages).length > 0 ? "550px" : "500px";

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

          <div className="formInput">
            <input
              type='password'
              name='Password'
              placeholder='Re-enter Password'
              value={repasswordInput}
              onChange={(e) => setRepasswordInput(e.target.value)}
            />
            {errorMessages.repassword && (
              <p className={styles.errorMessage}>{errorMessages.repassword}</p>
            )}
          </div>

          <Button
            width='365px'
            height='50px'
            backgroundColor='#9C5C5C'
            color='#C1C1C1'
            className='button'
            onClick={saveData}
          >
            SUBMIT
          </Button>
        </div>

        {errorMessages.general && (
          <p className={styles.errorMessage}>{errorMessages.general}</p> 
        )}

        <p className={styles.question}>Have an account?
          <span>
            <Link to='/' className={styles.link}> Sign In</Link>
          </span>
        </p>
      </Form>
    </>
  );
}

export default Register;
