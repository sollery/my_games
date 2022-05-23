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
            .then(response => console.log(response))
            .catch(error => console.log(error));
}


var but = document.querySelector('#button');
var array = [];
var start = 1;
var end = 1000;
for (let i = start; i <= end; i++) {
	array[i] = i;
}


but.onclick = function binarySearch() {
    var elem = document.getElementById('inp').value;
	var step = 0;
    var time = performance.now();
    while (start <= end) {
        var res = document.getElementById('out')
        let middle = Math.floor((start + end) / 2);
        var time_inp = document.querySelector('#time')
        var step_inp = document.querySelector('#step')
		step+=1
        if (Number.isInteger(+elem) && (+elem >= 1)){
            if (array[middle] === (+elem)) {
                var end_time = performance.now() - time;
//                console.log(Math.round(end_time/1000),step,middle, elem)
                res.innerHTML = 'Ура, я угадал твое число: ' + middle + '. Перейди по ссылке чтобы посмотреть статистику игры'
//                time_inp.value = Math.round(end_time/1000)
//                step_inp.value = step
                save_result(step,Math.round(end_time/1000))
                return
            } 
            else {
                var num = prompt('Больше или меньше? '+ middle).toLowerCase();
                }if (num === 'больше') {
                    start = middle + 1;
                } else if (num === 'меньше') {
                    end = middle - 1;
                }
                else{
                    alert('Ответьте корректно на вопрос!')
                    step -= 1
                }
        }
        else {
            alert("Введите число!!!")
            return
    }
    }
}
