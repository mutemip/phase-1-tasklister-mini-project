document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    populateToDo(e.target.new_task_description.value);
    //reset form data
    form.reset();
  });
});


function populateToDo(task){
  //create DOM element for our tasks
  let li = document.createElement('li');
  let btn = document.createElement('button')
  //delete event
  btn.addEventListener('click', handleDelete)
  li.textContent = `${task} `;
  btn.textContent = 'Delete'
  li.appendChild(btn)
  //append data to parent
  document.querySelector('#tasks').appendChild(li)

}

function handleDelete(e){
  e.target.parentNode.remove()
}