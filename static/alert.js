var t_body = document.querySelector('#tt');
var row = document.createElement("tr");
var field_names = ['date', 'game_time', 'steps'];

function add_rows(parName,createName,data_array) {
    console.log(data_array)
    console.log('create')
    parName.appendChild(createName);
    for (let i = 0; i < field_names.length; i++) {
	    td = document.createElement("td");
        td.innerHTML = data_array[field_names[i]];
        createName.appendChild(td);
    }
}

function save_result(steps,game_time) {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    data = {
            'steps': steps,
            'game_time' : game_time
        };
    fetch('/guess_number/',   {
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
                    'X-CSRFToken': csrftoken,
                    'Accept': 'text/html',
                    'Content-Type': 'application/json',
                }})
            .then(response => response.text())
            .then(temp => {
                data["date"] = temp
                add_rows(t_body,row,data)
            })
            .catch(error => console.log(error));
}


var but = document.querySelector('#button');
var arr = [];
var start;
var end;
function create_array (start,end) {
    let arr = new Array()
    for (let i = start; i <= end; i++) {
	    arr[i] = i;
}
    return arr
}
but.onclick = function() {
    start = document.querySelector('#min_num').value;
    end = document.querySelector('#max_num').value;
    binarySearch(start,end,create_array(+start,+end))
}
function binarySearch(start,end,array,button_value) {
    var elem = document.getElementById('inp').value;
	var step = 0;
    var time = performance.now();
    while (start <= end) {
        var res = document.getElementById('out');
        var middle = Math.floor((+start + +end) / 2);

		step+=1
        if (Number.isInteger(+elem) && (+elem >= 1)) {
            if (middle === (+elem)) {
                var end_time = performance.now() - time;
                res.innerHTML = 'Ура, я угадал твое число: ' + middle + '.'
                save_result(step,Math.round(end_time/1000))
                return
            }
            else {
                var resp = prompt('Больше или меньше? '+ middle).toLowerCase();
                if (resp === 'больше') {
                    start = middle + 1;
                } else if (num === 'меньше') {
                    end = middle - 1;
                }
                else{
                    alert('Ответьте корректно на вопрос!')
                    step -= 1
                }
            }
        }
        else {
            alert("Введите число!!!")
            return
        }
    }
}

 document.querySelector('#button').onmouseenter = () => {
     document.querySelector('#button').style.background = 'red';

 }
 document.querySelector('#button').onmouseleave = () => {
     document.querySelector('#button').style.background = 'blue';

 }
// document.querySelector('#button').onmousedown = () => {
//     document.querySelector('#button').style.background = 'orange';
//
// }


//function add_rows(data){
//    console.log("!!!")
//    var t_body = document.querySelector('#tt');
//    var row = document.createElement("tr");
//    t_body.appendChild(row);
//    td = document.createElement("td");
//    td.innerHTML = data["response"];
//    row.appendChild(td);
//    td = document.createElement("td");
//    td.innerHTML = data["game_time"];
//    row.appendChild(td);
//    td = document.createElement("td");
//    td.innerHTML = data["steps"];
//    row.appendChild(td);
//}