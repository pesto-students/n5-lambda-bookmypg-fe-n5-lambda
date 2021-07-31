import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDGpwMrVpY0hQNmTqDE-nVOyVXRSDiSvOA",
  authDomain: "bookmypg-f29bd.firebaseapp.com",
  projectId: "bookmypg-f29bd",
  storageBucket: "bookmypg-f29bd.appspot.com",
  messagingSenderId: "422308186696",
  appId: "1:422308186696:web:20a302b8b6947b6283e67d",
  measurementId: "G-6T2RV7QK25",
});

export const auth = app.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { firstName, lastName } = additionalData;

    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};

export default app;
