document.addEventListener("DOMContentLoaded", displayPostPage);
const renderArea = document.getElementById('renderArea');
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


function Card ({id, link, name, description, image, likesCount, like = false, comments = []})  {
  this.id = id;
  this.link = link;
  this.name = name;
  this.description = description;
  this.image = image;
  this.like = like;
  this.likesCount = likesCount;

  this.onLikeChange = () => {
    this.like = !this.like;
    if(this.like){ this.likesCount += 1}
    else if(!this.like && this.likesCount !== likesCount){ this.likesCount -= 1}
    console.log(this.likesCount);
   };

  this.displayPost = () => {
    const {id, link, name, description, image, like, likesCount, comments} = this;
    return (`<div id=${id} class="post-wrapper">
                <img src=${image} alt="image" class="post-img"/>
                <div class="post-content-wrapper">
                    <a href=${link} class="post-link" >${name}</a>
                    <p class="post-content">${description}</p>
                    <img src=${like ? "liked.svg": "heart.svg"} class="icon" "/>
                    <span>${likesCount}</span>
                <div>
            </div>`);
    };
};

function createNewItem(item) {
  const post = new Card(item);
  let listItem = document.createElement('li');
  listItem.innerHTML = post.displayPost();
  listItem.querySelector(".icon").addEventListener('click', post.onLikeChange);
  return listItem;
};

function displayPostPage() {
  let posts = document.createElement('ul');
  posts.className = "posts-list"
  data.map(item => {
    const newItem = createNewItem(item);
    posts.appendChild(newItem);
  });
  renderArea.appendChild(posts);
};
