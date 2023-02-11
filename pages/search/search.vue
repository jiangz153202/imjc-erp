<template>
	<view class="home">
		<navbar mode="native" @change="change" :val="val"></navbar>
		<view class="lable-box" v-if="historyDataList.length > 0">
			<view class="lable-menus">
				<view class="lable-menus__tips">搜索记录</view>
				<view class="lable-menus__clear">清空</view>
			</view>
			<view class="lable-content">
				<view class="lable-content__item" v-for="(item,index) in historyDataList" :key="index">{{item.name}}</view>
			</view>
		</view>
		<button type="default" @click="search">新增搜索</button>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				//historyDataList:[]
				val:""
			}
		},
		computed:{
			...mapState(["historyDataList"])
		},
		methods: {
			search(){
				let self = this;
				this.val && this.$store.dispatch("set_history_list",{
					name:this.val
				})
				this.val = "";
			},
			change(val){
				console.log('输出变化',val);
				this.val = val;
			}
		}
	}
</script>

<style lang="scss">
	.home{
		height: 100%;
		.lable-box{
			display: flex;
			flex-direction: column;
			height: 100%;
			.lable-menus{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: $uni-spacing-row-base;
				&__tips{
					color: $uni-text-color;
					font-size: $uni-font-size-base;
				}
				&__clear{
					color: blue;
					font-size: $uni-font-size-sm;
				}
			}
			.lable-content{
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				padding: $uni-spacing-row-base;
				padding-top: 0px;
				&__item{
					padding: 3px 6px;
					border: 1px solid #666;
					border-radius: 4px;
					box-sizing: border-box;
					margin-right: 10px;
					margin-bottom: 10px;
					font-size: $uni-font-size-sm;
				}
			}
		}
	}
</style>
