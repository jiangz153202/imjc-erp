<template>
	<view class="content">
		<navbar></navbar>
		<tabbar :isClass="tabbarStatus" :isRows="rows" :list="lists"></tabbar>
		
		<!-- <view class="my-footer">
			<button @click="getUserList" type="default">获取数据</button>
			
			<button @click="getUniCloud" type="primary">云函数获取数据</button>
			<button @click="onTabbarChange">更改tabbar</button>
		</view> -->
		<view>
			<view v-for="(item,index) in 10">
				
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				title: 'Hello',
				lists:[],
				tabbarStatus:false,
				rows:5
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
					console.log('res',res);
				})
			},
			getUniCloud(){
				let self = this;
				this.$cloudHttp({
					name:"get_store_list",
					data:{}
				}).then((res) => {
					console.log('getUniCloud',res);
					let tabs = new Array(10).fill('汪家窖');
					
					this.lists = tabs.concat(res.data)
				})
			},
			onTabbarChange(){
				this.tabbarStatus = !this.tabbarStatus;
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
