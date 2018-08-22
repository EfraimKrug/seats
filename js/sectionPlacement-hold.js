// Section Placement...according to individual rows and columns... 

// first row, second row, third row...
var positionsUsed = [false, false, false, false, false, false, false, false, false, false, false, false, false];
var positionsSet = false;

function getTableHeight(Position){
  for(var i=0; i < Sections.Sections.length; i++){
    if(Sections.Sections[i]["Position"] == Position){
      return parseInt(Sections.Sections[i]["RowCount"]) * 40;
    }
  }
}

// 1,2,3,4 - top of page: 27px
function getTop(Pos){
  var Position = parseInt(Pos);
  //console.log("getTop:" + Position);
  if(!positionsSet) getpositionsUsed();
  if(Position < 5)   return "97px";
  if(Position < 9){
    if(positionsUsed[Position - 4]) return (getTableHeight(Position - 4) + 129) + "px";
    return "97px";
  }
  if(Position < 13){
    if(positionsUsed[Position - 4] && positionsUsed[Position - 8]) return (getTableHeight(Position - 4) + getTableHeight(Position - 8) + 159) + "px";
    if(positionsUsed[Position - 4]) return (getTableHeight(Position - 4) + 159) + "px";
    if(positionsUsed[Position - 8]) return (getTableHeight(Position - 8) + 159) + "px";
    return "129px";
    }
  }

function getpositionsUsed(){
  positionsSet = true;
  for(var i=0; i<Sections.Sections.length; i++){
    positionsUsed[parseInt(Sections.Sections[i]["Position"])] = true;
    }
  rowSet = true;
  }


  // Section Placement...Horizontal...

  // first row, second row, third row...
  //var positionsUsed = [false, false, false, false, false, false, false, false, false, false, false, false, false];
  //var positionsSet = false;

  function getTableWidth(Position){
    for(var i=0; i < Sections.Sections.length; i++){
      if(Sections.Sections[i]["Position"] == Position){
        return parseInt(Sections.Sections[i]["ColumnCount"]) * 120;
      }
    }
  }

  // 1,2,3,4 - top of page: 27px
  function getLeft(Pos){
    var Position = parseInt(Pos);
    console.log("getLeft:" + Position);
    if(!positionsSet) getpositionsUsed();
    if((Position == 1) || (Position == 5) || (Position == 9))   return "97px";
    if((Position == 2) || (Position == 6) || (Position == 10)){
      if(positionsUsed[Position - 1]) return (getTableWidth(Position - 1) + 97) + "px";
      return "97px";
    }
    if((Position == 3) || (Position == 7) || (Position == 11)){
      if(positionsUsed[Position - 1] && positionsUsed[Position - 2]) return (getTableWidth(Position - 1) + getTableWidth(Position - 2) + 97) + "px";
      if(positionsUsed[Position - 1]) return (getTableWidth(Position - 1) + 97) + "px";
      if(positionsUsed[Position - 2]) return (getTableWidth(Position - 2) + 97) + "px";
      return "97px";
      }
    var width = 97;
    if((Position == 4) || (Position == 8) || (Position == 12)){
      if(positionsUsed[Position - 1]){
        width += getTableWidth(Position - 1);
      }
      if(positionsUsed[Position - 2]){
        width += getTableWidth(Position - 2);
      }
      if(positionsUsed[Position - 3]){
        width += getTableWidth(Position - 3);
      }
      return width + "px";
      }
    }

  // function getpositionsUsed(){
  //   positionsSet = true;
  //   for(var i=0; i<Sections.Sections.length; i++){
  //     positionsUsed[parseInt(Sections.Sections[i]["Position"])] = true;
  //     }
  //   rowSet = true;
  //   }
