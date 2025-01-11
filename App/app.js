import { createApp } from 'vue'

const MyNameApp = {
    data() {
        return {
            name: "Samuel",
            age: 28,
            input_name: ""
        }
    },
    methods: {
        SubmitEvent(e){
            e.preventDefault();

            console.log("SubmitEvent");

            this.name = this.input_name;

        }
    }
}

createApp(MyNameApp).mount('#app')
