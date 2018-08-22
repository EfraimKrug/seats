
var Sections = JSON.parse(SectionList);

function buildSect(idx){
  var tbl = document.getElementById("tbl" + parseInt(Sections.Sections[idx]["Position"]));
  clearAllTables(tbl);

  var id = "tblHeader";
  var header1 = document.getElementById(id);
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
          cell.className = "Seat";
          cell.innerHTML = "<span onclick=\"go('" + RowLetter + "[" + ColNumber + "]');\">" + RowLetter + "[" + ColNumber + "]</span>";
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
    wtbl = document.getElementById("wholeTable");
    wtbl.style.width = (Sections.Sections[idx]["ColumnCount"] * 120) + "px";
    wtbl.style.height = (Sections.Sections[idx]["RowCount"] * 60) + "px";
    buildJSON();
  }


function buildOutside(){
  for(var i=1; i <= Sections.Sections.length; i++){
    //console.log(Sections.Sections[i]);
    var box = document.getElementById("section" + i);
    box.style.top = (Sections.Sections[i-1]["OutRow"] * 59) + "px";
    box.style.left = (Sections.Sections[i-1]["OutCol"] * 159) + "px";
    box.innerHTML = "<span onclick='showSection(" + (i - 1) + ");'>" + Sections.Sections[i-1]["SectionName"] + "</span>";
  }
}

function clearAllTables(){
  for(var i=1; i < 13; i++){
    var tbl = document.getElementById("tbl" + i);
    clearTable(tbl);
  }
}

function clearTable(tbl){
while(tbl.rows.length > 0){
  tbl.deleteRow(0);
  }
}

function showSection(idx){
  var wtbl = document.getElementById("wholeTable");
  wtbl.style.width = "587px";
  wtbl.style.height = "487px";
  var close = document.getElementById("closeButton");
  wtbl.style.visibility = "visible";
  close.style.visibility = "visible";
  buildSect(idx);
}

function closeIt(){
  var wtbl = document.getElementById("wholeTable");
  var close = document.getElementById("closeButton");
  close.style.visibility = "hidden";
  wtbl.style.visibility = "hidden";
}
