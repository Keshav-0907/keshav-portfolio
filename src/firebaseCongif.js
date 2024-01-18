import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYU_rPShwX5nkn4WjhwO2O4C91PWfPXg4",
  authDomain: "portfolio-7abcf.firebaseapp.com",
  projectId: "portfolio-7abcf",
  storageBucket: "portfolio-7abcf.appspot.com",
  messagingSenderId: "157965835067",
  appId: "1:157965835067:web:5bc281d1e36d4e2bc9751e"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;