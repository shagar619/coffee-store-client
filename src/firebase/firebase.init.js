// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;






// 1. firebase-tools (one time)
// 2. firebase login (one time)
// 3. one time for each project : firebase init
// 4. what you want to do: select hosting
// 5. selected a projected (already have one created in firebase console)
// 6. what will be your public repo: dist
// 7 . single page?: y
// 8. deploys with GitHub?: n

// ---------------------------------
// Each time you want to deploy

// 9. npm run build
// 10. firebase deploy