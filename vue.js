let myApp = Vue.createApp({
    data() {
        return {
            userInput: '#title',
            userKey: '',
            myTodo: '',
            todoArray: []
        };
    },
    computed: {
        inputTextFieldStyle() {
            return {
                hideInputTextField: this.userKey === 'Enter',
            };
        },
    },
    methods: {
        setKeys(event) {
            if (event.key === "Enter") {
                this.userKey = "Enter";
                console.log(this.userKey);
            }
        },
        setTodo() {
            this.todoArray.push(this.myTodo);
        },
        removeItem(index) {
            this.todoArray.splice(index, 1);
        }
    },




});
myApp.mount('#myVueTemp');