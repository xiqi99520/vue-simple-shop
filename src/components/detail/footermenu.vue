<template>
  <div class="clear btn-group">
      <div class="basic-menu pull-left clear">
        <div v-for="item in basicAll" class="one-third pull-left">
          <router-link :to="{path: item.url}">
            <div class="icon" :style="'backgroundImage:url('+item.pic+')'"></div>
            <p>{{ item.title }}</p>
          </router-link>
        </div>
      </div>
      <div class="buy-menu pull-left clear">
        <div class="half btn-orange pull-left">加入购物车</div>
        <div class="half btn-red pull-left">立即购买</div>
      </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        basicAll: [
          {pic: require('../../assets/home.svg'), title: '店铺', url: '/'},
          {pic: require('../../assets/msg.svg'), title: '客服', url: '/detail'},
          {pic: require('../../assets/heart.svg'), title: '收藏', url: '/detail'},
        ]
      }
    }
  }
</script>

<style scoped>
  .basic-menu{
    width: 40%;
  }
  .basic-menu a{
    text-decoration: none;
    color: #999;
  }
  .buy-menu{
    width: 60%;
  }
  .one-third{
    width: 33.33%;
    padding: .5rem 0;
    font-size: .7rem;
    color: #999;
  }
  .half{
    width: 50%;
    color: #fff;
    font-size: .9rem;
  }
  .btn-orange{
    background-color: #ff9500;
    padding: .9rem 0;
  }
  .btn-red{
    background-color: #ff0036;
    padding: .9rem 0;
  }
  .btn-group{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    text-align: center;
  }
  .icon{
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto;
  }
</style>
