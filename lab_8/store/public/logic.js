const inputElement = document.getElementById('search');
inputElement.addEventListener('input', function() { refreshSelection(); });

setUpData();

async function setUpData () {
    products = await axios.get('/store/setup').then(response => response.data).then(data => data.result);
    console.log("setting up data...");
    console.log(products);
    setCards(products);
}

//add a card to the page with title, price, description, and image
function addCard(title, price, text, image, icon){
    const itemTemplate = document.getElementById("item-template").content.cloneNode(true);
    itemTemplate.querySelector(".item-icon").setAttribute('icon', icon);
    itemTemplate.querySelector(".item-image").src = image;
    itemTemplate.querySelector(".item-title").innerText = title;
    itemTemplate.querySelector(".item-price").innerText = "$" + price;
    itemTemplate.querySelector(".item-description").innerText = text;
    document.getElementById("item-container").appendChild(itemTemplate);
}

function setCards(products){
    document.getElementById("item-container").innerHTML = "";

    if(!Array.isArray(products)) return;

    products.forEach(item => {
        let itemIcon;
        switch(item.category){
            case "men's clothing":
                itemIcon = "ph:t-shirt"
                break;
            case "women's clothing":
                itemIcon = "ph:dress"
                break;
            case "electronics":
                itemIcon = "ph:monitor"
                break;
            case "jewelery":
                itemIcon = "mdi:ring"
        }
        addCard(item.title, item.price, item.description, item.image, itemIcon)
    })
}

//Refresh all cards based on the 'selectedItems' variable
async function refreshSelection(limit = 0, category = "", sort = "none", search = ""){
    category = document.getElementById("category").value;
    search = document.getElementById("search").value;
    sort = document.getElementById("sort").value;
    products = await axios.get(`/store/getProducts?limit=${limit}&category=${category}&sort=${sort}&search=${search}`).then(response => response.data).then(data => data.result);
    
    console.log(products);

    setCards(products);
}
