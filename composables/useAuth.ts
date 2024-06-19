import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNuxtApp } from "#app";
export function useAuth() {
  const { $firebase } = useNuxtApp();
  const login = async (email: string, password: string) => {
    let error = null;
    try {
      const userCredential = await signInWithEmailAndPassword(
        $firebase.auth,
        email,
        password
      );
      return userCredential;
    } catch (err) {
      error = err.message;
    }
  };
  const singUp = async (email: string, password: string , fullName: string) => {
    let error = null;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        $firebase.auth,
        email,
        password
      );
      console.log("userCredential", userCredential)
      await updateProfile(userCredential.user, {displayName: fullName}  )
    } catch (err) {
      error = err.message;
    }
  }
  return { login, singUp };
}
