const mongoose = require(`mongoose`);

const BeerSchema = new mongoose.Schema({
	name: {
		type: String,
    	required: true
	},
	brand: {
		type: String,
    	required: true
	},
	size: {
		type: String,
		enum: ['CANS','BOTTLES','KAGS'],
		default: 'CANS'
	}
},{
	timestamps: true
});

module.exports = mongoose.model('Beer', BeerSchema);