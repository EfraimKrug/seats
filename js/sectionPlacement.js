// Section Placement...lining up rows and columns

// first row, second row, third row...
var positionsUsed = [false, false, false, false, false, false, false, false, false, false, false, false, false];
var positionsSet = false;

function getTableHeight(Position){
  //console.log("getTableHeight: " + Position);
  var maxFirst = 0;
  var maxSecond = 0;
  for(var i=0; i < Sections.Sections.length; i++){
    var pos = parseInt(Sections.Sections[i]["Position"]);
    var rCount = parseInt(Sections.Sections[i]["RowCount"]);

    if(pos < 5){
      if(rCount > maxFirst){
        maxFirst = rCount;
      }
    } else {
        if(pos < 9){
          if(rCount > maxSecond){
            maxSecond = rCount;
          }
        }
    }
  }
  //console.log("Try new stuff:" + Position + ":" + maxFirst + ":" + maxSecond + ":");
  if (Position < 5) return parseInt(maxFirst * 35);
  //if (Position < 9) return maxFirst * 40;
  var x = (parseInt(maxFirst) + parseInt(maxSecond)) * 35;
  //console.log("XX:" + Position + ":" + x);
  return x;
  //return parseInt((maxFirst + maxSecond) * 40);
}

// 1,2,3,4 - top of page: 27px
function getTop(Pos){
  var Position = parseInt(Pos);
  if(Position < 5)   return "97px";
  if(Position < 9){
    return (parseInt(getTableHeight(Position - 4) + 169)) + "px";
  }
  //console.log("Position >= 9: " + Position);
  if(Position < 13){
    var x = parseInt(getTableHeight(Position - 4));
    var y = parseInt(getTableHeight(Position - 8));
    //console.log(parseInt( x + y + 99) + ":" + x + ":" + y);
    return parseInt( x + y + 89) + "px";
    }
  }

function getpositionsUsed(){
  positionsSet = true;
  for(var i=0; i<Sections.Sections.length; i++){
    positionsUsed[parseInt(Sections.Sections[i]["Position"])] = true;
    }
  rowSet = true;
  }


  function getTableWidth(Posi){
    var Position = parseInt(Posi);
    var maxCol1=0;
    var maxCol2=0;
    var maxCol3=0;

    for(var i=0; i < Sections.Sections.length; i++){
      var colCount = parseInt(Sections.Sections[i]["ColumnCount"]);
      var pos = parseInt(Sections.Sections[i]["Position"]);
      if((pos == 1) || (pos == 5) || (pos == 9)){
        //console.log("Pos: " + Sections.Sections[i]["Position"] + ":" + Sections.Sections[i]["ColumnCount"] + "?" + maxCol1);
        if(colCount > maxCol1){
          //console.log("must be");
          maxCol1 = colCount;
        }
      } else {
        if((pos == 2) || (pos == 6) || (pos == 10)){
          if(colCount > maxCol2){
            maxCol2 = colCount;
          }
        } else {
          if((pos == 3) || (pos == 7) || (pos == 11)){
            if(colCount > maxCol3){
              maxCol3 = colCount;
            }
          }
        }
      }
    }
    //console.log("Table: " + maxCol1 + ":" + maxCol2 + ":" + maxCol3);
    if((Position == 1) || (Position == 5) || (Position == 9)){
      return maxCol1 * 119;
    }
    //console.log(maxCol1 + ":" + maxCol2 + ":" + maxCol3);
    if((Position == 2) || (Position == 6) || (Position == 10)){
      //console.log("Max: " + (maxCol1 * 59));
      //return (parseInt(maxCol1) + parseInt(maxCol2)) * 119;
      return parseInt(maxCol2) * 119;
    }

    if((Position == 3) || (Position == 7) || (Position == 11)){
      //console.log((maxCol1 + maxCol2) * 59);
      //console.log((parseInt(maxCol1) + parseInt(maxCol2) + parseInt(maxCol3)) * 119);
       //return (parseInt(maxCol1) + parseInt(maxCol2) + parseInt(maxCol3)) * 99;
      return parseInt(maxCol3) * 119;
    }
    //console.log("Really?" + maxCol1 + ":" + maxCol1 + ":" + maxCol3);
    //return (parseInt(maxCol1) + parseInt(maxCol2) + parseInt(maxCol3)) * 99;
  }

  // 1,2,3,4 - top of page: 27px
  function getLeft(Pos){
    var Position = parseInt(Pos);
    //console.log("getLeft:" + Position);
    if((Position == 1) || (Position == 5) || (Position == 9))   return "0px";

    if((Position == 2) || (Position == 6) || (Position == 10)){
      //console.log("HERE:" + (parseInt(getTableWidth(Position - 1)) + parseInt(97)) + ":");
      return (getTableWidth(Position - 1)) + "px";
    }
    if((Position == 3) || (Position == 7) || (Position == 11)){
      return (getTableWidth(Position - 1) + getTableWidth(Position - 2)) + "px";
      }
      if((Position == 4) || (Position == 8) || (Position == 12)){
        return (getTableWidth(Position - 1) + getTableWidth(Position - 2) + getTableWidth(Position - 3)) + "px";
        }
    }
