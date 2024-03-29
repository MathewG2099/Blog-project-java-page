function saveFormData(event) {
    event.preventDefault();
    var formData = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'blog.html';
}