<template>
    <div class="login-page">
        <div class="login-card">
            <h2>Login to Your Account</h2>
            <form class="login-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="login-button">Login</button>
            </form>
            <p class="signup-link">
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    </div>
</template>