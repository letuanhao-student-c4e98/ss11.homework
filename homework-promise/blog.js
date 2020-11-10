
let dataContentDetail;
let mainContent = document.getElementById("mainContent")

async function getContent() {
    let dataContent = await fetch("https://jsonplaceholder.typicode.com/posts");
    let dataContentDetail = await dataContent.json();
    console.log(dataContentDetail)
    for(let i = 0; i < dataContentDetail.length; i++) {
        console.log(dataContentDetail[i])
        mainContent.innerHTML += `<div class="container main pt-5 ">
        <h3 class="titleEachContent">${dataContentDetail[i].title}</h3>
        <p>${dataContentDetail[i].body}</p>
        </div>`
        if(i == 1) {
            break
        }
    }
}
getContent();
