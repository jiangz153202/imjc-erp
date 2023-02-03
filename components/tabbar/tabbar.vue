<template>
	<view>
		<view v-for="(item,index) in 10" :key="index">
			内容{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>