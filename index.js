// задание 1
function getPosts(posts) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            // document.getElementById("title").innerText = posts.title;
            // document.getElementById("body").innerText = posts.body;

            // let div1 = document.createElement('div1');
            // div1.innerHTML = `<h2>${posts.title}</h2><br/><p>${posts.body}</p>`;
            // document.body.append(div1);
            console.log(posts[0].title, posts[0].body);




            var allPosts = [];

            for (var post in posts) {
                if (posts.hasOwnProperty(post)) {
                    allPosts.push(post);
                }
            }


            allPosts.forEach((item) => {
                console.log('Пост: ' + item)

                let div1 = document.createElement('div1');
                div1.innerHTML = `<h2>Пост</h2><br/><p>${item}</p>`;
                document.body.append(div1);

            })
        })
        .catch(err => console.log(err));
}


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
            div.innerHTML = `<h2>${post.title}</h2><br/><p>${post.text}</p>`;
            document.body.append(div);
        })
        .catch(err => console.log(err));
}