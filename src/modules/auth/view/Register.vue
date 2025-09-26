<template>
    <div class="register-page">
        <div class="register-card">
            <h2>Create a New Account</h2>
            <form class="register-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Choose a username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Create a password" required>
                </div>
                <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
};  
</script>
