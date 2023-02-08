<template>
	<view class="content">
		<navbar></navbar>
		<tabbar></tabbar>
		
		<view class="my-footer">
			<button @click="getUserList" type="default">获取数据</button>
			
			<u-button @click="getUniCloud" text="云函数获取数据" type="primary"></u-button>
			<u-icon name="photo"></u-icon>
		</view>
		<view>
			<span v-for="(item,index) in lists">
				{{ item.name }}
				{{item}}
			</span>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				title: 'Hello',
				lists:[]
			}
		},
		
		onLoad() {

		},
		methods: {
			getUserList(){
				let self = this;
				// uniCloud.callFunction({
				// 	name:"get_user_list",
				// 	success: (res) => {
				// 		console.log('成功',res);
				// 		self.lists = res.result.data;
				// 	},
				// 	fail: (err) => {
				// 		console.log('失败',err);
				// 	}
				// })
				
				this.$http({
					url:"http://wm.dddingjiu.com/api/index"
				}).then((res) => {
					
					let categories = res.data.categories;
					var newArr = categories.map( (item, index) => {
						return item.category
					})
					console.log('newArr',newArr);
					self.lists = newArr;
				})
			},
			getUniCloud(){
				let self = this;
				this.$cloudHttp({
					name:"get_store_list",
					data:{}
				}).then((res) => {
					console.log('getUniCloud',res);
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
