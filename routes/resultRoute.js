const express =  require('express');
const { postResult, getresult } = require('../controllers/resultConTroller');
const router = express.Router();



router.post('/result',postResult);
router.get('/result',getresult);

module.exports = router;