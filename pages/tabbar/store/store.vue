<template>
	<view>
		<u-popup v-model="show" mode="top" length="60%">
			<view>出淤泥而不染，濯清涟而不妖</view>
		</u-popup>
		<button type="default" @click="bindClickChange">按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"门店管理入口页",
				show: false,
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
						//self.list = res.result.data;
					},
					fail: (err) => {
						console.log('失败',err);
					}
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			bindClickChange:function(){
				console.log('bindClickChange',this.show);
				this.show = !this.show;
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
