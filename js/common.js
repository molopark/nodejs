$(document).ready(function(){
	$(document).on("change", "#chkAll", function(){
		var chkallyn = $("#chkAll").prop('checked');
		
		if(chkallyn){
			$("input:checkbox[name=chkList]").prop('checked',true);
		} else {
			$("input:checkbox[name=chkList]").prop('checked',false);
		}
	});

	$(document).on("change", "input:checkbox[name=chkList]", function(){
		var chkListcnt = $("input:checkbox[name=chkList]").length;
		var chkListcheckcnt = $("input:checkbox[name=chkList]:checked").length;

		if(chkListcnt == chkListcheckcnt){
			$("#chkAll").prop('checked',true);
		} else {
			$("#chkAll").prop('checked',false);
		}
	});
});
