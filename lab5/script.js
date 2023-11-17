document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = {
      fullname: document.getElementById('fullname').value,
      idcard: document.getElementById('idcard').value,
      birthdate: document.getElementById('birthdate').value,
      address: document.getElementById('address').value,
      email: document.getElementById('email').value
    };

    const formatOutput = (data) => {
      return Object.entries(data).map(([key, value]) => `${key.toUpperCase()}: ${value}`).join('\n');
    };

    alert(formatOutput(formData));
  });

  // Створюємо таблицю
  const table = document.createElement('table');
  table.style.margin = 'auto';
  table.style.borderCollapse = 'collapse';

  for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
      const cell = row.insertCell();
      cell.innerText = i * 6 + j + 1;
      cell.style.border = '1px solid black';
      cell.style.textAlign = 'center';
      cell.style.padding = '10px';

      // Особливі властивості для клітинки 36
      if (i * 6 + j === 35) {
        cell.addEventListener('mouseover', function() {
          this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        });
        let clickTimeout;
        let isClickPending = false;

        cell.addEventListener('click', function() {
          if (!isClickPending) {
            isClickPending = true;
            clickTimeout = setTimeout(() => {
              let colorPicker = document.createElement('input');
              colorPicker.type = 'color';
              colorPicker.oninput = () => {
                cell.style.backgroundColor = colorPicker.value;
              };
              colorPicker.click();
              isClickPending = false;
            }, 200);
          } else {
            clearTimeout(clickTimeout);
            isClickPending = false;
          }
        });

        cell.addEventListener('dblclick', function() {
          const color = this.style.backgroundColor;
          for (let k = 0; k < 6; k++) {
            table.rows[k].cells[j].style.backgroundColor = color;
          }
        });
      }
    }
  }

  document.body.appendChild(table);
});
