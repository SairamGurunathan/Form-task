var btn = document.querySelector('.form');
btn.addEventListener('submit',(e)=>{
    e.preventDefault()
    var table = document.querySelector('.table');
    var row = document.createElement('tr')
    var arr = ["fn","ln","add","pin","gen","state","country"]
    for(let i of arr){
        var d1 = document.querySelector(`#${i}`);
        var data = document.createElement('td');
        data.innerText = d1.value;
        row.append(data);
        d1.value = "";
    }
    var food = document.querySelectorAll('[type="checkbox"]')
    var td = document.createElement('td')
    for(let i of food){
        if(i.checked){
            td.append(i.value +" ")
        }
    }
    // var fn = document.querySelector('.fn')
    // var row1=document.createElement('tr')
    // var d1 = document.createElement('td')
    // d1.innerText = fn.value
    // row1.append(d1)

    // var ln = document.querySelector('.ln')
    // var d2 = document.createElement('td')
    // d2.innerText = ln.value
    // row1.append(d2)
    row.append(td);
    table.append(row);
    
})