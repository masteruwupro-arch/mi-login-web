// Eliminar el import: import { initializeApp } from "firebase/app"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0qeyWZTk2EAsuEkQ_VzwOz9lIt17lJQE",
  authDomain: "login-web-d54ab.firebaseapp.com",
  projectId: "login-web-d54ab",
  storageBucket: "login-web-d54ab.firebasestorage.app",
  messagingSenderId: "15127382840",
  appId: "1:15127382840:web:627c2b50b3112bd0f68fcd"
};

// Inicialización correcta de la Versión 8:
firebase.initializeApp(firebaseConfig); 
const auth = firebase.auth(); // Ahora 'auth' se definirá correctamente

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "home.html"; // Ir a la página principal [cite: 128]
        })
        .catch(err => {
            document.getElementById("mensaje").innerText = "Error: " + err.message; // [cite: 130]
        });
});