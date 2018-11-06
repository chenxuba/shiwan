<template>
	<div class="swiper">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in banner" :key="index">
					<img :src="item.banner_url" />
				</div>
			</div>
			<!-- 分页 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import Swiper from 'swiper'
	export default {
		data(){
			return{
				banner:[{
					banner_url:require('./img/banner1.jpg')
				},{
					banner_url:require('./img/banner2.jpg')
				},{
					banner_url:require('./img/banner3.jpg')
				},{
					banner_url:require('./img/banner4.jpg')
				}]
			}
		},
		mounted() {
			// 轮播图
			new Swiper('.swiper-container', {
				loop: true, //无限轮播
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 3000, //轮播时间
					disableOnInteraction: false, //用户操作后是否停止自动切换
				}
			})
		}
	}
	
</script>

<style scoped>
	.swiper-container img {
		width: 100%;
	}
</style>