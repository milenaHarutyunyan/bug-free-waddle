// Calculator functionality
document.getElementById('calculateBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').textContent = 'Result: ' + result;
});

// Form with live data fetching
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;

    if (username) {
        // Fetching data from an API (example: JSONPlaceholder API)
        fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const user = data[0];
                    document.getElementById('user-name').textContent = user.name;
                    document.getElementById('user-email').textContent = user.email;
                    document.getElementById('user-username').textContent = user.username;
                } else {
                    alert('User not found!');
                    clearUserData();
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                alert('An error occurred while fetching data.');
            });
    } else {
        alert('Please enter a username.');
    }
});

function clearUserData() {
    document.getElementById('user-name').textContent = 'N/A';
    document.getElementById('user-email').textContent = 'N/A';
    document.getElementById('user-username').textContent = 'N/A';
}
document.getElementById('view-code').addEventListener('click', function() {
    alert('View the source code of my portfolio.');
});

document.getElementById('figma-project').addEventListener('click', function() {
    window.open('https://www.figma.com/file/your-design-project-id', '_blank');
});