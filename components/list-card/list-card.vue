<template>
	<view class="list-card" v-if="item !== undefined">
		<view class="card">
			<view class="list-card__image">
				<image :src="item.imgUrl" @error="imageErrorHander" class="img" mode="aspectFit"></image>
			</view>
			<view class="list-card__content">
				<view class="card-content__name u-line-">
					{{ item.name }}
				</view>
				<view class="card-content__price">
					<span class="ctx__price">{{item.price}}</span>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: "list-card",
		props:{
			item:{
				type:Object,
				default:undefined
			}
		},
		data() {
			return {

			};
		},
		methods:{
			imageErrorHander(){
				this.item.src = "/static/logo.png";
			}
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		flex-direction: column;
		padding: 10px;
		.card {
			display: flex;
			background-color: $uni-bg-color;
			border-radius: 4px;
			overflow: hidden;
			box-sizing: border-box;
			box-shadow: 1px 2px 7px 0px #f6f6f6;
			margin-top: 10px;
			&:first-child{
				margin-top: 0px;
			}
			.list-card__image {
				width: 80px;
				height: 80px;
				overflow: hidden;
				.img {
					width: 100%;
					height: 100%;
				}
			}

			.list-card__content {
				flex: 1;
				box-sizing: border-box;
				padding: 5px 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.card-content__name {
					font-size: 14px;
					color: #333;
				}
				.card-content__price{
					font-size: 14px;
					display: flex;
					flex-direction: row-reverse;
					.ctx__price{
						color: $imjc-color-red;
						&::before{
							content: "￥";
							font-size: 12px;
						}
					}
					
				}

			}
		}
	}
</style>
