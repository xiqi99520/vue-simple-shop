<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArr" v-show="index===mark" :key="index">
          <a href="#">
            <img class="swipe-img" :src='img'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item, index) in imgArr" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swipe',
    data () {
      return {
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
        imgArr: [
          require('../../assets/1.jpg'),
          require('../../assets/2.jpg'),
          require('../../assets/3.jpg'),
          require('../../assets/4.jpg')
        ]
      }
    },
    methods: {
      autoPlay () {
        this.mark++;
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      },
      stop () {
        clearInterval(this.timer)
      },
      move () {
        this.timer = setInterval(this.autoPlay, 2500)
      }
    },
    created () {
      this.play()
    }
  }
</script>

<style scoped>
  .slide{position: relative;}
  .swipe-img{
      width: 100%;
  }
  .slideshow ul{
    position: relative;
    width: 100%;
    height: 7rem;
    overflow: hidden;
  }
  .slideshow li{
    position: absolute;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .bullet{
    width: 4rem;
    position: absolute;
    left: 50%;
    bottom: .2rem;
    transform: translateX(-50%);
    z-index: 10;
  }
  .bullet span{
    display: inline-block;
    width: .45rem;
    height: .45rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 0.4rem;
  }
  .bullet .active{
    background-color: #ff5501;
  }
</style>
