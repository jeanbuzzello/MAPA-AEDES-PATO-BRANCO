var express = require('express');
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

   var multer = require('multer');

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "http://localhost");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });


mongoose.connect('mongodb://localhost/focosDeDengue');


//Seta os arquivos estaticos
app.use(express.static(__dirname + '/public'));
//Diretorio do bower
app.use('/bower_components', express.static(__dirname + '/bower_components'));

/**
O express.bodyParser() é uma função que facilita a construção de objetos JSON apartir de uma submissão de dados de um formulário html, ele simplesmente monta um objeto apartir dos valores do campo name, em que o campo name cria um objeto e atributos e o campo value insere valores nesses objetos.
**/

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


 var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            cb(null, './public/uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname);
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');
    app.post('/upload', function(req, res) {

    	console.log('dentro do /upload');
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        })
    });


require('./app/route.js')(app)

app.listen(9000);
console.log('Ouvindo a porta 9000');





