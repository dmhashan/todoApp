<template>
<div class="input-group mb-3">
	<input type="number" class="form-control" placeholder="Enter the key" @input="keyPressed">
	<div class="input-group-append">
		<button class="btn btn-outline-secondary" type="button">Add </button>
	</div>
</div>
</template>

<script>
	import axios from 'axios';

	export default{
		data(){
			return {
				newSet:[]
			}
		},

		methods:{
			keyPressed(event){
				var key = event.target.value;

				axios.get("https://jsonplaceholder.typicode.com/users/"+key+"/")
					.then(response=>{
						this.newSet = response.data; 
					})
					.catch(e=>{
						this.error.push(e)
					})
				console.log(this.newSet);
				this.$emit('newDataset',this.newSet);
			}
		}
	}
</script>