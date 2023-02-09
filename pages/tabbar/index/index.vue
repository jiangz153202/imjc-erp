<template>
	<view class="home">
		<navbar></navbar>
		<tabbar :list="lists" :is-show="status" :current="currentId" @onTabbarChange="onTabbarChange" @onChangeIsShow="onChangeIsShow"></tabbar>
		<list-scroll>
			<view class="list-buttons">
				<button @click="getUserList" type="default">获取数据</button>
				<!-- <u-button type="primary"  @click="getUniCloud" size="mini" text="确定"></u-button> -->
			</view>
			<view class="list-card">
				<view v-for="(item,index) in 100" class="card">
					<view class="list-card_image">
						<image src="../../../static/logo.png" class="img" mode="aspectFill"></image>
					</view>
					<view class="list-card_content">
						<view class="card-content_name">
							{{ item }}的东西一二三四
						</view>
					</view>
				</view>
			</view>
		</list-scroll>
		
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

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		//border: 1px solid red;
		width: 100%;
	}
	.list-buttons{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.list-card{
		display: flex;
		flex-direction: column;
		.card{
			display: flex;
			padding: 10px;
			border-radius: 10px;
			box-sizing: border-box;
			.list-card_image{
				width: 80px;
				height: 80px;
				overflow: hidden;
				.img{
					width: 100%;
					display: block;
				}
			}
			.list-card_content{
				flex: 1;
				box-sizing: border-box;
				border:1px solid red;
				.card-content_name{
					font-size: 14px;
					color:#333;
				}
				
			}
		}
	}

</style>
