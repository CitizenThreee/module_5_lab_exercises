const storeLib = require('../libraries/storeLibrary') 
const store = new storeLib();

const setup = async (req, res) => {
    let response = await store.setup();
    res.status(200);
    res.json({result:response});
}

const getProducts = (req, res) => {
    let limit = parseInt(req.query.limit);
    let category = req.query.category;
    let sort = req.query.sort;
    let search = req.query.search;
    let products = store.getProducts(limit, category, sort, search);
    res.status(200);
    res.json({result:products});
}

module.exports = {setup, getProducts}