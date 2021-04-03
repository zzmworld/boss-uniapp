<template>
	<view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change">
		</u-tabs>
		<scroll-view scroll-y="true" >
			<view></view>
		</scroll-view>
	</view>
</template>
<script>
	import messageData from "@/common/work.data.js"
	export default {
		data() {
			return {
				list: [{
					name: '消息'
				}, {
					name: '看过我'
				}, {
					name: '新职位'
				}],
				current: 0,
				messageList:messageData
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>
