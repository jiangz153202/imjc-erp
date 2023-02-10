<template>
	<view class="navbar-wrap">
		<view class="navbar" :class="mode" v-if="mode === 'search'">
			<view class="statsbarView" :style="{ height : statusbarheight + 'px' }"></view>
			<view class="navbar-search" :style="{ height : bar_height +'px', 'width' : windowWidth + 'px'}">
				<view class="navbar-box" :style="{ '--height': box_height + 'px'}">
					<view class="navbar-box_icon"></view>
					<view class="navbar-box_text">帝皇宴，汪家窖</view>
				</view>
			</view>
		</view>
		<view class="navbar" :class="mode" v-if="mode === 'navite'">
			<view class="statsbarView" :style="{ height : statusbarheight + 'px' }"></view>
			<view class="navbar-search" :style="{ height : bar_height +'px', 'width' : windowWidth + 'px'}">
				<view class="navbar-box" :style="{ '--height': box_height + 'px'}">
					<view class="native-back">
						<uni-icons type="arrow-left"></uni-icons>
					</view>
					<view class="native-title">
						我的标题
					</view>
					<view class="native-menus">
						<uni-icons type="menus"></uni-icons>
					</view>
				</view>
			</view>
			
		</view>
		<view :style="{ height:(bar_height + statusbarheight)+'px' }"></view>
	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:"search"
			}
		},
		data(){
			return{
				bar_height:45,
				statusbarheight:0,
				box_height:32,
				windowWidth:375
			}
		},
		created() {
			    let systemInfo = uni.getSystemInfoSync()
				this.statusbarheight = systemInfo.statusBarHeight;
				this.windowWidth = systemInfo.windowWidth;
				//console.log('systemInfo',systemInfo);
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
				let mp_wx = uni.getMenuButtonBoundingClientRect();
				this.bar_height = (mp_wx.bottom - this.statusbarheight) + (mp_wx.top - this.statusbarheight);
				this.box_height = mp_wx.height;
				this.windowWidth = mp_wx.left;
				//console.log('mp_wx',mp_wx);
			// #endif
		}
	}
</script>

<style lang="scss">
		
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		&.search{
			background-color: $imjc-color-red;
		}
		.navbar-search{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;
			.navbar-box{
				flex: 1;
				padding: 5px 10px;
				background-color:#fff;
				width: 100%;
				height: var(--height);
				border-radius: var(--height);
				box-sizing: border-box;
				display: flex;
				align-items: center;
				
				.navbar-box_icon{
					width: 10px;
					height:10px;
					border: 1px solid red;
					margin-right: 10px;
				}
				.navbar-box_text{
					font-size: 14px;
					color: #999;
				}
			}
		}
		
	}
</style>