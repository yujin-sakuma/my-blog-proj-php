var sname="";
var aa=""
function imgselected(){
	var elements = document.getElementsByName("imgselect");
	var t=seljudge(elements);
	aa = elements[t].value;
	var b = elements[t].id;
	window.opener.form.imid.value=b;
	localStorage.setItem('useimgID', aa);
	window.close();
}
function newimagepage(){
	document.getElementById("modalwrap").style.display="inline-block";
	document.getElementById("upl").style.display="inline-block";
	document.getElementById("upd").style.display="none";
	
}
function eimagepage(){
	var elements = document.getElementsByName("imgselect");
	var t=seljudge(elements);
	console.log(t)
	if(t!="X"){
		var b = elements[t].id;
		ids="ALT-"+b;
		document.getElementById("modalwrap").style.display="inline-block";
		document.getElementById("upl").style.display="none";
		document.getElementById("upd").style.display="inline-block";
		document.getElementById("iminput").style.display="none";
		document.getElementById("Eimalt").value=document.getElementById(ids).innerHTML;
		document.getElementById("Eimgid").value=b;
	}
	
}
function seljudge(element){
	// 選択状態の値を取得
	for ( var i="", i=element.length; i--; ) {
		element[i].value;
		if ( element[i].checked ) {
			
			return i;
	
		}
	}
	return "X";

}