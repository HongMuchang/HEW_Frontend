import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  databeseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
}
// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}
// const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const google = new firebase.auth.GoogleAuthProvider()
const twitter = new firebase.auth.TwitterAuthProvider()
const github = new firebase.auth.GithubAuthProvider()

export { auth, storage, google, twitter, github }
