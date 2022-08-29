let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(users => {


        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main-div')
        document.body.appendChild(mainDiv)

        for (const userKey in users) {
                let divInfo = document.createElement('div');
                divInfo.classList.add('U-info');
                divInfo.innerText = `${userKey} - ${users[userKey]}`;

                let ul = document.createElement('ul')
                divInfo.appendChild(ul);


                if (userKey === 'address') {
                    for (const adders in users.address) {

                        let li = document.createElement('li');
                        divInfo.classList.add('div-address');
                        li.innerText = `${adders} -- ${users.address[adders]}`;
                        ul.appendChild(li);
                        if (adders === 'geo') {
                            for (const geo in users.address.geo) {
                                let li = document.createElement('li');
                                li.innerText = `${geo} -- ${users.address.geo[geo]}`;
                                ul.appendChild(li);
                            }
                        }
                    }

                }
                mainDiv.appendChild(divInfo);
                if (userKey === 'company') {
                    for (const company in users.company) {
                        let li = document.createElement('li');
                        li.classList.add('address');
                        li.innerHTML = `${company} -- ${users.company[company]}`;
                        ul.appendChild(li);
                    }
                }
            }


        let button = document.createElement('button');
        button.innerText = 'post of current user';
        button.onclick = function (e) {

let ulDiv = document.createElement('ul');
ulDiv.classList.add('ul-div');
document.body.appendChild(ulDiv);

                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then((response) => response.json())
                    .then(posts => {
                        for (const post of posts) {

                            for (const postKey in post) {
                                if (postKey === 'title') {
                                    let mainLiDiv = document.createElement('div');
                                    mainLiDiv.classList.add('main-li-div');

                                    let postLi = document.createElement('div');
                                    postLi.classList.add('title');
                                    postLi.innerText = `${post[postKey]}`;
                                    let a = document.createElement('a');
                                    let p = document.createElement('p');
                                    p.innerText= 'More Info';
                                    a.href = `post-details.html?id=${id}&post=${post.id}`;

                                    ulDiv.appendChild(mainLiDiv);
                                    mainLiDiv.append(postLi, a);
                                    a.appendChild(p);



                                }

                            }

                        }

                    });


        }

        document.body.appendChild(button);


    });
// На жаль ніяк не виходило видалити [obj obj] розумію що це document create але пофіксити не вийшло