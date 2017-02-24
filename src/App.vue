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

	import axios from 'axios'

	export default {
		name: 'app',
		data() {
			return {
				currentpage: 1,
				rows: 5,
				total: 0,
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
				axios.get('/api/seaCircle/searchNearbyUser.do', {
					params: {
						userId: 10,
						page: _that.currentpage,
						rows: _that.rows
					}
				})
				.then(function(res) {
					_that.total = res.data.data.userCount
					_that.result = res.data.data.userList
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