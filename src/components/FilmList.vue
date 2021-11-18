<template>
  <div class='FilmList'>
    <h1>List of films</h1>
    <FilmCard
        v-for="film in this.$store.state.films"
        :key="film.id"
        v-bind:film_data="film"
        @addToFavorite="addToFavorite"
    />
  </div>
</template>

<script>
import FilmCard from './FilmCard';
import {mapActions, mapGetters} from 'vuex';

export default {
name: "FilmList",
components: {
  FilmCard
},
  props: {},
  data() {
  return {}
  },
  computed: {
  ...mapGetters([
      'FILMS',
  ]),
  },
  methods: {
  ...mapActions([
      'GET_FILMS_FROM_API',
      'ADD_TO_FAVORITE'
  ]),
    addToFavorite(data) {
      this.addToFavorite(data)
    }
  },
  mounted() {
  this.GET_FILMS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arrived')
      }
    })
  }
}
</script>

<style scoped>
  .FilmList {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
     }

</style>