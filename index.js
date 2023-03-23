// postButton.onclick = function(e) {
//     e.prevent
// }

// как сделать POST-запрос, чтобы создать пост
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

function getPosts(posts) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            document.getElementsByClassName("container").innerText = posts;
        })
        .catch(err => console.log(err));
}


