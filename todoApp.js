const form = document.querySelector('.form');
const todos = document.querySelector('.todo-list');
const warn = document.querySelector('small');
const body = document.querySelector('body');
const text = document.querySelector('.text');
const todo = document.querySelectorAll('li');
const search = document.querySelector('.form input');


//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


const filterTodos = term => {


    Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

};

 

const generateTodo = (todo) => {
    
    const newTime = new Date();
    const html = `
    <li>
        <h4 class='text'>${todo}</h4>
        <p class="createdOn">created on ${newTime}</p>
        <button class="delete">delete</button>
    </li>
    `;
    todos.innerHTML += html;
    
}



//controls

todo.forEach(item =>{
    item.addEventListener('click', e =>{
        if (e.target.classList.contains('done')){
            document.querySelector('.text').style.textDecorationLine = "line-through";
            console.log(e.target);
        }
    });
});

todos.addEventListener('click', e => {

    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
         
});



body.addEventListener('click', () => {
    warn.style.display = 'none';
});


form.addEventListener('submit', e => {
    e.preventDefault();
    const todo = form.todo.value.trim();
    if(todo.length){
        generateTodo(todo); 
        form.reset();
    }else {
        warn.style.display = 'block';
    }
    
});
