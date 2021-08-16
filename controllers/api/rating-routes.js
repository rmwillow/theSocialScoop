const router = require("express").Router();
const { Rating} = require("../../models");

// get all show info
router.get(('/'), (req, res) => {
    Rating.findAll({
        attributes: [
            "id", "rating"
        ]
    })
    .then(showData => res.json(showData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// // get all ratings info
// router.get(('/'), (req, res) => {
//     Rating.findAll({
//         include: [
//             {
//                 model: User,
//                 attributes: ["id", "username"]
//             },
//             {
//                 model: Show,
//                 attributes: ['id', 'title']
//             }
//         ],

//     })
//         .then(ratingData => res.json(ratingData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// //adding post route for testing
// // router.post('/', (req, res) => {
// //     // create a new rating
// //     Rating.create({
// //         rating: req.body.rating
// //     })
// //         .then(dbRatingData => res.json(dbRatingData))
// //         .catch(err => {
// //             console.log(err);
// //             res.status(500).json(err);
// //         });
// // });


// // create new product
// router.post('/', (req, res) => {
//     Rating.create({
//         rating: req.body.rating,
//         show_id: req.body.show_id,
//         user_id: req.body.user_id,
//         show_id: req.body.show_id
//     })
//         .then((rating) => {
//             // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//             if (req.body.ratingIds.length) {
//                 const ratingTagIdArr = req.body.ratingIds.map((show_id) => {
//                     return {
//                         user_id: rating.id,
//                         show_id,
//                     };
//                 });
//                 return rating.bulkCreate(ratingTagIdArr);
//             }
//             // if no product tags, just respond
//             res.status(200).json(product);
//         })
//         .then((ratingTagIds) => res.status(200).json(ratingTagIds))
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json(err);
//         });
// });
module.exports = router;