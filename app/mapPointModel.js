var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pointSchema = new Schema({

	latlong : {type: [Number], require: true},
	comentario: {type: String, require: true},
	endereco : {type: String, required: true},
	file: {type: String, required: true}
});

//esse index suporta queries que  calculam geometrias em uma esfera como a do planeta. Esse index
//suporta todos as queries geoespaciais do mongodb
//Suporta dados armazenados como objetos GeoJSON e como pares de cordenadas
 pointSchema.index({latlong: '2dsphere'});

 module.exports = mongoose.model('points', pointSchema);