import { auth } from "../base";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { navigate } from "@reach/router";
import {doc, DocumentSnapshot, getDoc} from "firebase/firestore"
import { firestore } from "../base";
import { useState } from "react";
const ProfilePage = () => {
    const [name, setName] = useState("");
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          

          const docRef = doc(firestore, "users", uid);
          async function getUsername() {
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                console.log(docSnap.data().name);
                setName(docSnap.data().name);

            } else {
                console.log("Null name");
            }
          }
          getUsername();
          // ...
        } else {
          // User is signed out
          navigate('/login');
          window.location.reload();
          // ...
        }
      });
    return (
        <p>Yo Yo Yo {name} what is up with you</p>
    );
};
export default ProfilePage;