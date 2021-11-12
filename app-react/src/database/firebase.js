import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDvWrV8p5cm5W6mL0m9GFPTA2N3d0yVrt8",
   authDomain: "boletim-68c17.firebaseapp.com",
   databaseURL: "https://boletim-68c17-default-rtdb.firebaseio.com/",
    projectId: "boletim-68c17",
    storageBucket: "boletim-68c17.appspot.com",
   messagingSenderId: "260092741979",
    appId: "1:260092741979:web:49081c0ccee547a58d727e"
};


let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref()
