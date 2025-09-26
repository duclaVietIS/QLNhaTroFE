<template>
    <div class="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-page {
    text-align: center;
    margin-top: 100px;
}
.not-found-page h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}
.not-found-page p {
    margin-bottom: 20px;
    color: #666;
}
</style>