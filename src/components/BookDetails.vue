<template>
  <div v-if="book">
    <h2>{{ book.title }}</h2>
    <p><strong>Author:</strong> {{ book.author }}</p>
    <p><strong>Description:</strong> {{ book.description }}</p>
  </div>
  <div v-else>
    <p>Book not found!</p>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>

<style scoped>
h2 {
  color: #4CAF50;
}
</style>
