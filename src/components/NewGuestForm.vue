<template>
  <form @submit.prevent="onSubmit">
    <div class="inputsContainer">
      <label>Email</label>
      <input
        required
        name="email"
        type="email"
        placeholder="email..."
        v-model="emailText"
        minLength="1"
      />
      <label>Tickets</label>
      <input name="tickets" type="number" v-model="tickets" min="1" />
    </div>
    <button class="submit">{{ isLoading ? "Loading..." : "Submit" }}</button>
  </form>
</template>

<style>
form {
  width: 100%;
  text-align: center;
  color: black;
  font-weight: 600;
}

.inputsContainer {
  width: 80%;
  margin: 0 auto;
}

input {
  margin: 0px 4px;
}

.submit {
  margin: 32px auto 16px auto;
  font-weight: 600;
  background-color: #649de7;
  border: 3px solid transparent;
  border-radius: 4px;
  border-image: linear-gradient(
    -45deg,
    #09bfc5,
    #6762d2 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978
  );
  border-image-slice: 1;
  mask-image: linear-gradient(
    -45deg,
    #09bfc5,
    #6762d2 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978
  );
  padding: 8px;
  box-shadow: 0px 0px 8px 1px black;
}

.submit:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
</style>

<script>
export default {
  data: () => {
    return {
      emailText: "",
      tickets: 0,
    };
  },

  props: {
    addGuest: Function,
    isLoading: Boolean,
  },

  methods: {
    onSubmit() {
      this.addGuest(this.emailText, this.tickets);
    },
  },
};
</script>
