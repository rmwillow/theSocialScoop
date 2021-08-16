async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // adjust '/' once you know where you want login to take you
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(reponse.statusText);
        }
    }
}

async function signupHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('#signup-form').addEventListener('submit', signupHandler);