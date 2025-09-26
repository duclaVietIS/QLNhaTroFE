<template>
    <div class="child-wrapper">
        <h3>Child Component</h3>
        <p>This is message from parent: {{ message }}</p>

        <ButtonCustom button-name="Click Me" />
        <ButtonCustom button-name="Submit OK" />
        
        <!-- HTML content -->
        <p v-html="childMessage"></p>
       
        <!-- Normal text -->
        <p>{{ childMessage }}</p>
        <div v-html="dynamicHtml"></div>
        
        <button @click="updateDynamicHtml">Update Dynamic HTML</button>

        <div class="message-to-parent">
            <h3>Send Message to Parent: {{ messageToParent }}</h3>
            <input 
                type="text" 
                v-model="messageToParent" 
                placeholder="Type message to parent"
            />
            <button @click="sendMessageToParent">Send Message to Parent</button>
        </div>
    </div>
</template>

<script>
import ButtonCustom from './ButtonCustom.vue';

export default {
    name: 'ChildComponent',
    components: {
        ButtonCustom
    },
    props: {
        message: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            childMessage: '<p>Hello from Child Component!</p> <i>Italics text</i>',
            dynamicHtml: 'This is <strong>bold</strong> text',
            messageToParent: ''
        }
    },
    methods: {
        updateDynamicHtml() {
            this.dynamicHtml = "<strong style='color: red;'>This is dynamic HTML content!</strong>";
        },
        sendMessageToParent() {
            this.$emit('message-from-child', this.messageToParent);
        }
    }
}
</script>

<style scoped>
.child-wrapper {
    border: 1px solid #fff;
    padding: 15px;
    border-radius: 6px;
}

.message-to-parent {
    border: 1px solid #fff;
    padding: 15px;
    margin-top: 15px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
}

input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
}

button:hover {
    background: #0056b3;
}
</style>