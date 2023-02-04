<template>
	<view class="home">
		<navbar></navbar>
		<tabbar :isClass="tabbarStatus" :isRows="rows" :list="lists"></tabbar>
		
		<!-- <view class="my-footer">
			<button @click="getUserList" type="default">获取数据</button>
			
			<button @click="getUniCloud" type="primary">云函数获取数据</button>
			<button @click="onTabbarChange">更改tabbar</button>
		</view> -->
		<view class="scroll">
			<scroll-view scroll-y="true" class="scroll-view">
				<view>
					<view v-for="(item,index) in 100" class="">
						{{item}}
					</view>
				</view>
			</scroll-view>
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
			this.getUniCloud();
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

<style lang="scss">
	
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px solid rebeccapurple;
	}
	
	.scroll{
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		.scroll-view{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
