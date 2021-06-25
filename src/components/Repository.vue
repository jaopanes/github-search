<template>
  <article class="repository">
    <h2 class="name-repository">{{ data.name }}</h2>
    <p class="description-repository">
      {{ data.description }}
    </p>
    <p class="stars-repository">
      <img src="../assets/icons/star.svg" />
      {{ data.stargazers_count }}
    </p>
  </article>
</template>

<script>
export default {
  name: "Repository",

  props: {
    data: {
      name: "",
      description: "",
      stargazers_count: "",
      created_at: "",
    },
  },
};
</script>

<style scoped>
.repository {
  float: left;
  width: 100%;
  margin-bottom: 36px;
}

.repository:last-child {
  margin-bottom: 0;
}

.repository .name-repository {
  font-weight: 300;
  font-size: 36px;
}

.repository .description-repository {
  font-weight: 300;
  font-size: 24px;
  color: #757575;
}

.repository .stars-repository {
  margin-top: 7px;
  font-weight: 300;
  font-size: 20px;
  color: #757575;
  display: flex;
  align-items: center;
}

.repository .stars-repository img {
  margin-right: 10px;
}
</style>