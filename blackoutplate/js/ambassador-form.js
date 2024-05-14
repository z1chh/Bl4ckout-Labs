function addSocialMediaField() {
    const container = document.getElementById('socialMediaFields');
    const newField = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'socialMedia';
    const input = document.createElement('input');
    input.type = 'text';
    newField.appendChild(checkbox);
    newField.appendChild(input);
    container.appendChild(newField);
}
