<template>
  <div>
    <h1>Books</h1>
    <p>Total Books: {{ totalBooks }}</p> 
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from '../components/BookList.vue';
import { useBookStore } from '../stores/books';

export default {
  components: {
    BookList
  },
  data() {
    return {
      books: []
    };
  },
  computed: {
    totalBooks() {
      return this.books.length;
    }
  },
  mounted() {
    setTimeout(() => {
      const store = useBookStore();
      this.books = store.books;
    }, 1000);
  }
};
</script>

<style scoped>
h1 {
  color: #333;
}
p {
  font-size: 16px;
  color: #777;
}
</style>
