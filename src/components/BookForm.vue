<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          v-model="newBook.title"
          id="title"
          required
        />
      </div>
      <div>
        <label for="author">Author</label>
        <input
          type="text"
          v-model="newBook.author"
          id="author"
          required
        />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          v-model="newBook.description"
          id="description"
          required
        ></textarea>
      </div>
      <button type="submit">Add Book</button>
    </form>

    <div v-if="newBook.title || newBook.author || newBook.description">
      <h3>Preview:</h3>
      <p><strong>Title:</strong> {{ newBook.title || ' ' }}</p>
      <p><strong>Author:</strong> {{ newBook.author || ' ' }}</p>
      <p><strong>Description:</strong> {{ newBook.description || ' ' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-book', this.newBook);
      this.newBook = { title: '', author: '', description: '' };
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

form {
  width: 100%;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #388E3C;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus, textarea:focus {
  border-color: #4CAF50;
}
</style>
