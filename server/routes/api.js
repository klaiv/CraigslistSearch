const express = require('express');
const router = express.Router();
const craigslist = require('node-craigslist');


// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var merge = require('merge');

/* GET api listing. */
router.get('/', (req, res) => {
 // res.send('api works from routes');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB

  var posts = [];
  var cities = ["flagstaff", "mohave", "phoenix", "prescott", "showlow", "sierravista", "tucson", "yuma"];

  for(var i = 0; i < cities.length; i++) {
  //  posts.put(listings[i]);
  let client = new craigslist.Client({
    city : cities[i]
  });
  client
  .search(req.query.keyword)
  .then((listings) => {
    // play with listings here...


 // console.log(listings);
 posts = posts.concat(listings);
  })
  .catch((err) => {
  res.status(500).send(err);
  });

  }



let client2 = new craigslist.Client({
    city : "seattle"
  });
  client2
  .search(req.query.keyword)
  .then((listings) => {
    // play with listings here...

var result = posts.concat(listings);

result.sort(function(b, a) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
    //return parseFloat(a.date) - parseFloat(b.date);
});
  console.log(result);
    res.status(200).json(result);
   // listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
  res.status(500).send(err);
  });

//   axios.get(`${API}/posts`)
//     .then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
});

module.exports = router;
