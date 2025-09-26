<template>
    <h1>Todo Page</h1>
    <p>This is the Todo Page component.</p>

    <label for="new-todo">New Todo:</label>
    <input id="new-todo" v-model="newTodo" placeholder="Enter a new todo" @keyup.enter="addTodo" />

    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <button @click="removeTodo(index)">Remove</button>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                newTodo: '',
                todos: ['Learn Vue.js', 'Build a Vue app', 'Deploy the app']
            };
        },
        methods: {
            addTodo(){
                if (this.newTodo.trim()) {
                    this.todos.push(this.newTodo.trim());
                    this.newTodo = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    }
</script>