window.addEventListener("load", solve);

function solve() {
    let button = document.getElementById('publish-btn');
    //console.log(button)
    button.addEventListener('click', onButtonClick);
    let clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', clear);
    function onButtonClick() {

        let postTitle = document.getElementById('post-title');//getting title value
        let title = postTitle.value;
        //console.log(title);
        postTitle.value = '';
        let titleEl = document.createElement('h4');
        titleEl.textContent = title;

        let postCategory = document.getElementById('post-category');//getting category value
        let category = postCategory.value;
        //console.log(category);
        postCategory.value = '';
        let categoryEl = document.createElement('p');
        categoryEl.textContent = 'Category: ' + category;

        let postContent = document.getElementById('post-content');
        let content = postContent.value;
        //console.log(content);
        postContent.value = '';
        let contentEl = document.createElement('p');
        contentEl.textContent = "Content: " + content;

        let article = document.createElement('article');
        article.appendChild(titleEl);
        article.appendChild(categoryEl);
        article.appendChild(contentEl);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'action-btn edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let approveBtn = document.createElement('button');
        approveBtn.setAttribute('class', 'action-btn approve');
        approveBtn.textContent = 'Approve';
        approveBtn.addEventListener('click', approve);


        let li = document.createElement('li');
        li.setAttribute('class', 'rpost');
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);

        let ul = document.getElementById('review-list');
        ul.appendChild(li);



    }

    function edit(event) {
        let btn = event.target;
        let parentLi = btn.parentElement;
        //console.log(parentLi);
        let article = parentLi.firstChild;
        parentLi.remove();
        //console.log(article);
        let title = article.firstChild;
        title.remove();
        //console.log(title);
        let category = article.firstChild;
        category.remove();
        //console.log(category);
        let content = article.firstChild;
        content.remove();
        //console.log(content);
        article.remove();

        let postTitle = document.getElementById('post-title');
        postTitle.value = title.textContent;

        let postCategory = document.getElementById('post-category');
        postCategory.value = category.textContent.substring(10)

        let postContent = document.getElementById('post-content');
        postContent.value = content.textContent.substring(9);
    }

    function approve(event) {
        let btn = event.target;
        let parentLi = btn.parentElement;
        parentLi.lastChild.remove();
        parentLi.lastChild.remove();
        parentLi.remove();

        let postUl = document.getElementById('published-list');
        postUl.appendChild(parentLi);
    }

    function clear(event) {
        let published = document.getElementById('published-list');

        let cloned = published.cloneNode(false);

        let parent = published.parentElement;
        published.remove();
        parent.appendChild(cloned);
    }
}