import React from 'react'
import Nav from '../components/Nav'
// import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'


function SignUpScreen(props) {
  //   const navigate = useNavigate()

  // to capture data of the user
  const emailRef = React.useRef(null)
  const passRef = React.useRef(null)

  // then use ref with inputs
  function register(e) {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value,
      )
      .then((d) => console.log(d))
      .catch((e) => console.log(e))
  }


  function logIn(e) {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value,
    )
  }

  //! start css code i will cut it to css file
  const styles = {
    background: 'yellow',
    padding: '5em',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const fromStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: `center`,
  }

  const spanStyles = {
    textDecoration: 'underline',
    cursor: 'pointer',
  }
  //! end css code
  
  return (
    <div className="signUpScreen">
      <Nav />
      <div style={styles} className="container">
        <form style={fromStyles}>
          {/* required in jsx  */}
          <input type="text" ref={emailRef} />
          <input type="text" ref={passRef} />
          <input type="submit" onClick={logIn} />
          <p>
            create new account{' '}
            <span style={spanStyles} onClick={register}>
              sign--up
            </span>
          </p>
        </form>
      </div>
      <div
        style={{ cursor: 'pointer', padding: '5em', color: 'white' }}
      >
        Hi you have to loge in first
      </div>
    </div>
  )
}

export default SignUpScreen
