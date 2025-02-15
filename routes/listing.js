const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js")
const { isOwner, validateListing } = require("../middleware.js")
const listingController = require("../controllers/listings.js")
const multer = require('multer')
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })


router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm)


router.get('/trending', listingController.trending);
router.get('/rooms', listingController.rooms);
router.get('/cities', listingController.city);
router.get('/mountains', listingController.mountains);
router.get('/castles', listingController.castles);
router.get('/pools', listingController.pools);
router.get('/camping', listingController.camping);
router.get('/farms',listingController.farms);
router.get('/arctic', listingController.arctic);
router.get('/bungalow',listingController.bungalow);
router.get('/beach', listingController.beach);

router.get('/search', listingController.search);


router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;