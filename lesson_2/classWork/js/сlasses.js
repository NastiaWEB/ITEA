/*
  Задание:

    I. Написать класс Post который будет уметь:

      1. Конструктор:
          title
          image
          description
          likes

      2. Методы
          render -> отрисовать элемент в ленте
          likePost -> увеличивает счетчик постов
          + Методы для изменения title, image, description
          + бонус. Сделать получение и изменение через set и get

    II. Написать класс Advertisment который будет экстендится от класа Post
        но помимо будет иметь другой шаблон вывода, а так же метод для покупки обьекта

        buyItem -> выведет сообщение что вы купили обьект

    III.  Сгенерировать ленту из всех постов что вы добавили в систему.
          Каждый третий пост должен быть рекламным

    <div class="post">
      <div class="post__title">Some post</div>
      <div class="post__image">
        <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*Se0gnNo-tsQG-1jeu_4TJw.png"/>
      </div>
      <div class="post__description"></div>
      <div class="post__footer">
        <button class="post__like">Like!</button>
      </div>
    </div>




*/
document.addEventListener("DOMContentLoaded", renderPostList);

class Post {
  constructor({id, name, description, image, likesCount, like = false}){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.like = like;
    this.likesCount = likesCount;
    this.root = document.querySelector("#posts_feed");
  }

  changePostData(type, newValue){
    this[type] = newValue;
    this.displayPosts();
  }

  likeChange = () => {
    this.like = !this.like;
    if(this.like){ this.likesCount++}
    else{ this.likesCount--}
    this.displayPosts();
  }

  postTemplate() {
    return ` <div class="post__title" >${this.name}</div>
              <div class="post__image">
                <img src="${this.image}"/>
              </div>
              <div class="post__description">${this.description}</div>
              <div class="post__footer">
                <button class="post__like">Like! ${this.likesCount}</button>
              </div>`;
  }
  displayPosts(){
    const selectedPost = document.getElementById(this.id);
    this.createPostItem(selectedPost);
  }
  createPostItem(wrapper){
    const template = this.postTemplate();
    wrapper.innerHTML = template;
    this.addEventListeners(wrapper)
  }
  addEventListeners(wrapper){
    wrapper.querySelector(".post__like").addEventListener("click", this.likeChange);
  }
  render(){
    let post = document.createElement('div');
    post.className = "post_wrapper";
    post.id = this.id;
    this.createPostItem(post)
    this.root.appendChild(post);
  }
};

class Advertisment extends Post {
  constructor() {
    super()
  }
}

const data = [
  {
    id: 1,
    link: "#1",
    name: "Established fact123123",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 10
  },
  {
    id: 2,
    link: "#1",
    name: "Established fact",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 0
  },
  {
    id: 3,
    link: "#3",
    name: "Suffered alteration",
    description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg",
    likesCount: 3
  },{
    id: 4,
    link: "#4",
    name: "Discovered source",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg",
    likesCount: 5,
  },{
    id: 5,
    link: "#5",
    name: "Handful model",
    description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg",
    likesCount: 36
  },
];

function renderPostList() {
  let newPost;

  data.map(data => {
    newPost = new Post(data);
    newPost.render();
  })
}


// function Card ({id, link, name, description, image, likesCount, like = false, comments = []})  {
//   this.id = id;
//   this.link = link;
//   this.name = name;
//   this.description = description;
//   this.image = image;
//   this.like = like;
//   this.likesCount = likesCount;
//
//   this.onLikeChange = () => {
//     this.like = !this.like;
//     if(this.like){ this.likesCount += 1}
//     else if(!this.like && this.likesCount !== likesCount){ this.likesCount -= 1}
//     console.log(this.likesCount);
//    };
//
//   this.displayPost = () => {
//     const {id, link, name, description, image, like, likesCount, comments} = this;
//     return (`<div id=${id} class="post-wrapper">
//                 <img src=${image} alt="image" class="post-img"/>
//                 <div class="post-content-wrapper">
//                     <a href=${link} class="post-link" >${name}</a>
//                     <p class="post-content">${description}</p>
//                     <img src=${like ? "liked.svg": "heart.svg"} class="icon" "/>
//                     <span>${likesCount}</span>
//                 <div>
//             </div>`);
//     };
// };
//
// function createNewItem(item) {
//   const post = new Card(item);
//   let listItem = document.createElement('li');
//   listItem.innerHTML = post.displayPost();
//   listItem.querySelector(".icon").addEventListener('click', post.onLikeChange);
//   return listItem;
// };
//
// function displayPostPage() {
//   let posts = document.createElement('ul');
//   posts.className = "posts-list"
//   data.map(item => {
//     const newItem = createNewItem(item);
//     posts.appendChild(newItem);
//   });
//   renderArea.appendChild(posts);
// };
