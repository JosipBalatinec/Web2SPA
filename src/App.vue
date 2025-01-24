<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/add-book">Add Book</router-link>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f4f7f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
}

header {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

header a {
  color: #4CAF50;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
}

header a:hover {
  color: #388E3C;
}
</style>
