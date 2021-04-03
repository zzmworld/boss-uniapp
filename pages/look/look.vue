<template>
	<view class="content">
		<view class="left">
			<scroll-view scroll-y="true" class="left-scroll" style="height: 100%;">
				<view class="left-item" :class="indexActive==index?'index-active':''" v-for="(item,index) in lookList"
					:key="index" @click="switchTitle(item.name)" :data-current="index">
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="right">
			<scroll-view scroll-y="true" class="right-scroll" style="height: 100%;">
				<view class="part" v-for="(item1,index1) in indexTitle.title" :key="index1">
					<text>{{indexTitle.name}}{{index1+1+' '+item1.titleName}}</text>
					<view class="partName" v-for="(item2,index2) in item1.part" :key="index2"
						@click="toContent(item2.content)">
						<text>{{index1+1+' '}}{{index2+1+' '}}{{item2.partName}}</text>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>
<script>
	import lookData from "@/common/look.data.js"
	export default {
		data() {
			return {
				lookList: lookData,
				indexTitle: {},
				indexActive: 0
			}
		},
		onLoad() {
			this.indexTitle = this.lookList[0]
		},
		methods: {
			toContent(e) {
				this.$u.route('/pages/look/content', {
					content: e
				})
			},
			switchTitle(e) {
				this.indexTitle = this.lookList.find(obj => obj.name == e)
				this.indexActive = this.lookList.indexOf(this.indexTitle)
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
	}

	.content {
		display: flex;
		height: 100%;
	}

	.left {
		flex: 2;
		flex-direction: column;
		text-align: center;
		overflow: scroll;
	}

	.left-item {
		padding: 20rpx;
		margin: 20rpx;
	}

	.right {
		flex: 8;
		flex-direction: column;
		overflow: scroll;
	}

	.right-scroll {
		background-color: #F7F7F7;

	}

	.part {
		background-color: #FFFFFF;
		margin: 20rpx;
		padding: 20rpx 60rpx;
		border-radius: 20rpx;
	}

	.part>text {
		font-size: 40rpx;
		font-weight: 400;
	}

	.part>view {
		margin: 20rpx 0;
	}

	.index-active {
		background-color: #70c2fb;
		color: #FFFFFF;
		font-size: 32rpx;
	}
</style>
