const router = require('express').Router()
const { walProductSearch } = require('./../services/walmart');

const sendResPayload = (req, res) => res.json(res.data)

router.route('/:product')
  .get(walProductSearch, sendResPayload)


module.exports = router;
