<template>
  <div class="container">
    <h1 class="title-app">Github <span>Search</span></h1>

    <div class="based-input">
      <input type="text" />
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.based-input {
  width: 700px;
  height: 50px;
  position: relative;
  display: flex;
}

.based-input input {
  border: 2px solid #000000;
  height: 100%;
  flex: 1;
  padding: 0 15px;
  font-size: 16px;
}

.based-input button {
  height: 100%;
  background-color: #000;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.based-input button::before {
  content: "";
  background-image: url("../assets/icons/search.svg");
  width: 24px;
  height: 24px;
}

.based-input button:hover {
  opacity: 0.8;
}
.based-input button:active {
  opacity: 0.6;
}
</style>
<style>
.title-app {
  font-size: 64px;
  font-family: "Roboto Mono";
}

.title-app span {
  font-style: italic;
  font-weight: 300;
}
</style>