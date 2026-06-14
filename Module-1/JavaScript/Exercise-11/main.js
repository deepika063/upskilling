fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

.then(response => response.json())

.then(data => {

    const list = document.getElementById("posts");

    data.forEach(post => {

        const li = document.createElement("li");

        li.textContent = post.title;

        list.appendChild(li);

    });

})

.catch(error => console.log(error));
