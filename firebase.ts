// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3gbdVztVYDl2lMWgKSfCvK1Upq8yvVkQ",
    authDomain: "netflix-clone-yt-52f16.firebaseapp.com",
    projectId: "netflix-clone-yt-52f16",
    storageBucket: "netflix-clone-yt-52f16.appspot.com",
    messagingSenderId: "136374581224",
    appId: "1:136374581224:web:15d20a2a0cc797344fd65d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }