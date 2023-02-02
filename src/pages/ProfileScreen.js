import React from 'react'
import Nav from '../components/Nav'
import { auth } from '../firebase'

const profileStyles = {
  height: '100vh',
  padding: '5em',
  color: 'white',
}

function ProfileScreen(props) {
  return (
    <div className="profile">
      <Nav />
      <div className="container" style={profileStyles}>
        <h1>Welcome {props.user.email}</h1>
        <p> Hi {props.user.email} </p>
        <button
          onClick={() => {
            console.log('signOut')
            auth.signOut()
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default ProfileScreen
