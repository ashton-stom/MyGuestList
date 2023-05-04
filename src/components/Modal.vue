<template>
  <div class="modal">
    <div class="modalContent">
      <h4 class="closeX" @click="this.onClose">X</h4>
      <h3 class="title">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #00000080;
  backdrop-filter: blur(2px);
}

.modalContent {
  display: flex;
  flex-flow: row wrap;
  width: 40%;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: #302b63;
  border: 2px solid transparent;
  border-radius: 3px;
  border-image: linear-gradient(
    -45deg,
    #6e6e6e,
    #808080 13%,
    #8f8f8f 25%,
    #9c9c9c 38%,
    #acacac 50%,
    #bebebe 62%,
    #d4d4d4 75%,
    #ebebeb 87%,
    #f0f0f0
  );
  border-image-slice: 1;
  padding: 8px;
  box-shadow: 0px 0px 8px 1px black;
}

.title {
  width: 100%;
  color: white;
  padding: 0px;
  margin: 32px auto 32px auto;
}

.closeX {
  text-align: right;
  position: absolute;
  font-size: 20px;
  top: 4px;
  right: 4px;
  margin: 0px;
}
</style>

<script>
export default {
  props: {
    onClose: Function,
    title: String,
  },
};
</script>
