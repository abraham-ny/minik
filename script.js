// Firebase Config (Replace with your Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyBkDdJetfyAwQqsYVKp5a8hGxC1fzQfSkA",
    authDomain: "minik-2486f.firebaseapp.com",
    projectId: "minik-2486f",
    storageBucket: "minik-2486f.firebasestorage.app",
    messagingSenderId: "507980853656",
    appId: "1:507980853656:web:7df4cf83dec459979c3bed",
    measurementId: "G-T6YDSQWTSX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Generate a random shortcode
function generateShortCode() {
    return Math.random().toString(36).substring(2, 8);
}

// Shorten URL function
function shortenUrl() {
    let longUrl = document.getElementById("longUrl").value;
    if (!longUrl) {
        alert("Please enter a URL.");
        return;
    }

    let shortCode = generateShortCode();
    db.collection("urls").add({ longUrl, shortCode }).then(() => {
        document.getElementById("shortenedUrl").innerHTML = 
            `Shortened URL: <a href="/${shortCode}" target="_blank">${window.location.origin}/${shortCode}</a>`;
    }).catch(error => console.error("Error:", error));
}

// Redirect short URL
function checkForRedirect() {
    let shortCode = window.location.pathname.substring(1);
    if (shortCode) {
        db.collection("urls").where("shortCode", "==", shortCode)
            .get()
            .then(snapshot => {
                if (!snapshot.empty) {
                    let data = snapshot.docs[0].data();
                    window.location.href = data.longUrl;
                } else {
                    document.body.innerHTML = "<h2>URL not found</h2>";
                }
            });
    }
}

// Run redirect check when page loads
window.onload = checkForRedirect;
