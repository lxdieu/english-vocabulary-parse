import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDbR_bR7_eR3j864xuRRJCOJVMLytAs7oE",
  authDomain: "vocab-parse.firebaseapp.com",
  projectId: "vocab-parse",
  storageBucket: "vocab-parse.appspot.com",
  messagingSenderId: "879757099295",
  appId: "1:879757099295:web:95f03fb9384c4ff176b02a",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  useEffect(() => {
    getData();
  });
  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "list-vocab"), {
        value: "test string",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "list-vocab"));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()?.value}`);
    });
  };
  return <Dashboard handleAdd={handleAdd} />;
}

export default App;
