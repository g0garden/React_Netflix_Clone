import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
      apiKey: "AIzaSyCiACMC6CdsVfyPcNvfhpn65JntFE0NKFE",
      authDomain: "netflixclonereact-9d0a8.firebaseapp.com",
      projectId: "netflixclonereact-9d0a8",
      storageBucket: "netflixclonereact-9d0a8.appspot.com",
      messagingSenderId: "678791953241",
      appId: "1:678791953241:web:10f8198c7d9d4c3679aa48",
      measurementId: "G-4D2V17SKS6"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


const apiKey = firebaseConfig.apiKey;

//auth 인증 (아이디/패스워드인듯)
const auth=firebase.auth();

const firestore = firebase.firestore();
const imageStorage = firebase.storage();
const storage = firebase.storage();

export { firestore, imageStorage, storage, auth, apiKey };
