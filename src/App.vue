<template>
    <div>
      <keep-alive>
        <router-view></router-view>
     </keep-alive>
    </div>
</template>

<style>
*{margin: 0;padding: 0;}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  list-style: none;
}
a {
  color: #42b983;
}
a:link,
a:active,
a:visited,
a:hover {
    background: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin: 0;
  padding: 0;
}
.clear{
  overflow: hidden;
}
.pull-left{
  float: left;
}
.pull-right{
  float: right;
}
</style>
