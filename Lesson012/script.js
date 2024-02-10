var allChecked;

function addIngredient(ingredient) {
    const burgerList = document.getElementById('burger-list');
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'ingredient-checkbox';
    checkbox.value = ingredient;
    checkbox.addEventListener('change', updateButtonsState);
    const label = document.createElement('label');
    label.textContent = ingredient;
    label.className = 'checkbox-label';
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    burgerList.appendChild(listItem);
    updateButtonsState();
}

function toggleAll() {
    console.log(allChecked);
    const checkboxes = document.querySelectorAll('.ingredient-checkbox');
    const toggleAllButton = document.getElementById('toggle-all-button');
    const checked = toggleAllButton.checked;
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
    });
    updateButtonsState();
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('.ingredient-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentNode.remove();
        }
    });
    updateButtonsState();
}

function updateButtonsState() {
    const checkboxes = document.querySelectorAll('.ingredient-checkbox');
    const deleteButton = document.getElementById('delete-button');
    const toggleAllButton = document.getElementById('toggle-all-button');
    let atLeastOneChecked = false;
    allChecked = true;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            atLeastOneChecked = true;
        } else {
            allChecked = false;
        }
    });
    deleteButton.disabled = !atLeastOneChecked;
    toggleAllButton.disabled = checkboxes.length === 0;
    toggleAllButton.textContent = allChecked ? 'Сбросить выделенное' : '✓ Выделить все ингредиенты';
    if(checkboxes.length === 0) toggleAllButton.textContent = '';
}

function resetSelection() {
    const checkboxes = document.querySelectorAll('.ingredient-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateButtonsState();
}
