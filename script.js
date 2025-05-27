document.getElementById('todo-form').addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const marks=document.getElementById('marks').value;
    if(name && marks){
        addTodo(name,marks);
        document.getElementById('name').value='';
        document.getElementById('marks').value='';
    }
    else{
        alert("enter the name and marks ...");
    }
});
function addTodo(name,marks){
    const li=document.createElement('li');
    li.innerHTML=`<span> ${name}: ${marks}</span> <button onclick="removeTodo(this)">Remove</button>`;
    document.getElementById('todo-list').appendChild(li);
}
function removeTodo(button){
    button.parentElement.remove();
}