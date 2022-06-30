// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCe4SKdL8NKRsQAT21Q0LTa4KhD9zHzfbw",

  authDomain: "main-menu-b92c1.firebaseapp.com",

  projectId: "main-menu-b92c1",

  storageBucket: "main-menu-b92c1.appspot.com",

  messagingSenderId: "485122432760",

  appId: "1:485122432760:web:b2222bb8e5cdddc992a50d"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}