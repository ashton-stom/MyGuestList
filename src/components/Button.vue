<template>
  <button class="button" @click="this.onclick">
    <slot />
  </button>
</template>

<style>
.button {
  font-weight: 600;
  background-color: #649de7;
  border: 2px solid transparent;
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

.button:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    onclick: Function,
  },
};
</script>
