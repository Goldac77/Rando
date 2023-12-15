const form = document.querySelector("#signupForm");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create signup data object
    const signupData = {
        name,
        location,
        email,
        password
    };

    // Send signup data to the server
    const response = await fetch('http://localhost:8000/seller/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message || 'Signup successful');
        window.location.href = 'login.html'; // Redirect to login page after successful signup
    } else {
        alert(data.message || 'Signup failed');
    }
});