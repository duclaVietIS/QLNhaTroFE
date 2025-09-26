// Hằng số được khai báo bên ngoài component
const FILTER_CONSTANTS = {
    TYPES: {
        ALL: 'all',
        ACTIVE: 'active',
        INACTIVE: 'inactive'
    },
    LABELS: {
        ALL: 'All Users',
        ACTIVE: 'Active Only', 
        INACTIVE: 'Inactive Only'
    }
};

// Có thể freeze để đảm bảo không thay đổi
Object.freeze(FILTER_CONSTANTS);

export default {
    data() {
        return {
            message: 'Hello, Vue.js!',
            number: 42,
            nameItem: '',
            
            // Mảng các items với checkbox
            items:[
                {id:1, name:"Item 1", checked: false},
                {id:2, name:"Item 2", checked: false},
                {id:3, name:"Item 3", checked: false}
            ],
            checkedItems: [],
            
            // Mảng các loại khác
            fruits: ['Apple', 'Banana', 'Orange', 'Grape'],
            newFruit: '',
            
            // Mảng users
            users: [
                {id: 1, name: 'John Doe', age: 25, active: true},
                {id: 2, name: 'Jane Smith', age: 30, active: false},
                {id: 3, name: 'Bob Johnson', age: 28, active: true}
            ],
            newUser: {name: '', age: '', active: true},
            
            // Mảng số
            numbers: [10, 5, 8, 3, 15, 22],
            
            // Search/Filter
            searchText: '',
            filterType: 'all',
            
            // Hằng số cho filter types
            FILTER_TYPES: {
                ALL: 'all',
                ACTIVE: 'active', 
                INACTIVE: 'inactive'
            }
        }
    },
    methods: {
        // Basic methods
        incrementNumber() {
            this.number += 1;
        },
        callAPI() {
            console.log(this.number);
        },
        
        // Items management
        addItem() {
            if (this.nameItem.trim()) {
                const newItem = { 
                    id: this.items.length + 1, 
                    name: this.nameItem, 
                    checked: false 
                };
                this.items.push(newItem);
                this.message = `Added "${this.nameItem}" successfully!`;
                this.nameItem = ''; // Clear input
            }
        },
        
        removeItem(index) {
            this.items.splice(index, 1);
            this.message = 'Item removed!';
        },
        
        removeItemById(id) {
            const index = this.items.findIndex(item => item.id === id);
            if (index > -1) {
                this.items.splice(index, 1);
                this.message = `Item with ID ${id} removed!`;
            }
        },
        
        updateCheckedItems() {
            this.checkedItems = this.items.filter(item => item.checked);
            console.log('Checked items:', this.checkedItems);
        },
        
        clearAllItems() {
            this.items = [];
            this.message = 'All items cleared!';
        },
        
        // Fruits management
        addFruit() {
            if (this.newFruit.trim() && !this.fruits.includes(this.newFruit)) {
                this.fruits.push(this.newFruit);
                this.newFruit = '';
                this.message = 'Fruit added!';
            }
        },
        
        removeFruit(index) {
            this.fruits.splice(index, 1);
        },
        
        sortFruits() {
            this.fruits.sort();
        },
        
        shuffleFruits() {
            this.fruits = this.fruits.sort(() => Math.random() - 0.5);
        },
        
        // Users management
        addUser() {
            if (this.newUser.name && this.newUser.age) {
                const user = {
                    id: this.users.length + 1,
                    name: this.newUser.name,
                    age: parseInt(this.newUser.age),
                    active: this.newUser.active
                };
                this.users.push(user);
                this.newUser = {name: '', age: '', active: true};
                this.message = 'User added!';
            }
        },
        
        removeUser(id) {
            const index = this.users.findIndex(user => user.id === id);
            if (index > -1) {
                this.users.splice(index, 1);
                this.message = 'User removed!';
            }
        },
        
        toggleUserStatus(id) {
            const user = this.users.find(user => user.id === id);
            if (user) {
                user.active = !user.active;
            }
        },
        
        // Numbers array operations
        addRandomNumber() {
            this.numbers.push(Math.floor(Math.random() * 100));
        },
        
        sortNumbers() {
            this.numbers.sort((a, b) => a - b);
        },
        
        reverseNumbers() {
            this.numbers.reverse();
        },
        
        clearNumbers() {
            this.numbers = [];
        }
    },
    
    computed: {
        // Computed properties for arrays
        totalItems() {
            return this.items.length;
        },
        
        checkedItemsCount() {
            return this.items.filter(item => item.checked).length;
        },
        
        activeUsers() {
            return this.users.filter(user => user.active);
        },
        
        averageAge() {
            if (this.users.length === 0) return 0;
            const sum = this.users.reduce((total, user) => total + user.age, 0);
            return Math.round(sum / this.users.length);
        },
        
        totalNumbers() {
            return this.numbers.reduce((sum, num) => sum + num, 0);
        },
        
        maxNumber() {
            return this.numbers.length > 0 ? Math.max(...this.numbers) : 0;
        },
        
        filteredItems() {
            if (!this.searchText) return this.items;
            return this.items.filter(item => 
                item.name.toLowerCase().includes(this.searchText.toLowerCase())
            );
        },
        
        filteredUsers() {
            if (this.filterType === this.FILTER_TYPES.ALL) return this.users;
            if (this.filterType === this.FILTER_TYPES.ACTIVE) return this.users.filter(user => user.active);
            if (this.filterType === this.FILTER_TYPES.INACTIVE) return this.users.filter(user => !user.active);
            return this.users;
        },
        
        // Computed để truy cập hằng số từ template
        filterConstants() {
            return FILTER_CONSTANTS;
        }
    }
}