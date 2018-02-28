<template>
	<div>
		<div class="logo">
			<router-link to="/">
				<img :src="logo">
			</router-link>
		</div>
		<div class="headerNav clear">
			<div class="menu pull-left">综合排序</div>
			<div class="menu pull-left">销量优先</div>
			<div class="menu pull-left">筛选</div>
		</div>
		<div class="product-list">
			<router-link to="/detail">
				<div class="product-info clear" v-for="item in listAll">
					<div class="product-pic"><img :src="item.src"></div>
					<div class="product-title">
						<h3 class="d-title">{{ item.title }}</h3>
						<p class="d-price">
							<em class="h">
								<span class="price-icon">¥</span><span class="font-num">{{ item.price }}</span>
							</em>
						</p>
						<div class="d-main">
							<p class="basic-style d-freight">免运费</p>
							<p class="basic-style d-num"><span class="font-num">{{ item.personNum }}</span>人付款</p>
							<p class="basic-style d-area">{{ item.place }}</p>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				logo: require('../assets/home.svg'),
				listAll: [
					{
						src: require('../assets/popup1.jpg'),
						title:'【到手价5888】Apple/苹果iPhone 8 Plus 64G全网通手机苹果8plus',
						price: 6688,
						personNum: 100,
						place: '上海'
					},
					{
						src: require('../assets/popup2.jpg'),
						title:'Apple/苹果iPhone X',
						price: 8888,
						personNum: 30,
						place: '深圳'
					},
					{
						src: require('../assets/popup3.jpg'),
						title:'oppo A73全新手机',
						price: 2288,
						personNum: 56,
						place: '福建'
					},
					{
						src: require('../assets/popup4.jpg'),
						title:'oppo R11s拍照2000万像素',
						price: 2988,
						personNum: 18,
						place: '美国'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.product-list a{
		text-decoration: none;
	}
	.logo{position: relative;height: 30px;text-align: center;border-bottom: solid 1px #ccc;}
	.logo img{
		width: 20px;
		height: 20px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -10px;
		margin-left: -10px;
	}
	.headerNav{
		background: #fff;
	    border-bottom: solid 1px #ccc;
	    width: 100%;
	    z-index: 100;
	    position: relative;
	}
	.headerNav .menu{
		width: 33.33%;
		color: #3d4245;
	    display: inline-block;
	    height: 39px;
	    font-size: 14px;
	    text-align: center;
	    line-height: 39px;
	    position: relative;
	}
	.product-info{
		padding: 12px 6px;
		display: -webkit-box;
		border-bottom: 1px solid #dbdbdb;
	}
	.product-info .product-pic{
		width: 100px;
		height: 100px;
		display: inline-block;
	    text-align: center;
	    overflow: hidden;
	    margin-right: 10px;
    	margin-left: 8px;
	}
	.product-info .product-pic img{
		width: 100%;
	}
	.product-title{
		margin: 4px 15px 6px 0;
    	-webkit-box-flex: 1;
	}
	.product-title .d-title{
		font-size: 14px;
    	height: 44px;
		line-height: 22px;
	    margin-bottom: 3px;
	    position: relative;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    word-break: break-all;
	    color: #4b566a;
	}
	.product-title .d-price{
		line-height: 24px;
    	color: #999;
	}
	.product-title .d-price .h{
		color: #eb5211;
		font-size: 16px;
	}
	.product-title .price-icon{
		font-style: normal;
	}
	.product-title .font-num {
	    font-family: avenir arial;
	    font-style: normal;
	}
	.product-title .d-main {
	    display: -webkit-box;
	    margin-top: -1px;
	    height: 20px;
	    overflow: hidden;
	}
	.product-title .d-main .basic-style{
	    font-size: 12px;
	    overflow: hidden;
	    line-height: 24px;
    	color: #999;
	}
	.product-title .d-num {
	    -webkit-box-flex: 1;
	    text-align: center;
	}
	.product-title .d-area {
	    text-align: right;
	}
</style>