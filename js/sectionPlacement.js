// Section Placement...

// first row, second row, third row...
var rowsUsed = [false, false, false];
var rowsSet = false;

function getRowSize(Position){
  console.log("HERE: " + Position + document.getElementById("wholetbl" + parseInt(Position)).offsetHeight);
  return document.getElementById("wholetbl" + parseInt(Position)).offsetHeight;
}

// 1,2,3,4 - top of page: 27px
function getTop(Pos){
  var Position = parseInt(Pos);
  console.log("getTop:" + Position);
  if(!rowsSet) getRowsUsed();
  if(Position < 5)   return "97px";
  if(Position < 9){
    console.log("second row" + getRowSize(1));
    if(rowsUsed[0]) return (getRowSize(1) + 97) + "px";
    return "97px";
  }
  if(Position < 13){
    if(rowsUsed[0] && rowsUsed[1]) return (getRowSize(1) + getRowSize(5) + 97) + "px";
    if(rowsUsed[0]) return (getRowSize(1) + 97) + "px";
    if(rowsUsed[1]) return (getRowSize(2) + 97) + "px";
    return "97px";
    }
  }

function getRowsUsed(){
  rowsSet = true;
  for(var i=0; i<Sections.Sections.length; i++){
    if(parseInt(Sections.Sections[i]["Position"]) < 5){
      rowsUsed[0] = true;
    } else {
      if(parseInt(Sections.Sections[i]["Position"]) < 9){
        rowsUsed[1] = true;
      } else {
        if(parseInt(Sections.Sections[i]["Position"]) < 13){
          rowsUsed[2] = true;
      }
    }
  }
}

console.log(rowsUsed);
}
