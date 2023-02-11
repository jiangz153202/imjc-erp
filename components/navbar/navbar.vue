<template>
	<view class="navbar-wrap" >
		<view class="navbar" :class="mode" v-if="mode === 'search'" @click.stop="open">
			<view class="statsbarView" :style="{ height : statusbarheight + 'px' }"></view>
			<view class="navbar-search" :style="{ height : bar_height +'px', 'width' : windowWidth + 'px'}">
				<view class="navbar-box" :style="{ '--height': box_height + 'px'}">
					<view class="navbar-box_icon"></view>
					<view class="navbar-box_text">
						<input type="text" class="native-title" v-model="inputVal" @input="inputChange" placeholder="请输入想要搜索的内容" />
					</view>
				</view>
			</view>
		</view>
		<view class="navbar" :class="mode" v-if="mode === 'native'">
			<view class="statsbarView" :style="{ height : statusbarheight + 'px' }"></view>
			<view class="navbar-search" :style="{ height : bar_height +'px', 'width' : windowWidth + 'px'}">
				<view class="native-back">
					<uni-icons type="arrow-left" size="24px" color="#fff" @click.native.stop="back"></uni-icons>
				</view>
				<view class="navbar-box" :style="{ '--height': box_height + 'px'}">
					<view class="native-title">
						<input type="text" class="native-title" v-model="inputVal" @input="inputChange"  placeholder="请输入想要搜索的内容" />
					</view>
				</view>
				<view class="native-menus">
					<uni-icons type="menus"></uni-icons>
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
			},
			val:{
				type:String,
				default:""
			}
		},
		watch:{
			val(newVal){
				console.log('valupdate',newVal);
				this.inputVal = newVal;
			}
		},
		data(){
			return{
				bar_height:45,
				statusbarheight:0,
				box_height:32,
				windowWidth:375,
				inputVal:""
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
		},
		methods:{
			open(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			back(){
				console.log('navigateBack');
				uni.navigateBack()
			},
			inputChange(){
				this.$emit('change',this.inputVal)
			},
			navbarOpen(){
				console.log('navbarOpen');
			}
		}
	}
</script>

<style lang="scss">
		
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		
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
		&.search{
			background-color: $imjc-color-red;
		}
		&.native{
			background-color: $imjc-color-red;
			.navbar-search{
				.native-back{
					margin-right: $uni-spacing-row-base;
				}
				.navbar-box{
					border-radius: $uni-spacing-col-sm;	
				}
			}
			
		}
		
	}
</style>