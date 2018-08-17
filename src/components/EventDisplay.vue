<template>
	<div>
		<table class="table table-hover">
		    <tbody>
		      <tr v-for="(item, index) in restList">
		        <td>{{ index }}</td>
		        <td>{{ item }}</td>
		      </tr>
		    </tbody>
		</table>
	</div>
</template>

<script>
	export default{

		props:['restList']

	}
</script>