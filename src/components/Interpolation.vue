<template>
    <div style="padding: 20px;">
        <h1>VueJS Array Examples</h1>
        
        <!-- Basic Counter -->
        <div style="border">
            <h3>1. Basic Counter</h3>
            <p>Number: {{ number }}</p>
            <button @click="incrementNumber">Increment</button>
            <button @click="callAPI">Log Number</button>
        </div>

        <!-- Items Management -->
        <div style="border">
            <h3>2. Items Management ({{ totalItems }} items, {{ checkedItemsCount }} checked)</h3>
            
            <div style="margin: 10px 0;">
                <input v-model="nameItem" placeholder="Enter item name" style="margin-right: 5px;"/>
                <button @click="addItem">Add Item</button>
                <button @click="clearAllItems" style="margin-left: 5px;">Clear All</button>
            </div>

            <div style="margin: 10px 0;">
                <input v-model="searchText" placeholder="Search items..." style="margin-right: 5px;"/>
                <span>Search results: {{ filteredItems.length }}</span>
            </div>

            <ul>
                <li v-for="(item, index) in filteredItems" :key="item.id" style="margin: 5px 0;">
                    <input type="checkbox" v-model="item.checked" @change="updateCheckedItems" />
                    {{ item.name }}
                    <button @click="removeItem(index)" style="margin-left: 10px;">Remove</button>
                </li>
            </ul>
        </div>

        <!-- Fruits Array -->
        <div style="border">
            <h3>3. Fruits Array ({{ fruits.length }} fruits)</h3>
            
            <div style="margin: 10px 0;">
                <input v-model="newFruit" placeholder="Enter fruit name" style="margin-right: 5px;"/>
                <button @click="addFruit">Add Fruit</button>
                <button @click="sortFruits">Sort A-Z</button>
                <button @click="shuffleFruits">Shuffle</button>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                <span 
                    v-for="(fruit, index) in fruits" 
                    :key="index"
                    style="background: #e0f7fa; padding: 5px 10px; border-radius: 15px; cursor: pointer;"
                    @click="removeFruit(index)"
                >
                    {{ fruit }} ×
                </span>
            </div>
        </div>

        <!-- Users Management -->
        <div style="border">
            <h3>4. Users Management ({{ users.length }} users, {{ activeUsers.length }} active, Avg age: {{ averageAge }})</h3>
            
            <div style="margin: 10px 0;">
                <input v-model="newUser.name" placeholder="Name" style="margin-right: 5px;"/>
                <input v-model="newUser.age" type="number" placeholder="Age" style="margin-right: 5px;"/>
                <label style="margin-right: 5px;">
                    <input type="checkbox" v-model="newUser.active" /> Active
                </label>
                <button @click="addUser">Add User</button>
            </div>

            <div style="margin: 10px 0;">
                <label>Filter: </label>
                <select v-model="filterType">
                    <option :value="FILTER_TYPES.ALL">{{ filterConstants.LABELS.ALL }}</option>
                    <option :value="FILTER_TYPES.ACTIVE">{{ filterConstants.LABELS.ACTIVE }}</option>
                    <option :value="FILTER_TYPES.INACTIVE">{{ filterConstants.LABELS.INACTIVE }}</option>
                </select>
                
                <!-- Hiển thị filter hiện tại -->
                <span style="margin-left: 10px; font-style: italic;">
                    Current: {{ filterType }}
                </span>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="color: #dbe732ff;">
                        <th >ID</th>
                        <th >Name</th>
                        <th >Age</th>
                        <th >Status</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in filteredUsers" :key="user.id">
                        <td >{{ user.id }}</td>
                        <td >{{ user.name }}</td>
                        <td >{{ user.age }}</td>
                        <td >
                            <span :style="{color: user.active ? 'green' : 'red'}">
                                {{ user.active ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td >
                            <button @click="toggleUserStatus(user.id)" style="margin-right: 5px;">
                                {{ user.active ? 'Deactivate' : 'Activate' }}
                            </button>
                            <button @dblclick="removeUser(user.id)">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Numbers Array -->
        <div class="border">
            <h3>5. Numbers Array ({{ numbers.length }} numbers, Sum: {{ totalNumbers }}, Max: {{ maxNumber }})</h3>
            
            <div style="margin: 10px 0;">
                <button @click="addRandomNumber">Add Random</button>
                <button @click="sortNumbers">Sort Asc</button>
                <button @click="reverseNumbers">Reverse</button>
                <button @click="clearNumbers">Clear All</button>
            </div>

            <div>
                <span 
                    v-for="(num, index) in numbers" 
                    :key="index"
                    style="background: #fff3e0; padding: 3px 8px; margin: 2px; border-radius: 4px; display: inline-block;"
                >
                    {{ num }}
                </span>
            </div>
        </div>

        <!-- Status Message -->
        <div v-if="message" style="background: #e8f5e8; padding: 10px; margin: 10px 0; border-radius: 4px;">
            <strong>{{ message }}</strong>
        </div>
    </div>
</template>
<script>
import InterpolationComponent from './Interpolation.js'

export default InterpolationComponent
</script>

<style scoped>
/* Add component-specific styles here */
tr th, 
tr td {
    text-align: left;
}
/* background color for table rows */
tr:hover {
    background: #f15c5cff;
}
.border {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
}
</style>