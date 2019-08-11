const Beer = require('../models/beer');
const Brand = require('../models/brand');

exports.index = (req, res) => {
  Beer.find()
    .then(beers => res.json(beers))
    .catch(err => res.status(404).json(err));
}


exports.show = (req, res) => {
  Beer.findById(req.params.id)
  .then(beers => res.json(beer))
  .catch(err => res.status(404).json(err));
} 


exports.create = (req, res) => {
	Beer.create(req.body.beer)
    .then(() => res.status(200).send({sucess: "created"}))
    .catch(err => res.status(404).json(err));
  };

exports.edit = (req, res) => {

  Beer.findById(req.params.id)
    .then(beers => res.json(beers))
    .catch(err => res.status(404).json(err));
};

exports.update = (req, res) => {
  Beer.updateOne({
      _id: req.body.id
    }, req.body.beer, {
      runValidators: true
    })
    .then(() => res.status(200).send({sucess:"sucessfully updated"}))
    .catch(err => res.status(404).json(err));
};

exports.destroy = (req, res) => {
  Beer.deleteOne({ _id: req.body.id})
    .then(() => res.status(200).send({sucess:"deleted sucessfully"}))
    .catch(err => res.status(404).json(err));
};