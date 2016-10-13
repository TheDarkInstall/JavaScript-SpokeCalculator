function wheelData(hub) {

	var data=document.wheel,
	comps=parent.comp.document.components,
	A,
	B,
	C,
	D,
	C_orig,
	D_orig,		
	erd,
	asym,
	hf,
	ht,
	crossLeft,
	crossRight,
	offsetLeft,
	offsetRight,
	leftRadial,
	rightRadial,
	hubType,
	config;


	asym=getNumber(data.asym.value,10); // function defined below
	

	A=  getNumber(data.a.value,10); 
	B=  getNumber(data.b.value,10);
	C=  getNumber(data.c.value,10);
	D=  getNumber(data.d.value,10);
	erd=getNumber(data.r.value,10);
	

	hf=Number(data.holesFrom.value); // convert to a number otherwise hf="32"; hf+=4 becomes "324"

	if (hub=="normal")
		ht=Number(data.holesTo.value);
	else
		ht=hf

	if (hf>ht) { // switch around
		tmp=hf
		hf=ht
		ht=tmp
	}

	if (hub=="sp") {
		offsetLeft =parseFloat(data.offsetLeft.value,10); // Blank entry returns NaN. error check below for NaN
		offsetRight=parseFloat(data.offsetRight.value,10);
		crossLeft=Number(data.crossLeft.value);
		crossRight=Number(data.crossRight.value);
	}
	else {
		offsetLeft=0;
		offsetRight=0;
		crossLeft=0;
		crossRight=0;
	}





	// Hub configuration


	parent.comp.typeColours(); // Set the wheel type colours

	for (var i=0; i<comps.fr.length; i++)
		if(comps.fr[i].checked)
			break
	frontRear=comps.fr[i].value // Set to either Front or Rear


	
	for (var i=0; i<comps.hubType.length; i++)
		if(comps.hubType[i].checked)
			break
		hubType=comps.hubType[i].value // Set to either disc or normal


	 config=hubType+" "+frontRear;
	
	
	 if (config=="disc Front") {
	      leftRadial=false
	      rightRadial=true
	 }
	 else if (config=="normal Front") {
	      leftRadial=true
	      rightRadial=true
	 }
	 else if (config=="disc Rear") {
	      leftRadial=false
	      rightRadial=false
	 }
	 else if (config=="normal Rear") {
	      leftRadial=true
	      rightRadial=false
	 }
	 else {
	      alert("Program error, unexpected condition in common.js, please tell Roger!")
	 }	
	
	
	// Asymetric processing, modify C and D

	// Save original values for display

	C_orig=C
	D_orig=D

	if (C>D) {
	    C=fixFloat(C-asym)
	    D=fixFloat(D+asym)
	}
	else {
	    C=fixFloat(C+asym)
	    D=fixFloat(D-asym)
	}



	hubName=comps.hub.value
	if (hubName == "")
		hubName='Give your hub a name'

	rimName=comps.rim.value
	if (rimName== "")
		rimName='Give your rim a name'

	
	return {
		A:A,
		B:B,
		C:C,
		D:D,
		C_orig:C_orig,
		D_orig:D_orig,		
		erd:erd,
		asym:asym,
		hf:hf,
		ht:ht,
		crossLeft:crossLeft,
		crossRight:crossRight,
		offsetLeft:offsetLeft,
		offsetRight:offsetRight,
		leftRadial:leftRadial,
		rightRadial:rightRadial,
		config:config,
		rimName:rimName,
		hubName:hubName,
		hubType:hub	// sp or normal
	};

}
