// Importe o firebase usando a nova sintaxe modular
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-dMDGYfNP_TMFSNmRBi5nbvM2bZ4hrZg",
  authDomain: "twitter-clone-886e0.firebaseapp.com",
  projectId: "twitter-clone-886e0",
  storageBucket: "twitter-clone-886e0.appspot.com",
  messagingSenderId: "855595324710",
  appId: "1:855595324710:web:51fac15efc7db153e2dde7"
};


const app = initializeApp(firebaseConfig);


let db = getFirestore(app);

export default db;
