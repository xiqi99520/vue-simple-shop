<template>
    <div class="bg-color">
        <div class="search-area">
            <input type="text" placeholder="寻找宝贝店铺">
        </div>
        <div class="swipe-area">
            <swipe></swipe>
        </div>
        <indexnav></indexnav>
        <buy-area></buy-area>
        <like></like>
        <public-nav></public-nav>
    </div>
</template>

<script>
import swipe from './swipe'
import indexnav from './indexnav'
import buyArea from './buyarea'
import like from './like'
import publicNav from './publicnav'
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    swipe,
    indexnav,
    buyArea,
    like,
    publicNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color{
  background-color: #eeeeee;
}
.search-area{
    background-color: #FE5400;
    padding: .4rem 0 .4rem 0;
}
.search-area input{
    display: block;
    width: 90%;
    height: 1.6rem;
    box-sizing: border-box;
    background-color: #B52600;
    text-align: center;
    border-radius: 4px;
    margin: auto;
    border: 0;
}
.search-area input::-webkit-input-placeholder{
    color:#F0E0DC;
}
.search-area input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#F0E0DC;
}
.search-area input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#F0E0DC;
}
.search-area input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#F0E0DC;
}

</style>
