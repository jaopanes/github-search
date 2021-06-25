<template>
  <div class="container">
    <h1 class="title-app">Github <span>Search</span></h1>

    <div class="error-search" v-show="showError">
      Ops! Este usuário não foi encontrado. Tente outro usuário.
    </div>

    <div class="based-input">
      <input type="text" v-model="inputSearch" @change="search" />
      <button type="submit"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      inputSearch: "",
      showError: false,
    };
  },
  methods: {
    search: async function () {
      axios
        .get(`https://api.github.com/users/${this.inputSearch}`)
        .then(() => {
          this.showError = false;
          this.$router.push({
            path: `/resultado/${this.inputSearch}`,
          });
        })
        .catch(() => {
          this.showError = true;
        });
    },
  },
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

.error-search {
  width: 700px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #dd3636;
  margin: 20px 0;
  padding: 0 20px;
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
  font-family: "Rubik", sans-serif;
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
  font-weight: 300;
  color: #757575;
  font-size: 18px;
  font-weight: 300;
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