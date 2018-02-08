<template>
  <div class="banner">
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome',
      tip: 'UP TO 70% OFF'
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
.banner {
  width: 100%;
  height: 198px;
  background: url(../assets/1.png) no-repeat center center;
  background-size: 100% auto;
}
</style>
