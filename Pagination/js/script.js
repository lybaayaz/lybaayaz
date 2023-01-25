


let currentPage = 1;
let totalusers = users.length;
let itemsOnSinglePage = 10;
let extraItemsOnLastPage = totalusers % itemsOnSinglePage;
let pagesAvailable = parseInt(totalusers / itemsOnSinglePage);



function initialSetup() {
    if (extraItemsOnLastPage > 0) {
        pagesAvailable = pagesAvailable+1;
    }
    document.querySelector(".page-header h3").innerHTML = totalusers
    createPages()
}


function createPages() {
    let paginationHtml = "<ul>"

    for (let i = 1; i <= pagesAvailable; i++) {
        paginationHtml += '<li><a onclick="pageClick(' + i + ')">' + i + '</a></li>';
    }
    paginationHtml += "</ul>"
    document.querySelector(".pagination").innerHTML = paginationHtml
    createUserList()
}


function pageClick(page) {

    currentPage = page
    createUserList()
}

function createUserList() {

    let listHtml = ""
        let startingIndex = (currentPage - 1) * itemsOnSinglePage
        let endingIndex = (currentPage * itemsOnSinglePage)-1
    
        console.log(currentPage)
        console.log(pagesAvailable)
        if (extraItemsOnLastPage > 0 && currentPage == pagesAvailable) {

            endingIndex = (startingIndex+extraItemsOnLastPage)-1

        }
    
        for (let index = startingIndex; index <= endingIndex; index ++) {
            listHtml += `
      <li class="contact-item cf">
                <div class="contact-details">
                    <img class="avatar" src="${users[index]["image"]}">
                    <h3> ${users[index]["name"]}</h3>
                    <span class="email">iboya.vat@example.com</span>
                </div>
                <div class="joined-details">
                       <span class="date">${users[index]["joined"]}</span>
               </div>
            </li>
    `
    }
    document.querySelector(".contact-list").innerHTML = listHtml

    }

    initialSetup()
