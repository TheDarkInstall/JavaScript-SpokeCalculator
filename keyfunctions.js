//
// Main spoke calculation mathematics function.
//
function calcSpokes(h,f,r,holes,radialAllowed) {
	// h=hub dia
	// f=hub offset
	// r=rim erd

	h=h/2; // convert to radius for use in formula
	r=r/2;

	var spokes,sl,cross,bgcolor

	spokes=""
//Max 4 cross, as this is the usual limit for wheels...
	for (cross=0; cross<5; cross++)  {

		sector_angle=720/holes*Math.PI/180 // Single sector in radians.

		L_squared=r*r+h*h-2*r*h*Math.cos(sector_angle*cross) 
		L_actual=Math.sqrt(L_squared);

		entry_angle=Math.asin(h*Math.sin(sector_angle*cross)/L_actual)


		sl=Math.sqrt(f*f+L_squared)-2.9/2	// Spoke length. 2.5 dia spoke hole - 0.2


		// Spoke clearance

		sc_h=Math.sin(sector_angle/2)*h*2	   

		sc_a=(Math.PI-sector_angle*cross-entry_angle) - ((Math.PI-sector_angle)/2) 

		sc=Math.sin(sc_a)*sc_h 

		sc-=3; // Subtract 3mm (2mm spoke and 4mm spoke head).


		sc=sc.toFixed(1) // This converts -0.000123 to -0.0

		if (sc<0) {
			sc=Math.abs(sc)
			sc_type="OVERLAP"
		}
		else {                      
			sc=Math.abs(sc)     
			sc_type="clearance"
		}
		// Round values for display

		sl=sl.toFixed(1)
		entry_angle=entry_angle * 180/Math.PI
		entry_angle=entry_angle.toFixed(1)

		
		if (cross==0 && !radialAllowed) {
			  bgcolor="bad"
		}
		else if (cross==0 && radialAllowed) {
			  bgcolor="radial"
		}
		else if ((holes <16 && cross>1)||
				 (holes<=24 && cross>2)||
				 (holes<=32 && cross>3)||
				 (holes==18 && cross>2)) {

				  bgcolor="bad"
		}
		else if (holes>16 && cross==1) {
			 bgcolor="not_great"
		}

		spokes+='<td class="len '+ bgcolor +'"><span title="Rim angle '+entry_angle+' degrees. Spoke head '+sc_type+' '+sc+'mm'+'">'+sl+'</span></td>'

	}

 	return (spokes)
}

