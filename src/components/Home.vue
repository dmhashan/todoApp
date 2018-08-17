<template>
	<div>
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <app-addform @newDataset="results = $event"></app-addform>
	      </div>
	      <div class="modal-body">
	        <app-evtdis :restList="results"></app-evtdis>
	      </div>
	      <div class="modal-footer">
	        © /dmhashan
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
	import AddForm from './AddForm.vue';
	import EvntDis from './EventDisplay.vue';

	export default{
		data(){
			return{
				results:[]
			}
		},

		components:{
			'app-addform':AddForm,
			'app-evtdis':EvntDis
		}	
	}

</script>