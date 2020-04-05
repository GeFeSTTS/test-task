const basicTable = document.querySelector('table');

function addField() {
    const formatDate = (date) => {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        var yy = date.getFullYear();
      
        return dd + '.' + mm + '.' + yy;
    }

    const errorMessage = document.querySelector('.error-message');
    const wrongEmail = document.querySelector('.wrong-email');
    const name = document.getElementById('name').value;
    const surName = document.getElementById('surname').value;
    const email = document.getElementById('email').value;

    const day = Math.ceil(Math.random() * 31);
    const month = Math.ceil(Math.random() * 12);
    const year = Math.ceil(Math.random() * 2030);
    const date = new Date(year, month, day);
    const formatedDate = formatDate(date);
    
    const arr = [name, surName, email];
    
    const tableRow = document.createElement('tr');
    const tableCellDate = document.createElement('td');
    const tableCellCheckBox = document.createElement('td');
    tableCellDate.innerText = formatedDate;
    tableCellCheckBox.innerHTML = "<input type='checkbox'>";

    for(let i = 0; i <= arr.length - 1; i++ ) {
        let tableCell = document.createElement('td');
        tableCell.innerText = arr[i];

        tableRow.appendChild(tableCell);
    }

    if (!email.includes("@")) {
        wrongEmail.style.display = 'inline';
        errorMessage.style.display = 'none';
    } else if (name && surName && email) {
        tableRow.appendChild(tableCellDate);
        tableRow.appendChild(tableCellCheckBox);
        basicTable.appendChild(tableRow);
        wrongEmail.style.display = 'none';
        errorMessage.style.display = 'none';
    } else {
        wrongEmail.style.display = 'none';
        errorMessage.style.display = 'inline';
    }

    
}

function deleteRows() {
    const table = document.querySelector('table');
    const inputs = document.querySelectorAll('[type="checkbox"]');
    let i = inputs.length;

    while (i--) {
        const input = inputs[i];
        if (input.checked) {
            const tr = input.parentNode.parentNode;
            table.deleteRow(tr.rowIndex);
        }
    }

}

function editData()  {
    const inputs = document.querySelectorAll('[type="checkbox"]');
    let i = inputs.length;
    while (i--) {
        const input = inputs[i];
        if (input.checked) {
            document.querySelector('.edit-form').style.display = 'block';
            const tr = input.parentNode.parentNode;
            const arrWords = [...tr.querySelectorAll('td')].map(el => el.textContent);
            document.getElementById('edit-name').value = arrWords[0];
            document.getElementById('edit-surname').value = arrWords[1];
            document.getElementById('edit-email').value = arrWords[2];
            document.getElementById('edit-date').value = arrWords[3];
        }
    }
}

function acceptEditData() {
    const inputs = document.querySelectorAll('[type="checkbox"]');
    const editName = document.getElementById('edit-name');
    const editSurname = document.getElementById('edit-surname');
    const editEmail = document.getElementById('edit-email');
    const editDate= document.getElementById('edit-date');
    const errorMessage = document.querySelector('.error-edit-message');
    const wrongEmail = document.querySelector('.wrong-edit-email');

    let i = inputs.length;
    while (i--) {
        const input = inputs[i];
        if (input.checked) {
            const tr = input.parentNode.parentNode;
            if (!editEmail.value.includes("@")) {
                wrongEmail.style.display = 'inline';
                errorMessage.style.display = 'none';
            } else if (editName.value && editSurname.value && editDate.value) {
                tr.querySelector('td:nth-child(1)').textContent = document.getElementById('edit-name').value;
                tr.querySelector('td:nth-child(2)').textContent = document.getElementById('edit-surname').value;
                tr.querySelector('td:nth-child(3)').textContent = document.getElementById('edit-email').value;
                tr.querySelector('td:nth-child(4)').textContent = document.getElementById('edit-date').value;
                wrongEmail.style.display = 'none';
                errorMessage.style.display = 'none';
                document.querySelector('.edit-form').style.display = 'none';
            } else {
                wrongEmail.style.display = 'none';
                errorMessage.style.display = 'inline';
            }
        }
    }
}
