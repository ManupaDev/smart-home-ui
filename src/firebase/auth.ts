import { app } from "./init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  Auth,
  User,
  signInWithRedirect,
} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const getCurrentUser = async () => {
  const promisifiedOnAuthStateChanged = (auth: Auth):Promise<User | null> => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  };

  const user = await promisifiedOnAuthStateChanged(auth);
  return user;
};

export const signUpUser = async () => {
  try {
    const result = await signInWithRedirect(auth, provider);
    return result;
  } catch (error) {
    console.log("auth cancelled");
  }
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
