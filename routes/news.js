const express = require('express'),
	router = express.Router();

const News = require('../models/news'),
	newsContorller = require('../controllers/news.js');

//* index page
router.get('/api/news', newsContorller.newsIndex);

//* create page
router.post('/api/news', newsContorller.createNews);

//* show page
router.get('/api/news/:id', newsContorller.showNews);

//* update page
router.patch('/api/news/:id', newsContorller.updateNews);

//* delete page
router.delete('/api/news/:id', newsContorller.deleteNews);



//! used to input temp data for testing purpose
// const News = require('../models/news-model')
// router.get('/api/temp', async(req,res)=>{
//     try {
//         for(let i=1;i<=10;i++) {
//             const newObj = new News({
//                 title: `News ${i}`,
//                 body: `This is the body of news ${i}`,
//                 createdAt: Date.now(),
//                 author: 'John Doe',
//             })
//             await newObj.save()
//         }
//         // res.send('Done')
//         res.status(200).send("ok")
//     } catch (error) {
//         // res.send("error",error)
//         res.status(400).send("no")
//     }
// })



module.exports = router;