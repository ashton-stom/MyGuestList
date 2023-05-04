<template>
    <form>
        <div class="inputsContainer">
            <label>Email</label>
            <input name='email' type="text" placeholder="email..." v-model="emailInput" />
            <label>Tickets</label>
            <input name='tickets' type="number" v-model="ticketsInput" />
        </div>
        <Button class="submit" :onclick="this.onSubmit">{{ isLoading ? 'Loading...' : 'Submit' }}</Button>
    </form>
</template>

<style>
form {
    width: 100%;
    text-align: center;
    color: white;
    font-weight: 600;
}

.inputsContainer {
    width: 90%;
    margin: 0 auto;
}

input {
    margin: 0px 4px;
}

.submit {
    margin: 32px auto 16px auto;
}

.submit:hover {
    cursor: pointer;
    background-color: #f5f5f5;
}
</style>

<script>
import Button from './Button.vue';

export default {
    data() {
        return {
            emailInput: this.email,
            ticketsInput: this.tickets
        }
    },

    components: {
        Button
    },

    props: {
        updateGuest: Function,
        email: String,
        tickets: Number,
        guest: Object,
        isLoading: Boolean
    },

    methods: {
        onSubmit(e) {
            e.preventDefault();
            if(this.isLoading) return;
            this.updateGuest({ email: this.emailInput, tickets: parseInt(this.ticketsInput) });
        }
    }
}
</script>