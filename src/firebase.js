// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore/lite'
// import firebase from 'firebase'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBJd20zohnEDgw0h2qOLJMDZ2GRIuzT7Bk',
  authDomain: 'netflix-clone-d59cd.firebaseapp.com',
  projectId: 'netflix-clone-d59cd',
  storageBucket: 'netflix-clone-d59cd.appspot.com',
  messagingSenderId: '934459340175',
  appId: '1:934459340175:web:c800691c2f890c766087fa',
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Use these for db & auth
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = getFirestore(firebaseApp)
// const auth = getAuth(firebaseApp)
// export { auth }
// export default db
