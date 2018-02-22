<template>
  <div class="nav-area">
    <div class="nav-button" v-for="item in navArr">
      <div class="nav-icon" :style="{backgroundImage: 'url(' + item.img + ')' }"></div>
      <div class="nav-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'indexnav',
    data(){
      return {
        navArr: [
          {'img': require('../assets/icon1.png'),'title': '天猫'},
          {'img': require('../assets/icon2.png'),'title': '聚划算'},
          {'img': require('../assets/icon3.png'),'title': '天猫国际'},
          {'img': require('../assets/icon4.png'),'title': '外卖'},
          {'img': require('../assets/icon5.png'),'title': '天猫超市'},
          {'img': require('../assets/icon6.png'),'title': '充值中心'},
          {'img': require('../assets/icon7.png'),'title': '飞猪旅行'},
          {'img': require('../assets/icon8.png'),'title': '领金币'},
          {'img': require('../assets/icon9.png'),'title': '拍卖'},
          {'img': require('../assets/icon10.png'),'title': '分类'}
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-area{
    background-color: #fff;
    overflow: hidden;
    padding: 0.6rem;
  }
  .nav-title{
    font-size: 0.7rem;
    color: rgb(102, 102, 102);
  }
  .nav-button{
    width: 20%;
    float: left;
    text-align: center;
    margin-bottom: 0.6rem;
  }
  .nav-button .nav-icon{
      box-sizing: border-box;
      line-height: 0;
      margin-top: 0.313rem;
      height: 2.141rem;
      background-size: contain;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      margin-bottom: 0.2rem;
  }
</style>
