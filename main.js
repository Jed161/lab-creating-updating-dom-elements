let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

let secondSection = document.querySelector("section.posts")

let article = document.createElement("article")
secondSection.append(article)

let image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."

article.append(image)

let postsSection = document.querySelector(".posts")
postsSection.append(article)

console.log(firstSection)
console.log(secondSection)

let tag = document.createElement("h3")
tag.innerText = "Stop Planning"
article.append(tag)

let paragraph = document.createElement("p")
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph)

let aside = document.createElement("aside")
article.append(aside)

let asidePara = document.createElement("p")
aside.append(asidePara)

let strong = document.createElement("strong")
strong.innerText = "Read Time: "
asidePara.append(strong)

let span = document.createElement("span")
span.innerText = "4 Minutes"
asidePara.append(span)

let a = document.createElement("a")
asidePara.append(a)

a.innerText = "Read more..."
a.setAttribute("href", "#")

section.article.append(section.posts)

section.posts.article.append(section.article)