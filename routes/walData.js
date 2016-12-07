const router = require('express').Router()
const { walProductSearch } = require('./../services/walmart');

const sendResPayload = (req, res) => res.json(res.data)

router.route('/:product')
  .get(walProductSearch, sendResPayload)
  //.get((req,res, next) => res.send('send'))


module.exports = router;
