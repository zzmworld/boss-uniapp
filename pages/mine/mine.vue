<template>
	<view>
		<view>
			<u-avatar :src="userInfo.avatar"></u-avatar>
		</view>
		<view> {{userInfo.name}}</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					name: '',
					avatar: ''
				}
			}
		},
		onLoad() {
			this.getLogin()
		},
		methods: {
			getLogin: function(e) {
				let that = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 获取用户信息
						uni.getUserProfile({
							desc:'登录',
							success: function(infoRes) {
								that.userInfo.name = infoRes.userInfo.nickName
								that.userInfo.avatar = infoRes.userInfo.avatarUrl
								console.log(that.userInfo.name)
							}
						})
					}
				})
			}
		}
	}
</script>

<style></style>
