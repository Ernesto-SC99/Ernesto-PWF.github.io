function sendCode() {
    const email = document.getElementById('email').value;
    if (email) {
        // Simulate sending a code
        alert('A 4-digit code has been sent to ' + email);
        document.getElementById('codeSection').style.display = 'block';
    } else {
        alert('Please enter a valid email address.');
    }
}

function resetPassword() {
    const code = document.getElementById('code').value;
    if (code.length === 4) {
        alert('Password reset successful. You can now set a new password.');
        // Logic to reset password goes here
    } else {
        alert('Please enter a valid 4-digit code.');
    }