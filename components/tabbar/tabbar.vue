<template>
	<view class="tabbar">
		<view class="tabbar-item" v-for="(item,index) in list" :key="index">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
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
	.tabbar{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		.tabbar-item{
			padding: 0 15px;
		}
	}
</style>