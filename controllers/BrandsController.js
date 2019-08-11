const Brand = require('../models/brand');


exports.index = (req, res) => {
	Brand.find()
    .then(brands => {
      res.render('brands/index', {
        brands: brands,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


exports.new = (req, res) => {
	res.render('brands/new', {
    title: `New Brand`
  });
}

exports.create = (req, res) => {
	Brand.create(req.body.brand)
    .then(() => {
      res.redirect('/brands');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });


}

exports.edit = (req, res) => {
  Brand.findById(req.params.id)
    .then(brand => {
      res.render('brands/edit', {
        title: `Edit ${brand.name}`,
        brand: brand
      })
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.update = (req, res) => {
  Brand.updateOne({
      _id: req.body.id
    }, req.body.brand, {
      runValidators: true
    })
    .then(() => {
      res.redirect('/brands');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.destroy = (req, res) => {
  Brand.deleteOne(req.body.id)
    .then(() => {
      res.redirect('/brands');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};