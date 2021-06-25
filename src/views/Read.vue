<template>
  <div class="container">
    <header>
      <h1 class="title-app">Github <span>Search</span></h1>

      <div class="based-input">
        <input
          type="text"
          v-model="inputSearch"
          @change="search(inputSearch)"
        />
        <div class="error" v-show="showError">Ops! Usuário não encontrado</div>
        <button type="submit"></button>
      </div>
    </header>

    <main>
      <aside>
        <div
          class="picture-user"
          :style="{ backgroundImage: `url(${responseUser.avatar_url})` }"
        ></div>
        <h2 class="name-user">{{ responseUser.name }}</h2>
        <h4 class="nick-user">{{ responseUser.login }}</h4>

        <div class="infos">
          <p>
            <img src="../assets/icons/organization.svg" />
            {{ responseUser.company }}
          </p>
          <p>
            <img src="../assets/icons/location.svg" />
            {{ responseUser.location }}
          </p>
          <p>
            <img src="../assets/icons/star.svg" /> {{ responseUser.starred }}
          </p>
          <p>
            <img src="../assets/icons/repository.svg" />
            {{ responseUser.public_repos }}
          </p>
          <p>
            <img src="../assets/icons/followers.svg" />
            {{ responseUser.followers }}
          </p>
        </div>
      </aside>

      <section>
        <Repository
          v-for="repository in orderRepositorys(responseUser.repositorys)"
          :key="repository.created_at"
          :data="repository"
        />
      </section>
    </main>
  </div>
</template>
<script>
import Repository from "../components/Repository";
import axios from "axios";

export default {
  name: "Read",
  components: {
    Repository,
  },
  data() {
    return {
      username: this.$route.params.user,
      inputSearch: "",
      showError: false,

      responseUser: {
        login: "",
        name: "",
        followers: "",
        avatar_url: "",
        company: "",
        public_repos: "",
        locatioN: "",
        starred: "",

        repositorys: [
          {
            name: "",
            description: "",
            stargazers_count: "",
            created_at: "",
          },
        ],
      },
    };
  },

  methods: {
    orderRepositorys: function (array) {
      array.sort(function (a, b) {
        if (a.stargazers_count < b.stargazers_count) return 1;
        if (a.stargazers_count > b.stargazers_count) return -1;
        return 0;
      });

      return array;
    },

    search: async function (username) {
      axios
        .all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/starred`),
          axios.get(`https://api.github.com/users/${username}/repos`),
        ])
        .then(
          axios.spread((resUser, resStars, resRepositorys) => {
            this.responseUser = resUser.data;
            this.responseUser.starred = resStars.data.length;
            this.responseUser.repositorys = resRepositorys.data;
          }),
          (this.showError = false),
          this.$router.push({
            path: `/resultado/${username}`,
          })
        )
        .catch(() => {
          this.showError = true;
        });
    },
  },

  mounted: function () {
    this.search(this.username);
  },
};
</script>
<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
}

header .title-app {
  font-size: 42px;
}

main {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

section,
aside {
  width: 100%;
  position: relative;
}

aside .picture-user {
  width: 310px;
  height: 310px;
  margin-bottom: 9px;
  background-size: cover;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1);
}

aside .name-user {
  font-weight: 300;
  font-size: 36px;
}

aside .nick-user {
  font-weight: 300;
  font-size: 24px;
  color: #757575;
}

aside .infos {
  margin-top: 52px;
}

aside .infos p {
  font-size: 20px;
  font-weight: 300;
  color: #757575;
  display: flex;
  align-items: center;
  margin-bottom: 11px;
}

aside .infos p:last-child {
  margin-bottom: 0;
}

aside .infos p img {
  margin-right: 10px;
}

.error {
  position: absolute;
  margin-top: -30px;
}
</style>
