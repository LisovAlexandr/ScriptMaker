function modify(){
    let input=document.getElementById('input').value
    let output=document.getElementById('output')
    let inputArr=input.split('\n')
    let arr = [];
    let template=document.getElementById('template').value;
    inputArr.forEach(element => {
        element?arr.push(template.replaceAll('CELL_NAME',element).replaceAll('VAR',element)):"";
    });
    output.value=arr.join('\n')
}

function gsmHaltActive(){
    //document.getElementById('template').value="rlstc:cell=CELL_NAME,state=halted;\nrlstc:cell=CELL_NAME,state=active;";
    let val = document.getElementById('template').value
    document.getElementById('template').value=`rlstc:cell=CELL_NAME,state=halted;\n${val}\nrlstc:cell=CELL_NAME,state=active;`
}
function clearInput(){
    document.getElementById('input').value=""
}
function clearTemp(){
    document.getElementById('template').value=""
}
function clearOutput(){
    document.getElementById('output').value=""
}