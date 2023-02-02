import React from 'react'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'

// import { onAuthStateChanged } from 'firebase/auth'

// import { Counter } from './features/counter/Counter';
import requests from './helpers/requests'
import Nav from './components/Nav'
// import Banner from './components/Banner'
// import Row from './components/Row'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import SignUpScreen from './pages/SignUpScreen'
import { logIn, logOut, selectUser } from './features/user/userSlice'
import ProfileScreen from './pages/ProfileScreen'

function App() {
  // is using this is right or not
  // const [user, setUser] = React.useState(useSelector(selectUser))
  const user = useSelector(selectUser)
  // const user = true;

  const dispatch = useDispatch()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // setUser(authUser)
        console.log(authUser)
        // dispatch login event and send an object to it
        dispatch(logIn({ uid: authUser.uid, email: authUser.email }))
      } else {
        // setUser(null)
        console.log(authUser)
        dispatch(logOut())
      }
    })

    return unsubscribe
  },[dispatch])

  return (
    <div className="app body">
      {/* <Nav /> */}
      {!user ? (
        <SignUpScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen requests={requests} />} />
          <Route
            path="/hi"
            element={
              <>
                <Nav />
                <h1>Hiiiiiiiii</h1>
              </>
            }
          />
          <Route path="/profile" element={<ProfileScreen user={user} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  )
}

export default App
