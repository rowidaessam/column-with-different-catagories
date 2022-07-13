window.addEventListener('load', function (){
    var task = document.getElementsByName('task')[0];

    task.addEventListener('blur', function (){
        if (!isValidText(task.value)){
            task.focus();
            task.select()
        }
    })

    document.getElementById('add-btn').addEventListener('click', function (event){

        if (isValidText(task.value)){
            addNewsRow(task.value)
        }

    })
})


function isValidText(value){
    return value.match(/^[a-zA-z]/)
}

function addNewsRow(text){
    var myTable =  document.getElementsByTagName('table')[0];

    var row = document.createElement('tr');

    var col1 = document.createElement('td');
    col1.innerHTML = '<input type="checkbox">';

    col1.addEventListener('change', function (){
        col1.parentElement.querySelector('p').classList.toggle('through-line');
    });

    var col2 = document.createElement('td');
    col2.innerHTML =  '<p font-size = "large">'+ text +'</p>';

    var col3 = document.createElement('td');
    col3.innerHTML =  '<i class="fa-solid fa-trash-can"><img src = "../Images/download.png" height="30px" width="30px"></i>';

    col3.addEventListener('click', function (){
        if (confirm('Are you sure?'))
            myTable.removeChild(row);
    });

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    myTable.appendChild(row);

}
