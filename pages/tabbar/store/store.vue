<template>
	<view class="content">
		<view class="uni-title uni-common-pl">地区选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前门店
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{ array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"门店管理入口页",
				array:[],
				index:0
			};
		},
		onLoad() {
			console.log('page onLoad');
			this.getStoreList();
		},
		methods:{
			getStoreList(){
				let self = this;
				uniCloud.callFunction({
					name:"get_store_list",
					success:(res) => {
						console.log(res);
						self.array = res.result.data;
					},
					fail: (err) => {
						console.log('失败',err);
					}
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		padding: 20px;
	}
</style>
