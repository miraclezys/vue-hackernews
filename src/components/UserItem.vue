<template>
  <div class="user-view">
    <h1>User&nbsp;:&nbsp;{{ user.name }}</h1>
    <ul>
      <li>Created:&nbsp;&nbsp;{{ user.create }} agos</li>
      <li>Karma:&nbsp;&nbsp;{{ user.karma }}</li>
    </ul>
    <div>
      <a :href="user.sumbit">submissions</a>&nbsp;|&nbsp;<a :href="user.comment">comments</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user']
}
</script>

<style lang="scss" scoped>
  .user-view {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2em 3em;
    max-width: 800px;
    background-color: #fff;
    font-size: 15px;

    h1 {
      margin: 0;
      font-size: 1.5em;
    }

    ul {
      margin: 15px 0;
      padding: 0;
      list-style-type: none;
    }

    a {
      text-decoration: underline;
    }
  }
</style>
