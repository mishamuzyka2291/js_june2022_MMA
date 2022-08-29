let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);
let post = url.searchParams.get('post');

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
let divPost = document.createElement('div');
divPost.classList.add('div-post');
container.appendChild(divPost);
fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then((response) => response.json())
    .then(posts => {

            for (const post in posts) {
                    let divPostKeys = document.createElement('div');
                    divPostKeys.innerText = `${post} -- ${posts[post]}`
                    divPostKeys.classList.add('div-post-keys');
                    divPost.appendChild(divPostKeys);
            }
    });
let divComments = document.createElement('div');
divComments.classList.add('div-comments');
container.appendChild(divComments);
// let ulComments = document.createElement('ul');
// ulComments.classList.add('ul-comments');
// divComments.appendChild(ulComments);
fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then((response) => response.json())
    .then(comments => {
        for (const comment of comments) {
            let ulDiv = document.createElement('div');
            ulDiv.classList.add('ul-div')

            for (const commentKey in comment) {
                let divCommentKey = document.createElement('div')
                divCommentKey.innerText = `${commentKey} -- ${comment[commentKey]}`;
                divCommentKey.classList.add('li-comment-key');
                ulDiv.appendChild(divCommentKey);
               // console.log(comment[commentKey]);
            }
            divComments.appendChild(ulDiv);
        }
    });

