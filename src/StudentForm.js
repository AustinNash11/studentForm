import React, {useState, useEffect} from 'react';
import styles from './StudentForm.module.css'
function StudentForm(){

  const [userFirstName, setUserFirstName] = useState('');
  const handleFirstName = (e) =>{
    setUserFirstName(e.target.value);
  }

  const [userLastName, setUserLastName] = useState('');
  const handleLastName = (e) =>{
    setUserLastName(e.target.value);
  }

  const [userAge, setUserAge] = useState('');
  const handleAge = (e) =>{
    setUserAge(e.target.value);
  }

  const [userAddress, setUserAddress] = useState('');
  const handleAddress = (e) =>{
    setUserAddress(e.target.value);
  }

  const [toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle((prev)=>
      !prev
    );
  }


  return(
    <div>
      <header className = {styles.title}>
        <h1>Student Info Form</h1>
      </header>
      <form>
        <label id='firstName' className= {styles.container}>Enter Your First Name
        <input type = 'text' id = 'firstName' className= {styles.input} onChange = {handleFirstName} value = {userFirstName}/>
        </label>

        <label id='lastName' className={styles.container}>Enter Your Last Name
        <input type = 'text' id = 'lastName' className = {styles.input} onChange = {handleLastName} value = {userLastName}/>
        </label>

        <label id='age' className={styles.container}>Enter Your Age
        <input type = 'text' id = 'age' className = {styles.input} onChange = {handleAge} value = {userAge}/>
        </label>

        <label id = 'address' className={styles.container}>Enter Your address
        <input type='text' id ='address' className = {styles.input} onChange = {handleAddress} value = {userAddress}/>
        </label>
      </form>
      <div className = {styles.div}>
        <button id = 'button1' onClick = {handleToggle}>
            {!toggle ? 'Show Info': 'Hide Info'}
        </button>
        {toggle ? (
          <>
            <span className = {styles.span}> {userFirstName}</span>
            <span className = {styles.span}>{userLastName}</span>
            <span className = {styles.span}>{userAge}</span>
            <span className = {styles.span}>{userAddress}</span>
          </>
          ) : null}
      </div>
    </div>
  );
}

export default StudentForm;