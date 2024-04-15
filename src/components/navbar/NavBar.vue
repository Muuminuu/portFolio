<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/todolist">ToDoList</RouterLink>
                <RouterLink to="/randomquotegenerator">RandomQuoteGenerator</RouterLink>
                <RouterLink to="/mycalculator">Calculator</RouterLink>
                <RouterLink to="/accordion">Accordion</RouterLink>
                <RouterLink to="/formvalidation">FormValidation</RouterLink>
                <RouterLink to="/progresssteps">ProgressSteps</RouterLink>
                <RouterLink to="/dadjokes">DadJokes</RouterLink>
                <RouterLink to="/githubusersearch">GitHubUserSearch</RouterLink>
                <RouterLink to="/wikiclone">WikiClone</RouterLink>
            </nav>
        </div>
  </header>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  header {
  line-height: 1.5;
  max-height: 100vh;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  
} */
</style>