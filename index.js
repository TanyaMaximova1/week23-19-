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

//задание 2
postButton.onclick = function (e) {
    e.preventDefault();

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
            let div = document.createElement('div');
            // div.innerHTML = document.getElementById("container").innerText = post.title + " " + post.text;

            div.innerHTML = `<h2>${post.title}</h2><br/><p>${post.text}</p>`;
            document.body.append(div);
        })
        .catch(err => console.log(err));
}