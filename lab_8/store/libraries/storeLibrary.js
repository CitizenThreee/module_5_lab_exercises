const axios = require('axios');

class Store {
    constructor() {
        this.products;
        this.sortedProducts;
    }

    async setup () {
        let response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data;
        return response.data;
    }

    getProducts (limit, category, sort, search) {

        if(this.products == undefined){
            this.setup();
            return {};
        }

        this.sortedProducts = this.products.filter(item => {
            if(category != undefined && category != "" && category != item.category) return false;
            if(search != undefined && search != "" && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });

        

        if(sort != undefined && sort != "none"){
            switch (sort){
                case "least expensive":
                    this.sortedProducts.sort((item1, item2) => item1.price - item2.price);
                    break;
                case "most expensive":
                    this.sortedProducts.sort((item1, item2) => item2.price - item1.price);
                    break;
                case "name a-z":
                    this.sortedProducts.sort((item1, item2) => item2.title.toLowerCase() < item1.title.toLowerCase() ? 1 : -1);
                    break;
                case "name z-a":
                    this.sortedProducts.sort((item1, item2) => item2.title.toLowerCase() > item1.title.toLowerCase() ? 1 : -1);
            }
        };

        if(limit != undefined && limit > 0){
            this.sortedProducts.splice(limit);
        }

        return this.sortedProducts;
    }
}

module.exports = Store