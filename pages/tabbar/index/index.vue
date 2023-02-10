<template>
	<view class="home">
		<navbar ></navbar>
		<tabbar :list="lists" :is-show="status" :current="currentId" @onTabbarChange="onTabbarChange"
			@onChangeIsShow="onChangeIsShow"></tabbar>
		<view class="home-list__swiper">
			<list-swiper @onchange="onchange" :current="currentId" :list="goodsList"></list-swiper>
		</view>

	</view>
</template>

<script>
	export default {

		data() {
			return {
				title: 'Hello',
				lists: [],
				goodsList:[],
				currentId: 0,
				status: false

			}
		},

		onLoad() {

			this.getUserList();

		},
		methods: {
			getUserList() {
				let self = this;
				this.$http({
					url: "http://wm.dddingjiu.com/api/index"
				}).then((res) => {

					let categories = res.data.categories;
					let tabList = categories.map((item, index) => {
						return item.category
					})
					let goodsList = categories.map((item, index) => {
						return item.goodsList
					})
					console.log('goodsList', goodsList);
					self.lists = tabList;
					self.goodsList = goodsList
				}).catch((err) => {
					console.error('http err');
					self.lists = new Array(9).fill({name:"模拟标题"})
					self.goodsList = new Array(self.lists.length).fill([]);
				})
			},
			getUniCloud() {
				let self = this;
				this.$cloudHttp({
					name: "get_store_list",
					data: {}
				}).then((res) => {
					console.log('getUniCloud', res);
					let tabs = new Array(10).fill('汪家窖');

					this.lists = tabs.concat(res.data)
				})
			},

			onTabbarChange({ index }) {
				console.log('传递上来的值', index);
				this.currentId = index;

			},
			onChangeIsShow(event) {
				console.log('传递上来的值', event);
				this.status = event.status;

			},
			onchange({data,current}){
				console.log('swiper传递上来的',current);
				this.currentId = current;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		//border: 1px solid red;
		width: 100%;
		.home-list__swiper{
			flex:1;
			box-sizing: border-box;
			//border: 1px solid burlywood;
		}
	}
	

</style>
