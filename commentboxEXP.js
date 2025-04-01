document.getElementById("text").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    document.getElementById("postButton").click()
  }
})

let posts = []

posts = JSON.parse(localStorage.getItem("storage"))

let currentDate = new Date()
let myDate = (String(currentDate)).slice(4,21)

const button = document.getElementById("postButton")
button.addEventListener("click", createObj)

function createObj(event) {
  let nameEntered = document.getElementById("user").value
  let textEntered = document.getElementById("text").value
  let newObj = {"poster":nameEntered, "post":textEntered, "date":myDate}
  posts.unshift(newObj)
  event.preventDefault()
  console.log(posts)
  localStorage.setItem("storage", JSON.stringify(posts))

  let html = '';
  
  posts.forEach((element) => {
    newHTML = 
      `<div class = "card">
        <p class = "name">
          ${element.poster}
        </p>
        <p class = "datetime">
          ${element.date}
        </p>
        <p class = "words">
          ${element.post}
        </p>
      </div>\n`
    html += newHTML

  document.getElementById("user").value = '' // Empties the name box
  document.getElementById("text").value = '' // Empties the message box
  });

 document.querySelector('.container').innerHTML = html;
}




















/*
let message = ''
let person = ''
let poster = ''
let post = ''
let date = ''

function createObj() {
  currentDate = new Date()
  date = (String(currentDate)).slice(4,21)
  person = document.getElementById("user").value
  message = document.getElementById("text").value
  posts.push({poster:person, post:message, date:date})
  let posts_stringified = JSON.stringify(posts)
  localStorage.setItem("posts", posts_stringified)
  document.getElementById("user").value = '' // Empties the name box
  document.getElementById("text").value = '' // Empties the message box
}

let posts_destringified = JSON.parse(localStorage.getItem("posts"))

let html = '';
  
    posts_destringified.forEach((element) => {
      newHTML = 
      `<div class = "card">
        <p class = "name">
          ${element.poster}
        </p>
        <p class = "datetime">
          ${element.date}
        </p>
        <p class = "words">
          ${element.post}
        </p>
      </div>\n`
      html += newHTML
    });
  
    document.querySelector('.container').innerHTML = html;


document.getElementById("postButton").addEventListener("click", (createObj))

let commentsHTML = ''

posts.forEach(function1)
  function function1(posts) {
    html = `<p>${posts.poster}: ${posts.post}.</p>`
    commentsHTML += html
}

document.querySelector('.messageBoard').innerHTML = commentsHTML*/

document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("user").value = ''
  document.getElementById("text").value = ''
  
})
function newFunction() {
  console.log(posts)
}

