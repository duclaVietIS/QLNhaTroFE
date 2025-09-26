<template>
    <div class="register-page">
        <div class="register-card">
            <h2>Create a New Account</h2>
            <form class="register-form">
                <div class="form-group">
                    <label for="username">
                        <i class="fas fa-user"></i>
                        Username
                    </label>
                    <input type="text" id="username" name="username" placeholder="Choose a username" required>
                </div>
                <div class="form-group">
                    <label for="email">
                        <i class="fas fa-envelope"></i>
                        Email Address
                    </label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                </div>
                <div class="form-group">
                    <label for="password">
                        <i class="fas fa-lock"></i>
                        Password
                    </label>
                    <input type="password" id="password" name="password" placeholder="Create a password" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">
                        <i class="fas fa-lock"></i>
                        Confirm Password
                    </label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        placeholder="Re-enter your password" required>
                </div>
                <button type="submit" class="btn-submit">Sign Up</button>
            </form>

            <div class="login-link">
                Already have an account? <router-link to="/login">Log In</router-link>
            </div>
            <div class="back-home-link">
                <router-link to="/">Back to Home</router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ForgotPasswordPage'
}
</script>