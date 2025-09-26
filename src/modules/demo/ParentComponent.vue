<template>
    <div class="demo-container">
        <div class="parent-component">
            <h1>Parent Component</h1>
            <input 
                v-model="messageToChild" 
                placeholder="Type a message to send to Child Component"
                @input="updateMessage($event.target.value)" 
            />
            <h2 style="color: burlywood;">Message from Parent:</h2>
            <p>Message from child: {{ messageFromChild }}</p>
        </div>
        <div class="child-component">
            <ChildComponent 
                :message="messageToChild" 
                @message-from-child="handleMessageFromChild"
            />
        </div>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: 'ParentComponent',
    components: {
        ChildComponent
    },
    data() {
        return {
            messageToChild: 'Hello from Parent Component Oh yeah!',
            messageFromChild: ''
        }
    },
    methods: {
        updateMessage(newMessage) {
            this.messageToChild = newMessage;
        },
        handleMessageFromChild(data) {
            this.messageFromChild = data;
        }
    }
}
</script>

<style scoped>
.demo-container {
    padding: 20px;
}

.parent-component,
.child-component {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
}

.parent-component {
    background: #5cb844;
    color: white;
}

.child-component {
    background: #f17e7e;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>