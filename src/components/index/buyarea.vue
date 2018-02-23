<template>
	<div class="buy-banner clear">
		<div class="pull-left vertical-banner" :style="{backgroundImage: 'url(' + buymsgall1 + ')'}"></div>
		<div class="pull-left horizontal-banner clear">
			<div v-for="(item,index) in buymsgall" :class="['pull-left','half-width',index>1 ? 'last-buy' : '']" :style="{backgroundImage: 'url(' + buymsgall[index]+')'}"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				buymsgall1: require('../../assets/buy1.jpg'),
				buymsgall: [
					require('../../assets/buy2.jpg'),
					require('../../assets/buy3.jpg'),
					require('../../assets/buy4.jpg'),
					require('../../assets/buy5.jpg')
				]

			}
		}
	}
</script>

<style scoped>
	.half-width{
		box-sizing: border-box;
	    line-height: 0;
	    width: 50%;
	    height: 5rem;
	    background-size: contain;
	    background-position: 50% 50%;
	    background-repeat: no-repeat;
	    background-color: #fff;
	}
	.last-buy{
		height: 5.6rem;
	}
	.buy-banner{
		margin-top: 0.6rem;
		background-color: #fff;
	}
	.vertical-banner{
		width: 35%;
    	height: 10.6rem;
		background-size: contain;
	    background-position: center;
	    background-repeat: no-repeat;
	}
	.horizontal-banner{
		width: 65%;
	}
</style>
