// window.load=function(){
//    var addbtn = document.getElementById("add")
//    addbtn.onclick = add_button();
//    var resbtn = document.getElementById("reset")
//    resbtn.onclick = res_button();
//    var uptbtn = document.getElementById("update")
//    uptbtn.onclick=Upd_button();
    
// }
var table = document.getElementById("t1");
var rIndex;
function add_button(){
  //var pname = document.getElementById("name").Value;
  
  var r = 1;
  row = table.insertRow(r);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  if((document.getElementById("name").value=="") && (document.getElementById("Age").value==null) )
  {
      alert("Field is required")
      return;
  }
  
  else{

      var pname= document.getElementById("name").value
      var p_age=document.getElementById("Age").value
      if (document.getElementById('male').checked) {
        var pgender = document.getElementById('male').value;
      }
      else if(document.getElementById('female').checked)
      {
        var pgender = document.getElementById('female').value;
      }else{
          alert("Field is required")
      }
    
        var e = document.getElementById("cities").value;
        
        
      cell1.innerHTML = pname;
      cell2.innerHTML = pgender;
      cell3.innerHTML = p_age;
      cell4.innerHTML = e;
      cell5.innerHTML = "Update/";
      cell6.innerHTML = "Remove";
      alert("Data successfully inserted!!");
      r++;
      for(var n = 0; n < table.rows.length; n++)
  {
      table.rows[n].cells[4].onclick = function()
      {
        // get the selected row index
        rIndex = this.parentElement.rowIndex;
        document.getElementById("name").value = cell1.innerHTML;
        if(document.getElementById("male").value=="male")
        {
          document.getElementById("male").value = cell2.innerHTML;
        }
        else{
          document.getElementById("female").value = cell2.innerHTML;
        }
        // document.getElementById("gender").value = this.cells[1].innerHTML;
        document.getElementById("Age").value = cell3.innerHTML;
        document.getElementById("cities").value = cell4.innerHTML;
      };
  }

  for( var z =0; z < table.rows.length;z++)
  {
    
    table.rows[z].cells[5].onclick = function(){
     
     var m=this.parentElement.rowIndex;
      table.deleteRow(m);
      alert("Deleted Row");
    }
  }

  }

  
 
   

  
  //var pgender= document.getElementById("male").Value;
  //document.getElementById("demo").innerHTML = gen_value;

}

  function update_button(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("name").value;
    if (document.getElementById('male').checked) {
      table.rows[rIndex].cells[1].innerHTML = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked)
    {
      table.rows[rIndex].cells[1].innerHTML = document.getElementById('female').value;
    }
     
     table.rows[rIndex].cells[2].innerHTML = document.getElementById("Age").value;
     table.rows[rIndex].cells[3].innerHTML = document.getElementById("cities").value;
    
     alert("Data Updated!!")
      
  }

  


    

