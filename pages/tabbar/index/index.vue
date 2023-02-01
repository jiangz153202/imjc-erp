<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="my-footer">
			<button @click="getUserList">获取数据</button>
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
				uniCloud.callFunction({
					name:"get_user_list",
					success: (res) => {
						console.log('成功',res);
						self.lists = res.result.data;
					},
					fail: (err) => {
						console.log('失败',err);
					}
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
