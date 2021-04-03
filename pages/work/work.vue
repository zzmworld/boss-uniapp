<template>
	<view class="content">
		<view class="work-item">
			<view class="item1">
				<view class="item-name">{{item.jobName}}</view>
				<view class="item-money">{{item.money}}</view>
			</view>
			<view class="item2">
				<view class="cop-name">{{item.copName}}</view>
				<view class="cop-size">{{item.copSize}}</view>
				<view class="cop-statu">{{item.copStatu}}</view>
			</view>
			<view class="item3">
				<u-tag v-for="(item1,key) in item.tag" :text="item1" :key='key' type="info" />
			</view>
			<view class="item4">
				<view class="hr">
					<view class="pic">
						<u-avatar size='40'></u-avatar>
					</view>
					<view class="recru-name">{{item.hrName}}</view>
					<view class="recru-id">{{item.hrPost}}</view>
				</view>
				<view class="addr">
					{{item.addr[1]+item.addr[2]}}
				</view>
			</view>
			<view class="item5">
				<view class="detail-title">职位详情</view>
				<view class="detail-content" v-for="(index,key) in item.detail" :key='key'>
					<view class="detail-item">{{index}}</view>
				</view>
			</view>
		</view>
		<view class="chat">
			<u-button @click="toChat(item.id)">在线沟通</u-button>
		</view>
	</view>
</template>

<script>
	import workData from '@/common/work.data.js'
	export default {
		data() {
			return {
				dataList: workData,
				item: {}
			}
		},
		onLoad(e) {
			this.item = this.dataList.find(obj=>obj.id==e.id)
		},
		methods: {
			toChat(e) {
				this.$u.route('pages/chat/chat', {
					id: e
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.item1,
	.item4 {
		justify-content: space-between;
	}

	.work-list {
		background-color: #f2f2f2;
		padding-bottom: 5rpx;
	}

	.work-item {
		padding: 20rpx;
		background-color: #ffffff;
	}

	.work-item>view {
		display: flex;
		padding: 10rpx;
	}

	.item2>view {
		padding-right: 20rpx;
	}

	.item3>* {
		margin-right: 10rpx;
	}

	.item4>view {
		display: flex;
	}

	.hr>view {
		padding-right: 10rpx;
	}

	.item-name {
		font-size: 50rpx;
		font-weight: 600;
	}

	.item-money {
		font-size: 36rpx;
	}

	.item5 {
		display: block !important;
	}

	.detail-title {
		font-size: 40rpx;
		font-weight: 500;
		margin-bottom: 20rpx;
	}

	.content {
		height: 100%;
	}

	/* .chat {
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	
	u-button{
		flex: 1;
	} */

	.chat {
		position: fixed;
		bottom: 50rpx;
		left: 50%;
		transform: translateX(-50%)
	}
</style>
