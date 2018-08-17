var Members = JSON.parse(MemberList);

function showSeats(){
	var tbl = document.getElementById("tbl1");
    var i=0;
    while(i < 10){
        var row = tbl.insertRow(0);
				row.className = (i%2 ? "row1" : "row2");
        var j = 0;
        while (j < 10){
            var cell = row.insertCell(0);
            cell.innerHTML = "this";
            //cell.className = "seat";
            j++;
        }
        i++;
   }
}
