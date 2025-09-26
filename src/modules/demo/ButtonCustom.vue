<template>
    <div class="custom-button" @click="handleClick">
        <div class="button-text">{{ buttonName }}</div>
    </div>
</template>

<script>
export default {
    name: 'ButtonCustom',
    props: {
        buttonName: {
            type: String,
            default: 'Default Button'
        }
    },
    methods: {
        handleClick() {
            console.log('Button clicked: ' + this.buttonName);
            this.$emit('button-clicked', this.buttonName);
        }
    }
}
</script>

<style scoped>
.custom-button {
    background-color: #E2A16F;
    max-width: 120px;
    height: 40px;
    margin: 5px;
    border: 1px solid #FFF0DD;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.custom-button:hover {
    background-color: #D4956B;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button-text {
    color: #FFF0DD;
    font-weight: 500;
}
</style>