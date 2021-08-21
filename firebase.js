import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCPpSEsksqv55ZuOmce-Zrugkwe6U5uiZY',
	authDomain: 'facebook-726c6.firebaseapp.com',
	projectId: 'facebook-726c6',
	storageBucket: 'facebook-726c6.appspot.com',
	messagingSenderId: '100082802987',
	appId: '1:100082802987:web:19e6eb0f084a3a8346a56e',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
