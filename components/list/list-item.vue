<template>
	<view class="home-item">
		<list class="list-swiper__item" v-if="list.length > 0">
			<list-card :item="goods" v-for="(goods,idx) in list" :key="idx"></list-card>
		</list>
		<view class="list-swiper__empty" v-else>暂无数据</view>
		
	</view>
</template>

<script>
	export default {
		name:"list-item",
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.home-item{
		height: 100%;
		.list-swiper__item{
			height: 100%;
		}
		.list-swiper__empty{
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
		}
	}
	
</style>