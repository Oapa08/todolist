// Arreglo inicial de tareas
let tareas = [
    { id: 16, descripcion: 'Hacer mercado', completado: true },
    { id: 60, descripcion: 'Estudiar para la prueba', completado: false },
    { id: 24, descripcion: 'Sacar a pasear a Tobby', completado: false }
];

// Función para renderizar las tareas
function renderizarTareas() {
    const listaTareas = document.getElementById('tareas');
    listaTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const tr = document.createElement('tr');
        tr.className = tarea.completado ? 'completed' : '';

        tr.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td><button class="complete" onclick="completarTarea(${index})">${tarea.completado ? '✓' : 'Marcar'}</button></td>
            <td><button class="delete" onclick="borrarTarea(${index})">X</button></td>
        `;

        listaTareas.appendChild(tr);
    });

    // Actualizar el resumen
    document.getElementById('total-tareas').innerText = tareas.length;
    document.getElementById('tareas-realizadas').innerText = tareas.filter(t => t.completado).length;
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const descripcion = document.getElementById('descripcion-tarea').value;
    if (descripcion) {
        const nuevaTarea = {
            id: tareas.length + 1,
            descripcion: descripcion,
            completado: false
        };
        tareas.push(nuevaTarea);
        document.getElementById('descripcion-tarea').value = '';
        renderizarTareas();
    }
}

// Función para borrar una tarea
function borrarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

// Función para marcar una tarea como completada
function completarTarea(index) {
    tareas[index].completado = !tareas[index].completado;
    renderizarTareas();
}

// Inicializar el evento para agregar una nueva tarea
document.getElementById('agregar-tarea').addEventListener('click', agregarTarea);

// Renderizar las tareas iniciales al cargar la página
document.addEventListener('DOMContentLoaded', renderizarTareas);
