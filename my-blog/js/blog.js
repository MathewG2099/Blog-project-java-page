const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
});

document.addEventListener('DOMContentLoaded', function() {
    var formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        var postSection = document.getElementById('post');
        postSection.innerHTML = `
            <h2 class="post">${formData.title}</h2>
            <p class="post">${formData.content}</p>
            <div class="post-meta">
                <p class="Posted">Posted by: ${formData.username}</p>
            </div>
        `;
        localStorage.removeItem('formData'); 
    }
});