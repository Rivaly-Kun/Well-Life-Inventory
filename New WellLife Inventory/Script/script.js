function showTable(tableID) {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = "none";
    }
    document.getElementById(tableID).style.display = "table";
}

//sa table ni 
function tabletoexcel(){
    var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table.in-table"));	
}