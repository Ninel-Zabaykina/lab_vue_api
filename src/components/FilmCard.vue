<template>
 <div class="FilmCard">
   <p>About film</p>
   <p class="film_name">Name: {{film_data.name}}</p>
   <p class="film_release">Release: {{film_data.release}}</p>
   <p class="film_genre">Genre: {{film_data.genre}}</p>
   <p class="film_director">Director: {{film_data.director}}</p>
   <p class="film_starring">Starring: {{film_data.starring}}</p>
   <button class="add_to_favorite_btn">Add to favorite</button>
 </div>
</template>

<script>
export default {
name: "Film Cart",
  props: {
  film_data: {
    type: Object,
    default() {
      return {}
    }
  }
  }
}
</script>

<style scoped>
  .FilmCard {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>