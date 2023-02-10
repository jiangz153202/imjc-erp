<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.scroll{
		display: flex;
		overflow: hidden;
		flex: 1;
		.list-scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>