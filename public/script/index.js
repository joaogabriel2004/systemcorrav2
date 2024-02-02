
    const firebaseConfig = {
        apiKey: "AIzaSyD4sZLJhNXYf_LZeF85LZhq_Myg_mGSjNU",
        authDomain: "sistema-corraproabraco.firebaseapp.com",
        projectId: "sistema-corraproabraco",
        storageBucket: "sistema-corraproabraco.appspot.com",
        messagingSenderId: "626902617736",
        appId: "1:626902617736:web:72f82ee3b30cda678dd93d"
    };
    firebase.initializeApp(firebaseConfig);


function processarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const auth = firebase.auth();
    
    auth.signInWithEmailAndPassword(email, senha)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('Login bem-sucedido:', user.uid);
            window.location.href = 'public/views/processar.html';
        })
        .catch(error => {
            console.error('Erro ao realizar o login:', error.message);
            // Exibir mensagem de erro ou redirecionar para uma página de erro
        }); 
}
