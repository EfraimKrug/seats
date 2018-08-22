
function breakSeat(seat){
    newSeat = {"col":"0", "row":"0"};
    newSeat['col'] = seat.substring(seat.indexOf("[") + 1, seat.indexOf("]"));
    newSeat['row'] = seat.substring(0, seat.indexOf("["));
    return newSeat;
}

function extractSeat(line){
  return line.substring(line.indexOf(">") + 1, line.indexOf("/") - 1);
}

function getCell(seat){
  for(var sec=1; sec < 13; sec++){
    var tbl = document.getElementById("tbl" + sec);
        for (var r = 0; r < tbl.rows.length; r++) {
            for (var c = 0; c < tbl.rows[r].cells.length; c++) {
                var e = extractSeat(tbl.rows[r].cells[c].innerHTML);
                if(e == seat){
                  //tbl.rows[r].cells[c].style.color = "red";
                  return tbl.rows[r].cells[c];
                }
            }
        }

  }
}


function buildJSON(){
  var tblData = {};
  for(var sec=1; sec < 13; sec++){
    var tbl = document.getElementById("tbl" + sec);
        tblData['tbl' + sec] = {};
        for (var r = 0; r < tbl.rows.length; r++) {
            for (var c = 0; c < tbl.rows[r].cells.length; c++) {
                var e = extractSeat(tbl.rows[r].cells[c].innerHTML);
                tblData['tbl' + sec]['cell' + e]={"Row":"", "Col":"", "Name":"", "Paid":""};
                tblData['tbl' + sec]['cell' + e]["Row"] = r;
                tblData['tbl' + sec]['cell' + e]["Col"] = c;
                tblData['tbl' + sec]['cell' + e]["Name"] = e;
                tblData['tbl' + sec]['cell' + e]["Paid"] = "n";
                }
            }
        }
        download(JSON.stringify(tblData), "jsFile.json", "text/plain");
}
