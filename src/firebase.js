import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBPs2KDlN8stuh5XVGN0f6cVHlc1b0-gyA",
	authDomain: "whatsapp-clone-bfadd.firebaseapp.com",
	projectId: "whatsapp-clone-bfadd",
	storageBucket: "whatsapp-clone-bfadd.appspot.com",
	messagingSenderId: "963000450841",
	appId: "1:963000450841:web:5e27cdb2549e132060cf88",
	measurementId: "G-CKDVR9HTTZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
