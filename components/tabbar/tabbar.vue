<template>
	<view class="page">
		<scroll-view scroll-x="true" class="scroll-view">
			<view class="tabbar" :class="{ active : isClass}" v:if="{ list.length > 0 }">
				<view class="tabbar-item" :style="{ '--rows': isRows}" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<!-- <uni-icons type="gear" size="24"></uni-icons> -->
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		props:{
			"isRows":{
				type:Number,
				default:4
			},
			"isClass":{
				type:Boolean,
				default(){
					return true
				}
			},
			list:{
				type:Array,
				default(){
					return [];
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
	.page{
		background-color: lightyellow;
		width: 100%;
		.scroll-view{
			
		}
		.tabbar{
			display: flex;
			justify-content: flex-start;
			.tabbar-item{
				color: #999;
				font-size: 12px;
				flex-shrink: 0;
				box-sizing: border-box;
				padding: $uni-spacing-row-base $uni-spacing-row-lg;
				&.actice{
					color: rebeccapurple;
				}
			}
		}
		.tabbar.active{
			flex-wrap: wrap;
			.tabbar-item{
				width: calc(100% / var(--rows));
				text-align: center;
			}
		}
		
	}
	
	
	
</style>