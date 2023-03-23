// postButton.onclick = function(e) {
//     e.prevent
// }

//задание 2
// как сделать POST-запрос, чтобы создать пост

function createPost() {
    let post = {
        title: document.getElementById("titlePost").value,
        text: document.getElementById("textPost").value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
        .then(response => response.json())
        .then(post => {
            console.log(post);
            document.getElementById("container").innerText = post;
        })
        .catch(err => console.log(err));
}



//задание 1
// function getPosts(posts) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(posts => {
//             console.log(posts);
//             document.getElementsByClassName("container").innerText = posts;
//         })
//         .catch(err => console.log(err));
// }
// getPosts();

// function postPosts() {

// }


