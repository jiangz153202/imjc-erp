<template>
	<swiper class="swiper" @change="onchange" :current="current">
		<swiper-item class="list-swiper" v-for="(goodsListItems,index) in list" :key="index">
			<list-item :list="goodsListItems" ></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from '../list/list-item.vue'
	export default {
		name:"list-swiper",
		components:{
			listItem
		},
		props:{
			current:{
				type:Number,
				default:0
			},
			list:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			onchange(e){
				console.log(e);
				this.$emit("onchange",{
					data:e.target,
					current:e.detail.current
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		height: 100%;
		.list-swiper{
			height: 100%;
			overflow: hidden;	
			
		}
	}
</style>