
    let buttonUpl = document.getElementById('myButton')
    .addEventListener("click",() =>{
Papa.parse("https://docs.google.com/spreadsheets/d/1eoH7SiYnJKHvxMaubHRCGXtGoJY-oY9XUbxSTTbp7FY/edit#gid=0", {
download: true,
header: true,
complete: function(results) {
    let i = 0;
 results.data.map((data,index) =>{
     
     if (i=== 0) {
        let table = document.getElementById('table-data');
        generateBoard(table,data); 
       
   } else {
       let table = document.getElementById('table-data');
       generatRows(table,data)
   }
         i++  
});

    }
});
});     
function generateBoard(table,data) {
    let thead = table.createHead();
    let row = thead.insertRow();
    for(let key of data){
    let th =document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    }    
}
function generateRows(table, data) {
    let newRow = table.insert(-1);
    data.map((row,index) => {
        let newCell= newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appendChild(newText);
    });
}


// document.getElementById('csv').files[0]
// Papa.parse(fileInput.files[0], {
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });
// const getResult = async function () {
//     const dataUrl ="https://docs.google.com/spreadsheets/d/1eoH7SiYnJKHvxMaubHRCGXtGoJY-oY9XUbxSTTbp7FY/edit#gid=0"
//     const res = await fetch (dataUrl);
//     console.log(res);
    
// }


// (function (){
//     const button = document.getElementById('myButton') 
//     button.addEventListener("click". getResult);
// })();