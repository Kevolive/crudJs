document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('crudForm');
const tableBody = document.getElementById('tableBody');
let idContador = 1;

//Evento para agregar

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const identification = document.getElementById('identification').value;
    const phone = document.getElementById('phone').value;

    addRow(idContador++, name, email, identification, phone);

    form.reset();
});

//Agregar las filas a la tabla
function addRow(id, name, email, identification, phone) {
const fila = document.createElement('tr');
fila.innerHTML = `
<td>${id}</td>
<td>${name}</td>
<td>${email}</td>
<td>${identification}</td>
<td>${phone}</td>
<td>
<button class= "edit">Editar</button>
<button class= "delete">Eliminar</button>
</td>
`;

//Eliminar registro
fila.querySelector('.delete').addEventListener('click', () => {
    fila.remove();
});

//Editar el registro

fila.querySelector('.edit').addEventListener('click', () => {
    const newName = prompt('Escriba el nuevo nombre:', name);
    const newEmail = prompt('Escriba el nuevo correo:', email);
    const newIdentification = prompt('Escriba la nueva identificación:', identification);
    const newPhone = prompt('Escriba el nuevo teléfono:', phone);

    if(newName && newEmail && newIdentification && newPhone) {
        fila.children[1].textContent = newName;
        fila.children[2].textContent = newEmail;
        fila.children[3].textContent = newIdentification;
        fila.children[4].textContent = newPhone;
    }
});

tableBody.appendChild(fila);
}

});