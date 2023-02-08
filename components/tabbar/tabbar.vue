<template>
	<view class="tab">
		<view class="tab-content">
			<scroll-view scroll-x scroll-with-animation="true">
				<view class="tab-scroll_box" :class="{'grid':isShow }" :style="{ '--rows':rows}">
					<view class="tabbar-item" :class="{ 'active' : current == index   }" @click="changeTabbar(index)" v-for="(item,index) in list" :key="index">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="tab-icons" >
			<uni-icons type="gear" size="26" color="#666" @click="changeIsShow"></uni-icons>
			
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
			},
			current:{
				type:Number,
				default(){
					return 0
				}
			},
			rows:{
				type:Number,
				default(){
					return 4
				}
			},
			isShow:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			changeTabbar(index){
				console.log('onTabbarChange',index);
				this.$emit('onTabbarChange',{
					index:index
				});
			},
			changeIsShow(){
				console.log('changeIsShow',!this.isShow);
				this.$emit('onChangeIsShow',{
					status:!this.isShow
				});
				
			}
		}
	}
</script>

<style lang="scss">
	
	.tab{
		display: flex;
		width: 100%;
		border-bottom: 1px solid #ebebeb;
		box-sizing: border-box;
		background: #fff;
		.tab-content{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll_box{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				padding: 10px 0;
				box-sizing: border-box;
				.tabbar-item{
					flex-shrink: 0;
					box-sizing: border-box;
					color: #333;
					font-size: 14px;
					transition: all 0.3s; 
					padding: 0 15px;
				}
				.tabbar-item.active{
					color:$imjc-color-red;
				}
			}
			.tab-scroll_box.grid{
				flex-wrap: wrap;
				.tabbar-item{
					text-align: center;
					width: calc(100% / var(--rows));
					padding: 10px 0 0 0;
				}
			}
		}
		.tab-icons{
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 45px;
			max-height: 40px;
		}
	}

</style>