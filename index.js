document.querySelector('#Push').onclick = function(){
    if(document.querySelector('#task input').value.length == 0){
        alert('Enter task pls')
    }

    else{
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
    <span id = "taskname">
    ${document.querySelector('#task input').value}
    </span>
    <button class="delete">
    <i></i>
    </button>
    </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");

    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}


}