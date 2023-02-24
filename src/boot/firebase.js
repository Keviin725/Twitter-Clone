import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-dMDGYfNP_TMFSNmRBi5nbvM2bZ4hrZg",
  authDomain: "twitter-clone-886e0.firebaseapp.com",
  projectId: "twitter-clone-886e0",
  storageBucket: "twitter-clone-886e0.appspot.com",
  messagingSenderId: "855595324710",
  appId: "1:855595324710:web:51fac15efc7db153e2dde7"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db

