<template>
  <div class="popup" v-show="ishide">
      <transition name="opacity">
        <div class="trade" v-show="isshow"></div>
      </transition>

      <transition name="slideup">
        <div class="choice" v-show="isshow">
            <div class="header">
              <div class="pruduct-pic">
                <img :src="smallAll[0]" alt="">
              </div>
              <div class="basic-info">
                <p class="prize">￥{{ prize }}</p>
                <p>请选择：{{ strAttr }}</p>
              </div>
              <div class="close" :style="'backgroundImage:url('+iconClose+')'" @click="close"></div>
            </div>
            <div class="cont">
              <ul class="list-wrap">
                <li>
                  <h2 id="">机身颜色</h2>
                  <div class="items">
                    <a v-for="(item,index) in colorAll" href="javascript:void(0)" :data-image="smallAll[index+1]" :class="[index === curChoice?'checked':'']" @click="colorToggle(index)">{{ item }}</a>
                  </div>
                </li>
                <li>
                  <h2>网络类型</h2>
                  <div class="items">
                    <a role="radio" href="javascript:void(0)" :class="[isChoiceType?'checked':'']" @click="typeToggle()">无需合约版</a>
                  </div>
                </li>
                <li>
                  <h2>存储容量</h2>
                  <div class="items">
                    <a v-for="(item,index) in toggleAll" role="radio" href="javascript:void(0)" :class="[index === curCapacity?'checked':'']" @click="capacityToggle(index)">{{ item }}</a>
                  </div>
                </li>
                <li name="num">
                  <div class="number-line">
                    <label for="number">购买数量</label>
                    <span class="J_limitTxt limit-txt"></span>
                    <div class="number">
                      <button class="decrease disabled pull-left" @click="subtract">-</button> <input class="pull-left" id="number" type="number" :value="buynum"> <button class="increase pull-left" @click="add">+</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="footer">
              <a class="ok" role="button" @click="sure">确定</a>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
  import { mapState,mapMutations,mapActions } from 'vuex'
  import axios from 'axios'
  export default{
    data(){
      return {
        prize: '7188',
        choiced: '',
        attrAll: ['机身颜色','网络类型','存储容量'],
        colorAll: ['银色','金色','深空灰色'],
        smallAll: [
          require('../../assets/popup1.jpg'),
          require('../../assets/popup2.jpg'),
          require('../../assets/popup3.jpg'),
          require('../../assets/popup4.jpg')
        ],
        toggleAll: ['64GB','256GB'],
        iconClose: require('../../assets/btnclose.svg'),
        isChoiceType: false,
        curChoice: null,
        curCapacity: null
      }
    },
    computed: {
      ...mapState(['isshow','ishide','buynum']),
      strAttr(){
        console.log(1)
        return this.attrAll.toString()
      }
    },
    methods:{
      ...mapMutations(['subtract','add']),
      ...mapActions(['close']),
      colorToggle(index){
        this.curChoice = index;
        this.attrAll[0] = this.colorAll[index];
      },
      typeToggle(){
        this.isChoiceType = !this.isChoiceType
      },
      capacityToggle(index){
        this.curCapacity = index;
      },
      sure(){
        let _this = this;
        axios.get('/static/basic.json').then(function(res){
          if(res){
            _this.close();
            _this.$router.push('success')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .popup{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 12;
  }
  .trade{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    left: 0;
    top: 0;
    z-index: 18;
    opacity: 1;
  }
  .choice{
    min-height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    background-color: #fff;
    z-index: 28;
  }
  .pruduct-pic{
    width: 100px;
    height: 100px;
    position: absolute;
    top: -28px;
    left: 10px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,.1);
    padding: 1px;
    background-color: #fff;
  }
  .pruduct-pic img{
    width: 100%;
  }
  .basic-info{
    padding: 10px 0 10px 126px;
    position: relative;
    color: #051b28;
    font-size: 13px;
    line-height: 18px;
    padding-right: 20px;
  }
  .basic-info .prize{
    font-family: arial;
    font-size: 16px;
    color: #FF0036;
  }
  .close{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 8px;
    right: 6px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .cont{
    padding: 0 15px 10px;
    position: absolute;
    bottom: 48px;
    top: 93px;
    left: 0;
    right: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list-wrap li{
    display: block;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: 10px;
  }
  .list-wrap h2{
    color: #666;
    font-size: 13px;
    font-weight: 400;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .list-wrap .items a{
    position: relative;
    display: inline-block;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    margin: 0 8px 8px 0;
    color: #555;
    text-decoration: none;
  }
  .list-wrap .items .checked {
      border-color: #FF0036;
      background-color: #FF0036;
      color: #fff;
  }
  .number-line {
      padding-bottom: 10px;
      padding-top: 10px;
      line-height: 36px;
  }
  .number-line label {
      color: #666;
      font-size: 13px;
      font-weight: 400;
  }
  .number-line .limit-txt {
      color: #666;
      font-size: 12px;
  }
  .number-line .number {
      height: 36px;
      width: 100px;
      border-radius: 3px;
      float: right;
  }
  .number-line .number .disabled {
      color: #cfcfcf;
  }
  .number-line .number .decrease {
      border-right: 1px solid #fff;
  }
  .number-line .number button {
      border: none;
      outline: 0;
      line-height: 32px;
      height: 34px;
      width: 30px;
      font-size: 24px;
      border: 1px solid #f5f5f5;
      background-color: #f5f5f5;
  }
  .number-line .number input[type=number] {
    line-height: 32px;
    height: 34px;
    width: 36px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    margin: 0;
  }
  .list-wrap li[name=num] {
    padding-bottom: 0;
  }
  .footer .ok{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    font-size: 15px;
    line-height: 50px;
    color: #fff;
    background-color: #FF0036;
    text-align: center;
  }
  .opacity-enter-active {
    animation-name: changeShow;
    animation-duration: .5s;
  }
  .opacity-leave-active {
    animation-name: changeHide;
    animation-duration: .5s;
  }
  @keyframes changeShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes changeHide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .slideup-enter-active {
    animation-name: slide-up;
    animation-duration: .5s;
  }
  .slideup-leave-active {
    animation-name: slide-out;
    animation-duration: .5s;
  }
  @keyframes slide-up {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
</style>
