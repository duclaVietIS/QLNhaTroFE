<template>
    <div>
        <p :class="{ active: this.isActive, inactive: !this.isActive }" :style="stylteObject">
            This is an active paragraph.
        </p>
        <button @click="toggleActive" class="btn btn-toggle">
            Toggle Active State
        </button>
    </div>
</template>

<script>
export default {
    name: 'ClassBindingDemo',
    data() {
        return {
            isActive: true,
            stylteObject: {
                fontSize: '20px',
                border: '1px solid black',
                padding: '10px'
            }
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style scoped>
.active {
    color: green;
}
.inactive {
    color: red;
}
</style>
