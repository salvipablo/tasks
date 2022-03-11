// Declaracion de variables.
const cmpCntPagination = document.getElementById("cntPagination");
const cmpCntPendingTasks = document.getElementById("tareasPendientes");
const cmpCntExecutionTasks = document.getElementById("tareasEjecucion");
const cmpCntCompletedTasks = document.getElementById("tareasFinalizadas"); 
const parameterValues = window.location.search;

const pendingTasks = [
    {"id": 1, "taskTitle": "Tarea 5.", "description": "Descripcion 5.", "status": "pending"},
    {"id": 2, "taskTitle": "Tarea 6.", "description": "Descripcion 6.", "status": "pending"},
    {"id": 3, "taskTitle": "Tarea 7.", "description": "Descripcion 7.", "status": "pending"},
    {"id": 4, "taskTitle": "Completar planilla de soportes.", "description": "Terminar de cargar soportes del dia y agregar proximos.", "status": "pending"},
    {"id": 5, "taskTitle": "Tarea 8.", "description": "Descripcion 8.", "status": "pending"},
    {"id": 6, "taskTitle": "Tarea 9.", "description": "Descripcion 9.", "status": "pending"},
    {"id": 7, "taskTitle": "Tarea 10.", "description": "Descripcion 10.", "status": "pending"},
    {"id": 8, "taskTitle": "Tarea 11.", "description": "Descripcion 11.", "status": "pending"},
    {"id": 9, "taskTitle": "Tarea 12.", "description": "Descripcion 12.", "status": "pending"},
    {"id": 10, "taskTitle": "Tarea 13.", "description": "Descripcion 13.", "status": "pending"},
    {"id": 11, "taskTitle": "Tarea 14.", "description": "Descripcion 14.", "status": "pending"},
    {"id": 12, "taskTitle": "Tarea 15.", "description": "Descripcion 15.", "status": "pending"},
    {"id": 13, "taskTitle": "Tarea 16.", "description": "Descripcion 16.", "status": "pending"}
];

const runningTasks = [
    {"id": 1, "taskTitle": "Tarea 3.", "description": "Descripcion 3.", "status": "running"},
    {"id": 2, "taskTitle": "Tarea 4.", "description": "Descripcion 4.", "status": "running"}
];

const completedTasks = [
    {"id": 1, "taskTitle": "Tarea 1.", "description": "Descripcion 1.", "status": "completed"},
    {"id": 2, "taskTitle": "Tarea 2.", "description": "Descripcion 2.", "status": "completed"}
];
// Declaracion de variables.


// Declaracion de funciones.
function calculateNumberPages( numberPendingTasks, numberRunningTasks, numberCompletedTasks ) {
    let numberTasksToDisplay = 10;
    let numberPendingPagesInt = parseInt(numberPendingTasks / numberTasksToDisplay);
    let numberRunningPagesInt = parseInt(numberRunningTasks / numberTasksToDisplay);
    let numberFinishedPagesInt = parseInt(numberCompletedTasks / numberTasksToDisplay);
    
    if ( ( numberPendingTasks/numberTasksToDisplay ) > numberPendingPagesInt ) numberPendingPagesInt +=1;
    if ( ( numberRunningTasks/numberTasksToDisplay ) > numberRunningPagesInt ) numberRunningPagesInt +=1;
    if ( ( numberCompletedTasks/numberTasksToDisplay ) > numberFinishedPagesInt ) numberFinishedPagesInt +=1;

    if ( numberPendingPagesInt >= numberRunningPagesInt && numberPendingPagesInt >= numberFinishedPagesInt ) return numberPendingPagesInt;
    if ( numberRunningPagesInt >= numberPendingPagesInt && numberRunningPagesInt >= numberFinishedPagesInt ) return numberRunningPagesInt;
    return numberFinishedPagesInt;
}

function pagination( cant1, cant2, cant3 ) {
    let pages = calculateNumberPages(cant1, cant2, cant3);

    let html = "";

    for ( let i = 0; i < pages; i++ ) {
        html += `
            <a href="index.html?page=${i+1}">${i+1}</a>
        `;
    }

    cmpCntPagination.innerHTML = html;
}

function showTasksPending(initialId) {
    let html = "<h2>Tareas Pendientes.</h2>";

    for (let i = 0; i < pendingTasks.length; i++) {
        html += `
            <div class="tareasPendientes--task">
                <h3 class="titleTask"><span><img class="iconTask" src="favicon.png"></span>${pendingTasks[i].taskTitle}</h3>
                <p class="despcrTask">${pendingTasks[i].description}</p>
            </div>
        `;
    }
    cmpCntPendingTasks.innerHTML = html;
}

function showTasksRunning(initialId) {
    let html = "<h2>Tareas en ejecucion.</h2>";

    for (let i = 0; i < runningTasks.length; i++) {
        html += `
            <div class="tareasEjecucion--task">
                <h3 class="titleTask"><span><img class="iconTask" src="favicon.png"></span>${runningTasks[i].taskTitle}</h3>
                <p class="despcrTask">${runningTasks[i].description}</p>
            </div>
        `;
    }
    cmpCntExecutionTasks.innerHTML = html;
}

function showTasksCompleted(initialId) {
    let html = "<h2>Tareas Finalizadas.</h2>";

    for (let i = 0; i < completedTasks.length; i++) {
        html += `
            <div class="tareasFinalizadas--task">
                <h3 class="titleTask"><span><img class="iconTask" src="favicon.png"></span>${completedTasks[i].taskTitle}</h3>
                <p class="despcrTask">${completedTasks[i].description}</p>
            </div>
        `;
    }
    cmpCntCompletedTasks.innerHTML = html;
}

function showTasks() {
    let urlParams = new URLSearchParams(parameterValues);
    let pageNumber = 1;

    if ( urlParams.has('page') ) pageNumber = urlParams.get('page');
    console.log(pageNumber);

    // Tareas Pendientes
    showTasksPending(1);

    // Tareas en ejecucion
    showTasksRunning(1);
    
    // Tareas finalizadas
    showTasksCompleted(1);
}
// Declaracion de funciones.


///   Muestro tareas.   ///
showTasks();

///   Paginacion de la pagina.   ///
pagination(pendingTasks.length, runningTasks.length, completedTasks.length);