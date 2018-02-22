<template>
	<div class="fix-nav clear">
		<div v-for="item in navAll">
			<div class="pull-left quarter">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				navAll: ['首页','物流','购物车','我的淘宝']
			}
		}
	}
</script>

<style scoped>
	.fix-nav{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background-color: #fff;
		border-top: 1px solid #E7E7E7;
    	border-bottom: 1px solid #F8F8F8;
	}
	.quarter{
		width: 25%;
		font-size: 0.7rem;
		text-align: center;
		margin: 0.7rem 0;
		color: #5D656B;
	}
</style>