document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const interestSelect = document.getElementById('interest');
    const interests = Array.from(interestSelect.options)
                           .filter(option => option.selected)
                           .map(option => option.value);