// Absolute data errors, which can not be disputed

function wheelErrors(wheel) {

	var errorText='';
	
	var errors=false;
	
	if (wheel.A<0 || wheel.B<0 || wheel.C_orig<=0 || wheel.D_orig<=0) {
		errorText+="<p>There are missing or incorrect hub dimensions.</p>";
		errors=true;
	}
	else if (wheel.asym<0) {
		errorText+="<p>The rim asym value cannot be negative. Please see the <a href=\"help-rim.html\">rim help guide</a> which describes how this value is used.</p>"
		errors=true;
	}
	else if (wheel.C<=0 || wheel.D<=0) {
		errorText+="<p>The rim asym offset is too large for the hub flange dimensions.</p>";
		errors=true;
	}


	
	if (wheel.hubType=='sp' && (isNaN(wheel.offsetLeft) || isNaN(wheel.offsetRight))) {
		errorText+="<p>One of the spoke hole offsets is missing, if there is no offset then enter 0 (zero).</p>";
		errors=true;
	}
	
	if (wheel.erd==0) {
		errorText+="<p>Rim diameter (the ERD) is missing.</p>";
		errors=true;
	}
	else if ( (wheel.erd<=wheel.A) || (wheel.erd<=wheel.B) ) {
		errorText+="<p>The rim diameter is smaller than one of the hub flanges.</p>";
		errors=true;
	}
	
	
	if (errors)
		dispResult("Calculator error","<h1>Problem</h1>\n"+errorText)

	return errors;
}

//Strange numbers, which are very unusual but there is a chance they might be right...

function wheelWarnings(wheel) {
	var warnings=false, msg='';
	
	if ((wheel.C_orig==wheel.D_orig) && wheel.asym>0) {
		msg+='<p>Asym rims are not used on hubs with identical flange distances.</p>'; 
		warnings=true;
	}
	
	if (wheel.hubType=='sp' && wheel.crossLeft==0 && wheel.offsetLeft>0) {
		msg+="<p>Left spoke hole offset for radial lacing is normally zero.</p>";
		warnings=true;
	}


	if (wheel.hubType=='sp' && wheel.crossRight==0 && wheel.offsetRight>0) {
		msg+="<p>Right spoke hole offset for radial lacing is normally zero.</p>";
		warnings=true;
	}
	
	if (warnings)
		msg='<h1 style="color:#f00;">Warning</h1>'+msg;
		
	return warnings ? msg : '';
}
