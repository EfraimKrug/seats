var Sections = JSON.parse(SectionList);
//
//note: tblNum is 1 relative for section numbers,
//      but 0-relative for the SectionList...
//
function buildAll(){
  //console.log(Sections.Sections.length);
  for(var i=0; i < Sections.Sections.length; i++){
    //console.log(i);
    buildSection(i);
  }
}

function buildSection(idx){
  //console.log("buildSection: tbl" + parseInt(Sections.Sections[idx]["Position"]));
  var tbl = document.getElementById("tbl" + parseInt(Sections.Sections[idx]["Position"]));
  console.log(Sections.Sections[idx]);
  console.log(idx + ":" + getTop(Sections.Sections[idx]["Position"]));
  tbl.style.top = getTop(Sections.Sections[idx]["Position"]);
  //console.log("top:" + tbl.style.top);
  //tbl.style.top = "180px";
  var header1 = document.getElementById("tbl" + parseInt(Sections.Sections[idx]["Position"]) + "Header");
  header1.innerHTML = Sections.Sections[idx]["SectionName"];
    var i=0;
    var RowLetter = Sections.Sections[idx]["FirstLetter"];
    while(i < Sections.Sections[idx]["RowCount"]){
        var ColNumber = Sections.Sections[idx]["FirstNumber"];
        var row = tbl.insertRow(i);
        row.className = (i%2 ? "row1" : "row2");
        var j = 0;

        while (j < Sections.Sections[idx]["ColumnCount"]){
            var cell = row.insertCell(j);
            cell.innerHTML = "<span onclick='go(RowLetter + \"[\" + ColNumber + \"]\");'>" + RowLetter + "[" + ColNumber + "]" + "</span>";
            ColNumber++;
            j++;
        }
        i++;

        var n;
        var begin;
        if (RowLetter.length > 1){
          n = RowLetter.charCodeAt(RowLetter.length - 1) + 1;
          begin  = RowLetter.substring(0, RowLetter.length - 1);
        } else {
          n = RowLetter.charCodeAt(0) + 1;
          begin = "";
        }

        RowLetter = begin + String.fromCharCode(n);
      }
    }

    var isAlpha = function(ch){
      return /^[A-Z]$/i.test(ch);
    }

function clearTbl(n){
  var wholeTbl = document.getElementById("wholetbl" + n);
  wholeTbl.innerHTML = "<table id=tbl" + n + " border=1></table>";
}


function go(a){
  alert(a);
}
