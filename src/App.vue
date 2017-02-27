<template>
	<div id="app">
		<list :result="result"></list>
		<pageination :pageSize="rows"
			:total-num = false
			:hep = true
			:btn-type="1"
			:allpage="allpage"
			@current-change="handleCurrentChange"
		>
		</pageination>
	</div>
</template>

<script>
	import pageination from './components/page'
	import list from './components/list'

	export default {
		name: 'app',
		data() {
			return {
				currentpage: 1,
				rows: 5,
				limit:10,
				total: 500,
				result: []
			}
		},
		created() {
       this.getList()
		},
		computed: {
			allpage() {
				return Math.ceil(this.total / this.rows)
			}
		},
		methods: {
			handleCurrentChange(val){
				this.currentpage = val
			},
			getList() {
				var _that = this
				this.$http.get('/topics', {
					params: {
						page: _that.currentpage,
						limit: _that.limit
					}
				})
				.then(function(res) {

					_that.$set(_that.$data,'result',res.data.data)
				})
				.catch(function(error) {
					console.log(error)
				})
			}
		},
		watch:{
			currentpage(val){
				this.getList()
			}
		},
		components: {
			list,
			pageination
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
