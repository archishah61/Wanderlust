const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist")
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    let { path: url, filename } = req.file;
    console.log(req.file);
    let newListing = new Listing(req.body.listing);
    
    console.log("Creating Listing...");
    
    // Destructure listing properties
    const { title, description, price, location, country, category, owner } = newListing;
    
    console.log({ title, description, price, location, country, category, owner });

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();
    req.flash('success', 'Listing created successfully');
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist")
        res.redirect("/listings");
    }

    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload", "/upload/h_300,w_250")
    res.render("listings/edit.ejs", { listing, originalImage });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    // Update the listing in the database
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated")
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted")
    res.redirect("/listings");
};

module.exports.trending = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Trending';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.rooms = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Rooms';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.castles = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Castles';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.beach = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Beach';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.city = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Iconic Cities';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.mountains = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Mountains';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.pools = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Pools';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.camping = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Camping';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.farms = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Farms';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.arctic = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Arctic';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.bungalow = (async (req, res) => {
    const listings = await Listing.find({})
    let listingCategory = 'Bungalow';
    res.render('listings/filter.ejs', { listingCategory, listings });
});

module.exports.search=async (req,res)=>{
    const listings = await Listing.find({})
    let search = req.query.destination;
    res.render('listings/search.ejs',{search,listings});
};
