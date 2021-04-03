<template>
	<view class="content">
		<u-search placeholder="搜索" :show-action="false" margin="20rpx" @click="toSearch()" :disabled="true" class="bar">
		</u-search>
		<view class="work-list" v-for="(item,key) in dataList" :key='key'>
			<view class="work-item" @click="toWork(item.id)">
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
					<u-tag v-for="(item1,key1) in item.tag" :text="item1" :key='key1' type="info" size="mini" />
				</view>
				<view class="item4">
					<view class="hr">
						<view class="recru-img">
							<u-avatar size='40'></u-avatar>
						</view>
						<view class="recru-name">{{item.hrName}}</view>
						<view class="recru-id">{{item.hrPost}}</view>
					</view>
					<view class="addr">{{item.addr[1]+' '+item.addr[2]}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import workData from '@/common/work.data.js'
	export default {
		data() {
			return {
				dataList: workData,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				userInfo:{}
			}
		},
		onLoad() {
		},
		methods: {
			scroll() {
				this.old.scrollTop = e.detail.scrollTop
			},
			toSearch() {
				this.$u.route('/pages/search/search');
			},
			toWork(e) {
				this.$u.route('/pages/work/work', {
					id: e
				})
			}
		}
	}
</script>

<style>
	.bar {
		padding: 40rpx;
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
		font-size: 40rpx;
		font-weight: 500;
	}

	.item-money {
		font-size: 36rpx;
	}
</style>
