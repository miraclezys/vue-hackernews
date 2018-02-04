<template>
  <a>{{ $route.params.id }}</a>
</template>

<script>
export default {
  name: 'TestWorld',
  data () {
    // eslint-disable-next-line
    // console.log(this, this.$router, this.$route, $route.params.id);
    return {
      msg: ''
    }
  },
  created: function () {
    console.log(this, this.$router, this.$route, this.$route.params.id)
  }
}
</script>
