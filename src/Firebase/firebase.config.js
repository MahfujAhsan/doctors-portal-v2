import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwHyeWkmOaE18xo0pZsDD1cWYw4QMuaqs",
  authDomain: "doctors-portal-v2-9978d.firebaseapp.com",
  projectId: "doctors-portal-v2-9978d",
  storageBucket: "doctors-portal-v2-9978d.appspot.com",
  messagingSenderId: "972914949094",
  appId: "1:972914949094:web:c6185d76a55b6e4b5df427"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);