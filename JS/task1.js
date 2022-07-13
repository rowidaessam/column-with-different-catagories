  
var rowsNumbers = 0;

window.addEventListener('load', function (){
    var newsText = document.getElementsByName('newsText')[0];

    newsText.addEventListener('blur', function (){
        if (!isNewTextValid(newsText.value)){
            newsText.focus();
            newsText.select()
        }
    })

    document.getElementById('add-btn').addEventListener('click', function (event){
        var newType = document.querySelector('input[name="newsType"]:checked');

        if (isNewTextValid(newsText.value)){
            addNewsRow(newType.value, newsText.value)
        }

    })
})


function isNewTextValid(value){
    return value.match(/^[a-zA-z]/)
}

function addNewsRow(type, text){
    var myTable =  document.getElementsByTagName('table')[0];
    var row = document.createElement('tr');

    if (type === 'sport'){
        row.style.backgroundColor = 'lightblue';
    }else if (type === 'social')
        row.style.backgroundColor = 'lightgreen';
    else
        row.style.backgroundColor = 'pink';

    var col1 = document.createElement('td');
    col1.innerText = ++rowsNumbers + '';

    var col2 = document.createElement('td');
    col2.innerHTML =  '<p>'+ text +'</p>';

    var col3 = document.createElement('td');
    col3.innerHTML =  '<input type="submit" value="Remove" width="20px" background-color="pink" style="cursor: pointer">';

    col3.addEventListener('click', function (){
        myTable.removeChild(row);
        rowsNumbers--;

        var tableRows = document.getElementsByTagName('table')[0].rows;
        for (var i = 1; i < tableRows.length; i++ ){
            tableRows.item(i).cells[0].innerText = i + '';
        }
    });

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    myTable.appendChild(row);

}
