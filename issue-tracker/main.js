let listTodos = [];

const issueInputForm = document.getElementById('issueInputForm');
const searchInput = document.getElementById('searchInput');

function renderTodos(todos) {
  const issuesList = document.getElementById('issuesList');

  // reset 
  issuesList.innerHTML = '';
  
  for(const index in todos) {
    issuesList.innerHTML += `
      <div class="card">
        <div class="card-header d-flex align-items-center">
          ${todos[index].id} <span class="badge badge-secondary status" style="display:inline-block; margin-left: 5px;">${todos[index].status}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${todos[index].description}</h5>
          <p class="card-text"><span class="badge badge-primary">${todos[index].severity}</span></p>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary" style="margin-right: 10px;" onclick="changeStatusTodo(\'${todos[index].id}\')">Close</button>
            <button type="submit" class="btn btn-danger" onclick="deleteTodo(\'${todos[index].id}\')">Delete</button>
          </div>
        </div>
      </div>
      <br />
    `
  }
};

// add todo
issueInputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = document.getElementById('description').value;
  const severity = document.getElementById('severity').value;

  const todo = {
    id: Date.now(),
    status: 'new',
    description,
    severity
  }

  listTodos.push(todo);
  renderTodos(listTodos);
})


// search
const formSearch = document.getElementById('formSearch');
formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const keyword = searchInput.value.toLowerCase();
  let todoSearched = [...listTodos];
  todoSearched = newTodos.filter(todo => !todo.description.toLowerCase().indexOf(keyword));
  renderTodos(todoSearched);
})


// sort
const orderBy = document.getElementById('orderBy');
orderBy.addEventListener('change', (e) => {
  e.preventDefault();
  const order = Number(orderBy.value);
  const todosSorted = [...listTodos];
  todosSorted.sort((a, b) => {
    if(a.description > b.description) return order;
    if(a.description < b.description) return order;
    return 0;
  })
  renderTodos(todosSorted);
})

// change status
function changeStatusTodo(todoId) {
  // find index of todo item in array
  const todoIndex = listTodos.findIndex(todo => todo.id === Number(todoId));
  const status = listTodos[todoIndex].status;
  if(status === 'new') {
    listTodos[todoIndex].status = 'closed';
  } else {
    listTodos[todoIndex].status = 'new';
  }
  renderTodos(listTodos)
}