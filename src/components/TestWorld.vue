<template>
  <a>{{ msg }}</a>
</template>

<script>
export default {
  name: 'TestWorld',
  data () {
    // eslint-disable-next-line
    console.log(this, this.$router, this.$route);
    return {
      msg: this.$route.fullPath
    }
  }
}
</script>
