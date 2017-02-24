<template>
	<div class="list">
		<ul class="list-ul">
			<li class="list-li" v-for="list in result">
				<span class="list-span title">{{list.nickName}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		name: 'list',
		props:{
			result:{
				default:[]
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.list {
		ul.list-ul {
			list-style: none;
			width: 100%;
			height: auto;
			margin: 0;
			padding: 0;
			margin-bottom: 10px;
			li.list-li {
				display: block;
				span.list-span {
					display: block;
					border-bottom: 1px solid #dcdcdc;
					&.title {
						font-size: 16px;
						line-height: 30px;
						color: #333;
					}
					&.des {
						font-size: 14px;
						color: #666;
						line-height: 25px;
					}
				}
			}
		}
	}
</style>