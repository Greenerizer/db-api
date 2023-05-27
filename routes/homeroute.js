const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello').status(200);
});

module.exports = router;