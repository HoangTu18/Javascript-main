// let todosLists = [];

function renderTodos(todos = []) {
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
            <button type="submit" class="btn btn-primary" style="margin-right: 10px;" onclick="changeStatusTodo(\'${todos[index].id}\')">Edit</button>
            <button type="submit" class="btn btn-danger" onclick="deleteTodo(\'${todos[index].id}\')">Delete</button>
          </div>
        </div>
      </div>
      <br />
    `
  }
};

// fetch list todos
fetch(`https://tony-json-server.herokuapp.com/api/todos?_page=1&_limit=5`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const todos = data.data;
      renderTodos(todos);
    })

fetch(`https://tony-json-server.herokuapp.com/api/todos/412avae-4712-4d21-n452-d31e8648771e`)
  .then(res => res.json())
  .then(data => {
    console.log('fetch single todo: ', data)
  })


    