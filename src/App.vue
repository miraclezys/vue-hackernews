<template>
  <div id="app">
    <header class="header">
      <nav class="header-nav">
        <a href="/"><img class="logo" src="./assets/logo-48.png" alt="logo"></a>
        <router-link to="/top">Top</router-link>
        <router-link to="/new">New</router-link>
        <router-link to="/show">Show</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
        <a class="user" href="https://github.com/miraclezys">Built with Miraclezys</a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #f60;

  .header-nav {
    margin: 0 auto;
    padding: 15px 0;
    max-width: 800px;

    a {
      display: inline-block;
      margin-right: 1.8em;
      line-height: 24px;
      color: #fff;
      opacity: 0.8;
      font-weight: 300;
      text-decoration: none;
      transition: all .3s;
    }

    .logo {
      height: 24px;
      vertical-align: middle;
    }

    .user {
      float: right;
      opacity: 1;
    }

    .router-link-active {
      opacity: 1;
    }
  }
}
</style>
