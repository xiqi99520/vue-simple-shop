<template>
  <div class="detail-bg">
    <router-link to="/">
      <div class="goback">&lt;</div>
    </router-link>
    <detail-slide></detail-slide>
    <div class="title-area">
      <p class="product-name">{{ productName }}</p>
      <div class="highlight">
        <p class="product-prize">￥{{ productPrize }}</p>
        <p class="buy-desc">{{ stagingDesc }}</p>
      </div>
      <div class="clear transport">
        <p class="pull-left">快递：{{ courier }}</p>
        <p class="pull-right">{{ city }}</p>
      </div>
    </div>
    <div class="protection">正品保证 - 极速退款 - 七天退换</div>
    <div class="sendto">配送至：南山区</div>
    <div class="segmentation">
      -----详情-----
    </div>
    <div class="desc-pic">
      <img v-for="item in descAll" :src="item" alt="">
    </div>
    <footer-menu></footer-menu>
    <popup></popup>
  </div>
</template>

<script>
  import detailSlide from './detail/detailslide'
  import footerMenu from './detail/footermenu'
  import popup from './detail/popup'
  import store from '../store/index'
  export default {
    data(){
      return {
        productName: 'Apple/苹果 iphone8',
        productPrize: '5888-7188',
        stagingDesc: '商品最高可享12期免息',
        courier: '10.0',
        city: '上海',
        descAll: [
          require('../assets/detail_first.png'),
          require('../assets/detail_second.png')
        ]
      }
    },
    store,
    components: {
      detailSlide,
      footerMenu,
      popup
    }
  }
</script>

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
    z-index: 11;
  }
  .detail-bg{
    background-color: #eeeeee;
  }
  .title-area{
    padding: 0.8rem 0.5rem;
    background-color: #fff;
  }
  .product-name{
    font-size: 0.7rem;
    color: #051B28;
    margin-bottom: 1.2rem;
  }
  .highlight{
    color: #FF0036;
  }
  .product-prize{
    font-size: 1.2rem;
  }
  .buy-desc{
    font-size: 0.7rem;
    margin-bottom: 0.8rem;
  }
  .transport{
    font-size: 0.7rem;
    color: #999;
  }
  .protection,.sendto{
    background-color: #fff;
    margin-top: 0.6rem;
    padding: 0.8rem 0.5rem;
    font-size: 0.6rem;
  }
  .segmentation{
    text-align: center;
    font-size: .6rem;
    color: #999;
    padding: 0.8rem 0;
  }
  .desc-pic{
    padding-bottom: 60px;
  }
  .desc-pic img{
    width: 100%;
  }
</style>

