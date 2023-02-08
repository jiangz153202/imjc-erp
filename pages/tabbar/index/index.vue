<template>
	<view class="content">
		<navbar></navbar>
		<tabbar :list="lists" :is-show="status" :current="currentId" @onTabbarChange="onTabbarChange" @onChangeIsShow="onChangeIsShow"></tabbar>
		
		<view class="my-footer">
			<button @click="getUserList" type="default">获取数据</button>
			<u-button @click="getUniCloud" text="云函数获取数据" type="primary"></u-button>
		</view>
		<view>
			<span v-for="(item,index) in lists">
				{{ item.name }}
			</span>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				title: 'Hello',
				lists:[],
				currentId:0,
				status:false
			}
		},
		
		onLoad() {
			this.getUserList();
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
				}).catch((err)=>{
					console.error('http err');
					self.lists = [
						{
							name:'内容1'
						},
						{
							name:'内容2'
						},
						{
							name:'内容3'
						},
						{
							name:'内容4'
						},
						{
							name:'内容5'
						},
						{
							name:'内容6'
						},
						{
							name:'内容7'
						},
						{
							name:'内容8'
						},
						{
							name:'内容9'
						}
					]
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
			},
			onTabbarChange(event){
				console.log('传递上来的值',event.index);
				this.currentId = event.index;
				
			},
			onChangeIsShow(event){
				console.log('传递上来的值',event);
				this.status = event.status;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
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
