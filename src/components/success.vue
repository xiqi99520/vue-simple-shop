<template>
  <div>
  	 <router-link to="/">
      <div class="goback">&lt;</div>
    </router-link>
     <h3>恭喜您！购买成功</h3>
  </div>
</template>

<style scoped>
  .goback{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    background: rgba(0,0,0,.4);
    color: #eee;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 999;
  }
  h3{
  	width: 100%;
    text-align: center;
    position: absolute;
    top: 25%;
  }
</style>
