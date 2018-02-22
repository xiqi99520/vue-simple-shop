<template>
	<div>
		<div class="guess-title">
			<span class="guess-icon" :style="{backgroundImage:'url('+icon+')'}"></span>{{ sectitle }}
			<span class="desc">实时推荐最适合你的宝贝</span>
			<div class="cont-bg clear">
				<div v-for="item in products" class="half-width">
					<div class="products-pic" :style="{backgroundImage: 'url('+ item.src +')'}"></div>
					<p class="products-title">{{ item.title }}</p>
					<div class="prize">
						￥{{ item.prize }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				sectitle: '猜你喜欢',
				icon: require('../assets/icon_like.png'),
				products: [
					{src: require('../assets/product1.jpg'),title: '[为你推荐]特价铁架立式穿衣镜/全身镜/试衣镜/落地更衣镜子/浴室镜/挂墙镜', prize: '30.0'},
					{src: require('../assets/product2.jpg'),title: '[为你推荐]特价铁架立式穿衣镜/全身镜/试衣镜/落地更衣镜子/浴室镜/挂墙镜', prize: '30.0'},
					{src: require('../assets/product3.jpg'),title: '[为你推荐]特价铁架立式穿衣镜/全身镜/试衣镜/落地更衣镜子/浴室镜/挂墙镜', prize: '30.0'},
					{src: require('../assets/product4.jpg'),title: '[为你推荐]特价铁架立式穿衣镜/全身镜/试衣镜/落地更衣镜子/浴室镜/挂墙镜', prize: '30.0'},
				]
			}
		}
	}
</script>

<style scoped>
	.half-width{
		width: 50%;
		float: left;
		background-color: #ffffff;
		margin-bottom: 0.4rem;
	}
	.guess-title{
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: bold;
	}
	.cont-bg{
		background-color: #eeeeee;
		padding-top: 1.2rem;
	}
	.guess-icon{
		display: inline-block;
		width: 1.2rem;
		height: 1.2rem;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		position: relative;
		top: 0.25rem;
		margin-right: 0.3rem;
	}
	.prize{
		text-align: left;
		color: rgb(255, 80, 0);
		padding-left: 0.4rem;
	}
	.products-pic{
		width: 100%;
		height: 12rem;
		float: left;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-bottom: 0.4rem;
	}
	.products-title{
		font-weight: normal;
		text-align: left;
		line-height: 1rem;
		color: rgb(102, 102, 102);
		margin-bottom: 0;
		padding: 0 0.4rem 0rem 0.4rem;
		font-size: 0.8rem;
	}
	.desc{
		display: block;
		height: 1rem;
		background-color: #eee;
		font-weight: normal;
		color: rgb(120, 120, 120);
		line-height: .6rem;
    	font-size: 0.7rem;
	}
</style>