import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      { id: 1, title: 'JavaScript', author: 'David Flanagan', description: 'Preporučena literatura.' },
      { id: 2, title: 'The Tangled Web', author: 'Michal Zalewski', description: 'Preporučena literatura.' }
    ]
  }),
  actions: {
    addBook(book) {
      const newBook = { ...book, id: Date.now() };
      this.books.push(newBook);
    },
    getBookById(id) {
      return this.books.find(book => book.id === parseInt(id));
    }
  }
});
