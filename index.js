// postButton.onclick = function(e) {
//     e.prevent
// }

// как сделать POST-запрос, чтобы создать пост
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
