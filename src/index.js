const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.children[1];

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            
            title.innerText = data.title;
            summary.innerText= data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);