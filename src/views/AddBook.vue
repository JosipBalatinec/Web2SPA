<template>
  <div>
    <h1>Add a Book</h1>
    <BookForm @add-book="addBook" />
  </div>
</template>

<script>
import BookForm from '../components/BookForm.vue';
import { useBookStore } from '../stores/books';

export default {
  components: {
    BookForm
  },
  methods: {
    addBook(book) {
      const store = useBookStore();
      store.addBook(book);

      this.$router.push('/');  
    }
  }
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
