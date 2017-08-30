<template>
	<div class="page">
		<ul class="page-ul">
			<li class="page-li" 
				v-if = "totalNum"
			>
				总共{{allpage}}页
			</li>
			<li class="page-li" 
				v-if="hep">{{hpBtn}}</li>
			<li class="page-li" :class="{disabled:currentPage==1}" @click="currentChange(currentPage,'pre')">
				{{preBtn}}
			</li>
			<li class="page-li" v-show="isPreShow">...</li>
			<li class="page-li" v-for="n in pages" :class="{active:n == currentPage}" @click="currentChange(n,'goto')">{{n}}</li>
			<li class="page-li" v-show="isNextShow">...</li>
			<li class="page-li" :class="{disabled:currentPage == allpage}" @click="currentChange(currentPage,'next')">
				{{nextBtn}}
			</li>
			<li class="page-li" 
				v-if="hep">{{epBtn}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					isPreShow: false,
					isNextShow: false,
					currentPage: 1
				}
			},
			props: {
				pageSize: {
					type: Number,
					default: 0
				},
				allpage: {
					type: Number,
					default: 0
				},
				totalNum:{
					type:Boolean,
					default:false
				},
				hep:{
					type:Boolean,
					default:false
				},
				btnType: {
					type: Number,
					default: 0
				}
			},
			computed: {
				preBtn() {
					return this.btnType == 0 ? '<' : '上一页'
				},
				nextBtn() {
					return this.btnType == 0 ? '>' : '下一页'
				},
				hpBtn() {
					return this.btnType == 0 ? '<<' : '首页'
				},
				epBtn() {
					return this.btnType == 0 ? '>>' : '尾页'
				},
				pages() {
					var pag = [];
					if(this.allpage <= this.pageSize) { //总页数小于要显示的页数
						this.isPreShow = false //省略号隐藏
						this.isNextShow = false //省略号隐藏
						var number = this.allpage
						while(number) {
							pag.unshift(number--)
						}
					} else { //总页数大于显示的页数
						this.isNextShow = true //尾部显示省略号
						if(this.currentPage <= Math.ceil(this.pageSize / 2)) { //判断前几个
							this.isPreShow = false
							var number = this.pageSize
							while(number) {
								pag.unshift(number--)
							}
						} else if(this.currentPage <= this.allpage - Math.ceil(this.pageSize / 2)) {
							//判断中间显示
							this.isPreShow = true
							var start = this.currentPage - Math.floor(this.pageSize / 2)
							var end = this.currentPage + Math.floor(this.pageSize / 2)
							this.isNextShow = true
							var number = start
							while(number <= end) {
								pag.push(number++)
							}
						} else { //判断最后几个
							this.isNextShow = false
							var number = this.allpage - this.pageSize
							while(number <= this.allpage) {
								pag.push(number++)
							}
						}
					}
					return pag
				}
			},
			methods: {
				currentChange(num, type) {
					if(type == 'pre') {
						if(this.currentPage == 1) return
						this.currentPage--
					} else if(type == 'goto') {
						if(this.currentPage == num) return
						this.currentPage = num
					} else if(type == 'next') {
						if(this.currentPage == this.allpage) return
						this.currentPage++
					}
					this.$emit('current-change', this.currentPage)
				}
			}
	}
</script>
<style lang="less" scoped="scoped">
	.page {
		width: auto;
		height: 30px;
		ul.page-ul {
			width: auto;
			list-style: none;
			position: relative;
			border-radius: 4px;
			height: 30px;
			font-size: 0;
			cursor: pointer;
			li.page-li {
				display: inline-block;
				vertical-align: middle;
				min-width: 30px;
				line-height: 30px;
				text-align: center;
				font-size: 14px;
				border-top: 1px solid #00A2EE;
				border-bottom: 1px solid #00A2EE;
				border-right: 1px solid #00A2EE;
				padding: 0 8px;
				box-sizing: border-box;
				&:first-child {
					border-left: 1px solid #00A2EE;
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
				}
				&:last-child {
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
				&.active {
					background: #00A2EE;
					color: #FFFFFF;
				}
				&.disabled {
					cursor: not-allowed;
					background: rgba(255,255,255,.5);
					color: #CCCCCC;
				}
			}
		}
	}
</style>
