const fetch = require('node-fetch');

function walProductSearch(req, res, next) {
  const WALMART_PRODUCT_URI = `http://api.walmartlabs.com/v1/search?apiKey=${process.env.WALMART_KEY}&query=${req.params.product}`
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
