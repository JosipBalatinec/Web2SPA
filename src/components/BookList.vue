<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <router-link :to="'/book/' + book.id">{{ book.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    books: Array
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>
