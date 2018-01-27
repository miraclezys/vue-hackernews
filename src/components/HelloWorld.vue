<template>
  <div class="hello">
    <user-item :user="userData"></user-item>
  </div>
</template>

<script>
import UsreItem from './UserItem'

export default {
  name: 'HelloWorld',
  components: {
    'user-item': UsreItem
  },
  data () {
    return {
      userData: {
        name: 'ac29',
        create: '2198 days',
        karma: 1268
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
