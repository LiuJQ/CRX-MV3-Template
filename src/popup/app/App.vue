<template>
  <div class="main_app">
    <h1>LinkFox Popup</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "app",
});
</script>

<style lang="scss" scoped>
.main_app {
  width: 250px;
  min-height: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
</style>
