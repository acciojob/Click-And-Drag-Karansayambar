// Your code here.
let draggedItem;

  function drag(event) {
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.textContent);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetItem = document.elementFromPoint(event.clientX, event.clientY);
    
    if (targetItem && targetItem.classList.contains("item")) {
      targetItem.insertAdjacentHTML("beforebegin", `<div class="item" draggable="true" ondragstart="drag(event)">${data}</div>`);
      draggedItem.remove();
    }
  }