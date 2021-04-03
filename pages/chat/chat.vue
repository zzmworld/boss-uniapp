<template>
	<view class="content">
		<view class="up">
			<view class="left">
				<view class="job-name">{{item.jobName}}</view>
			</view>
			<view class="right">
				<view class="money">{{item.money}}</view>
				<view class="hr">{{item.hrName+' '+item.copName}}
				</view>
			</view>
		</view>
		<view class="scroll">
			<scroll-view scroll-y="true" height="100%" class="center">
				<view class="me" v-for="(item1,key) in chatList" :key=key>
				<view class="chat-left" v-if="item1.id==2">{{item1.message}}</view>
				<view class="chat-right" v-else-if="item1.id==1">{{item1.message}}</view>
				</view>
			</scroll-view>
		</view>
		<view class="input">
			<uni-easyinput placeholder="新信息" />
		</view>
	</view>
</template>

<script>
	import workData from '@/common/work.data.js'
	import chatData from '@/common/chat.data.js'
	export default {
		data() {
			return {
				dataList: workData,
				item: {},
				chatList: chatData
			}
		},
		onLoad(e) {
			this.item = this.dataList.find(obj=>obj.id==e.id)
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #F2F2F2;
	}

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.up {
		height: 200rpx;
		padding: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		background-color: #FFFFFF;
	}

	.job-name {
		font-size: 48rpx;
		font-weight: 500;
	}

	.money {
		text-align: end;
		font-size: 32rpx;
	}

	.hr {
		font-size: 32rpx;
	}

	.input {
		padding: 40rpx;
		height: 200rpx;
		width: 100%;
		background-color: #FFFFFF;
	}

	.scroll {
		flex: 1;
		overflow: scroll;
		padding: 20rpx;
	}
.me{
	display: flex;
}

	.me>view {
		padding: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		width: fit-content;
		max-width: 75%;
	}
	
	.chat-left{
		background-color: #FFFFFF
	}
	
	.chat-right{
		background-color: #4b95fe;
		color: #FFFFFF;
		margin-left: auto;
	}

	.center {
		height: 100%;
	}
</style>
