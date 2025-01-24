<template>
  <div>
    <BookDetails :book="book" />
  </div>
</template>

<script>
import BookDetails from '../components/BookDetails.vue';
import { useBookStore } from '../stores/books';

export default {
  components: {
    BookDetails
  },
  computed: {
    book() {
      const store = useBookStore();
      return store.getBookById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
h2 {
  color: #4CAF50;
}
</style>
