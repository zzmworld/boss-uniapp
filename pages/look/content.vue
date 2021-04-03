<template>
	<view class="content">
		<view class="item">{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: ""
			}
		},
		onLoad(x) {
			this.item = x.content
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background-color: #F2F2F2;
		padding: 20rpx;
	}

	.item {
		background-color: #FFFFFF;
		padding: 20rpx;
		border-radius: 20rpx;
		height: 100%;
	}
</style>
