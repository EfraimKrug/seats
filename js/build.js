var Sections = JSON.parse(SectionList);
//
//note: tblNum is 1 relative for section numbers,
//      but 0-relative for the SectionList...
//
function buildAll(){
  //console.log(Sections.Sections.length);
  var i = 0;
  for(var i=0; i < Sections.Sections.length; i++){
    //console.log(i);
    buildSection(i);
  }
}

function setUpTitle(idx, lpos, tpos){
  var id = "tbl" + parseInt(Sections.Sections[idx]["Position"]) + "Header";

  var header1 = document.getElementById(id);
  header1.innerHTML = Sections.Sections[idx]["SectionName"];
  header1.style.top = (parseInt(tpos.substring(0, tpos.indexOf('p'))) - 32) + "px" ;
  header1.style.left = lpos;
}

function setUpTable(idx){
  var tbl = document.getElementById("tbl" + parseInt(Sections.Sections[idx]["Position"]));
  tbl.style.top = getTop(Sections.Sections[idx]["Position"]);
  tbl.style.left = getLeft(Sections.Sections[idx]["Position"]);
  setUpTitle(idx, tbl.style.left, tbl.style.top);
  return tbl;
}

function buildNormal(idx, tbl){
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

      RowLetter = nextRowLetter(RowLetter);
    }
}

function buildAt90(idx, tbl){
  var i=0;
  var ColNumber = Sections.Sections[idx]["FirstNumber"];
  while(i < Sections.Sections[idx]["ColumnCount"]){
      var RowLetter = Sections.Sections[idx]["FirstLetter"];

      var row = tbl.insertRow(i);
      var j = 0;

      while (j < Sections.Sections[idx]["RowCount"]){
          var cell = row.insertCell(j);
          cell.className = "Seat";
          cell.innerHTML = "<span onclick=\"go('" + RowLetter + "[" + ColNumber + "]');\">" + RowLetter + "[" + ColNumber + "]</span>";
          cell.className = (j%2 ? "row1" : "row2");
          RowLetter = nextRowLetter(RowLetter);
          j++;
      }
      i++;
      ColNumber++;
    }
}

function buildSection(idx){
    var tbl = setUpTable(idx);
    if(Sections.Sections[idx]["Angle"] == "0"){
      buildNormal(idx, tbl);
    }

    if(Sections.Sections[idx]["Angle"] == "90"){
      buildAt90(idx, tbl);
    }

    //
}

    //var isAlpha = function(ch){
    //  return /^[A-Z]$/i.test(ch);
    //}

function nextRowLetter(RowLetter){
  var n;
  var begin;
  if (RowLetter.length > 1){
    n = RowLetter.charCodeAt(RowLetter.length - 1) + 1;
    begin  = RowLetter.substring(0, RowLetter.length - 1);
  } else {
    n = RowLetter.charCodeAt(0) + 1;
    begin = "";
  }
  return begin + String.fromCharCode(n);
}

function clearTbl(n){
  var wholeTbl = document.getElementById("wholetbl" + n);
  wholeTbl.innerHTML = "<table id=tbl" + n + " border=1></table>";
}


function go(a){
  //alert("Hello:" + a);
  var c = getCell(a);
  c.style.color = "red";
}
