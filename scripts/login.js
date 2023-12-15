const login = document.querySelector("#loginForm");
login.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create login data object
    const loginData = {
        email,
        password
    };

    // Send login request to the server
    const response = await fetch('http://localhost:8000/seller/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });

    const data = await response.json();
    if (response.ok) {
        // Save seller token or identifier in localStorage
        localStorage.setItem('sellerToken', data.token);
        // Redirect to another page
        window.location.href = 'dashboard.html';
    } else {
        alert(data.message || 'Login failed');
    }
});