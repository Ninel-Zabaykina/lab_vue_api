<template>
  <div class="form">
    <h1>Search films from Kinopoisk</h1>
    <input v-model="value"/>
    That's what you are looking for: {{ value }}
    <button @click="value = '123'">Find film</button>
    <FilmList />
    <FilmCard />
  </div>
</template>

<script>
import FilmList from "./FilmList";
import FilmCard from "./FilmCard";

export default {
  name: "Form",
  components: {
    FilmCard,
    FilmList
  },
  props: {},
  data() {
    return {
      value: ""
    }
  },
  computed: {},
  methods: {},
  watch:{},
  mounted() {
    console.log('I am OK')
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
