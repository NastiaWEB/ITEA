document.addEventListener("DOMContentLoaded", renderPostList);


const ID = () => ('_' + Math.random().toString(36).substr(2, 9));
const data = [
  {
    id: ID(),
    link: "#1",
    name: "Established fact123123",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 10
  },
  {
    id: ID(),
    link: "#1",
    name: "Established fact",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 0
  },
  {
    id: ID(),
    link: "#3",
    name: "Suffered alteration",
    description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg",
    likesCount: 3
  },
  {
    id: ID(),
    link: "#4",
    name: "Discovered source",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg",
    likesCount: 5,
  },
  {
    id: ID(),
    link: "#5",
    name: "Handful model",
    description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg",
    likesCount: 36
  },
  {
    id: ID(),
    link: "#1",
    name: "Established fact",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 0
  },
  {
    id: ID(),
    link: "#3",
    name: "Suffered alteration",
    description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg",
    likesCount: 3
  },
  {
    id: ID(),
    link: "#4",
    name: "Discovered source",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg",
    likesCount: 5,
  },
  {
    id: ID(),
    link: "#5",
    name: "Handful model",
    description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg",
    likesCount: 36
  },
  {
    id: ID(),
    link: "#1",
    name: "Established fact",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
    likesCount: 0
  },
  {
    id: ID(),
    link: "#3",
    name: "Suffered alteration",
    description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg",
    likesCount: 3
  },
  {
    id: ID(),
    link: "#4",
    name: "Discovered source",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg",
    likesCount: 5,
  },
  {
    id: ID(),
    link: "#5",
    name: "Handful model",
    description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg",
    likesCount: 36
  }
];

const advData = [
  {id: ID(), img:"https://news.rambler.ru/img/2018/10/13224654.555620.1244.jpeg"},
  {id:ID(), img: "https://gdetraffic.com/img/news_2283/tp/710x293__t.jpg"},
  {id: ID(), img:"https://news.rambler.ru/img/2018/10/13224654.555620.1244.jpeg"},
  {id:ID(), img: "https://gdetraffic.com/img/news_2283/tp/710x293__t.jpg"},
  {id: ID(), img:"https://news.rambler.ru/img/2018/10/13224654.555620.1244.jpeg"},
  {id:ID(), img: "https://gdetraffic.com/img/news_2283/tp/710x293__t.jpg"}];


class Post {
  constructor({id, name, description, image, likesCount, like = false}){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.like = like;
    this.likesCount = likesCount;
  }

  likeChange = () => {
    this.like = !this.like;
    if(this.like){ this.likesCount++}
    else{ this.likesCount--}
    const selectedPost = document.getElementById(this.id);
    this.createPostItem(selectedPost);
  }

  postTemplate() {
    return `
    <div class="post__title" >${this.name}</div>
    <div class="post__image"><img src="${this.image}"/></div>
    <div class="post__description">${this.description}</div>
    <div class="post__footer">
      <button class="post__like">Like! ${this.likesCount}</button>
    </div>`;
  }

  createPostItem(wrapper){
    wrapper.innerHTML = this.postTemplate();
    this.addEventListeners(wrapper);
  }

  addEventListeners(wrapper){
    wrapper.querySelector(".post__like").addEventListener("click", this.likeChange);
  }

  render(){
    const node = document.querySelector("#posts_feed");
    let post = document.createElement('div');
    post.className = "post_wrapper";
    post.id = this.id;
    this.createPostItem(post);
    node.appendChild(post);
  }
};

class Advertisment {
  constructor({id, img}) {
    this.id = id;
    this.img = img;
  }
  postTemplate() {
    return `<div class="adv__image" id="${this.id}"><img src="${this.img}"/> <button onClick="alert('This product added to card!')"> Add to card </button> </div>`;
  }
  displayAdv(selectedPost){
    selectedPost.insertAdjacentHTML("afterEnd", this.postTemplate())
  }
}

function addAdvertisment() {
  let newAdv;
  advData.map((adv, i) => {
    let location = document.getElementById("posts_feed").children[i==0 ? 1 : 3*i+1];
    newAdv = new Advertisment(adv);
    location ? newAdv.displayAdv(location) : false;
  })
};

function renderPostList() {
  let newPost;

  data.map(data => {
    newPost = new Post(data);
    newPost.render();
  });

  addAdvertisment();
};
