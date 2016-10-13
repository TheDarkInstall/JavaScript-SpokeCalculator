function doCalc() {
	var wheel=wheelData("normal");
	var prn='';

	if (wheelErrors(wheel)) //currently in errorhandling.js
		return; // Error message already displayed

	prn+=wheelWarnings(wheel);

	tableView=false // global defined in common.js

	parent.menu.reCalculate('off');

	prn+=output(wheel,"spokeTableHeader");

	for (var holes=wheel.hf; holes<=wheel.ht; holes+=4) {
		if (holes==44 && wheel.hf!=44)
			continue;

		prn+="     <tr>\n        <th class=\"x\">"+holes+"</th>\n"
		prn+="        "+calcSpokes(wheel.A,wheel.C,wheel.erd,holes,wheel.leftRadial)+"\n"
		prn+="        "+calcSpokes(wheel.B,wheel.D,wheel.erd,holes,wheel.rightRadial)+"\n"
		prn+="     </tr>\n"
	 }

	prn+="</table>\n"

	prn+=output(wheel,"spokeTableFooter");

	tableView=true

	dispResult("Spokes",prn)

}
