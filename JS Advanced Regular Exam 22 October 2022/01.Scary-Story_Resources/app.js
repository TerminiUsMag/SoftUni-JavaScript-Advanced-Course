window.addEventListener("load", solve);

function solve() {
  let btn = document.getElementById('form-btn');
  btn.addEventListener('click', publish);


  function getFormElements() {

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let storyGenre = document.getElementById('genre');
    let story = document.getElementById('story');

    return { firstName, lastName, age, storyTitle, storyGenre, story };

  }

  function publish(event) {
    let form = getFormElements();
    let firstName = form.firstName;
    let lastName = form.lastName;
    let age = form.age;
    let storyTitle = form.storyTitle;
    let storyGenre = form.storyGenre;
    let story = form.story;


    //console.log(firstName.value);
    //console.log(lastName.value);
    //console.log(age.value);
    //console.log(storyTitle.value);
    //console.log(storyGenre.value);
    //console.log(story.value);

    if (firstName.value === '' || lastName.value === '' || age.value == '' || storyTitle.value === '' || storyGenre.value === '' || story.value === '') {
      return;
    }

    let publishBtn = event.target;
    publishBtn.setAttribute('disabled', 'true');

    let previewList = document.getElementById('preview-list');

    let elStory = document.createElement('p');
    elStory.textContent = story.value;

    let elGenre = document.createElement('p');
    elGenre.textContent = `Genre: ${storyGenre.value}`;

    let elTitle = document.createElement('p');
    elTitle.textContent = `Title: ${storyTitle.value}`;

    let elAge = document.createElement('p');
    elAge.textContent = `Age: ${age.value}`;

    let elName = document.createElement('h4');
    elName.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let articleEl = document.createElement('article');
    articleEl.appendChild(elName);
    articleEl.appendChild(elAge);
    //console.log(articleEl);
    articleEl.appendChild(elTitle);
    articleEl.appendChild(elGenre);
    articleEl.appendChild(elStory);

    let btnSave = document.createElement('button');
    btnSave.textContent = 'Save Story';
    btnSave.setAttribute('class', 'save-btn');
    btnSave.addEventListener('click', save);

    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit Story';
    btnEdit.setAttribute('class', 'edit-btn');
    btnEdit.addEventListener('click', edit);

    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete Story';
    btnDelete.setAttribute('class', 'delete-btn');
    btnDelete.addEventListener('click', deleteFn);

    let liEl = document.createElement('li');
    liEl.setAttribute('class', 'story-info');
    liEl.appendChild(articleEl);
    liEl.appendChild(btnSave);
    liEl.appendChild(btnEdit);
    liEl.appendChild(btnDelete);

    previewList.appendChild(liEl);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    storyGenre.value = '';
    story.value = '';
  }

  function edit(event) {
    let btnEdit = event.target;
    let btnSave = document.getElementsByClassName('save-btn')[0];
    let btnDelete = document.getElementsByClassName('delete-btn')[0];

    btnEdit.setAttribute('disabled', 'true');
    btnSave.setAttribute('disabled', 'true');
    btnDelete.setAttribute('disabled', 'true');

    let btnPublish = document.getElementById('form-btn');
    //btnPublish.setAttribute('disabled','false');
    btnPublish.removeAttribute('disabled');

    let elLi = btnEdit.parentElement;
    let elArticle = elLi.firstChild;
    elArticle.remove();
    elLi.remove();


    let name = elArticle.firstChild;
    name.remove();
    let nameString = name.textContent;
    nameString = nameString.substring(6);
    let splitName = nameString.split(' ');
    let firstName = splitName[0];
    let lastName = splitName[1];

    let age = elArticle.firstChild;
    age.remove();
    let ageString = age.textContent.substring(5);

    let title = elArticle.firstChild;
    title.remove();
    let titleString = title.textContent.substring(7);

    let genre = elArticle.firstChild;
    genre.remove();
    let genreString = genre.textContent.substring(7);

    let story = elArticle.firstChild;
    let storyString = story.textContent;

    let form = getFormElements();

    form.firstName.value = firstName;
    form.lastName.value = lastName;
    form.age.value = ageString;
    form.storyTitle.value = titleString;
    form.storyGenre.value = genreString;
    form.story.value = storyString;

  }

  function save() {

    let divEl = document.getElementById('main');
    divEl.remove();
    let newDiv = divEl.cloneNode(false);
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(newDiv);
    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";
    newDiv.appendChild(h1);



  }
  function deleteFn(event) {
    let btnDelete = event.target;
    let listItem = btnDelete.parentElement;
    listItem.remove();

    let publishBtn = document.getElementById('form-btn');
    publishBtn.removeAttribute('disabled');
  }


}