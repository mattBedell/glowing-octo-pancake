const fetch = require('node-fetch');
const searchTerm = 'iphone'
WALMART_PRODUCT_URI = `http://api.walmartlabs.com/v1/search?apiKey=${process.env.WALMART_KEY}&query=${searchTerm}`

function walProductSearch() {
  fetch(WALMART_PRODUCT_URI)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.log(`---> Error in models > function walProductSearch: ---- ${err}`);
    next(err);
  })
}

module.exports = {
  walProductSearch
}
