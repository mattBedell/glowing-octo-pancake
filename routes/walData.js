const router = require('express').Router()
const { walProductSearch } = require('./../services');

const sendResPayload = (req, res) => res.json(res.data)

router.route('/')
  .get(walProductSearch, sendResPayload)
