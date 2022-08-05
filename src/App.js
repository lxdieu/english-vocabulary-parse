import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import Dashboard from './components/Dashboard';

const firebaseConfig = {
  apiKey: "AIzaSyDbR_bR7_eR3j864xuRRJCOJVMLytAs7oE",
  authDomain: "vocab-parse.firebaseapp.com",
  projectId: "vocab-parse",
  storageBucket: "vocab-parse.appspot.com",
  messagingSenderId: "879757099295",
  appId: "1:879757099295:web:95f03fb9384c4ff176b02a"
};
initializeApp(firebaseConfig);
function App() {
  return (
    <Dashboard/>
  );
}

export default App;
