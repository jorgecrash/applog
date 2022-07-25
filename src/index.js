const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const methodOverride=require('method-override');
const session=require('express-session');
//inicializaciones
/* iniciar apliacion*/ 
const app=express();
/*iniciar bas de datos */
require('./database');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));//permite unir directorios
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    revase:true,
    saveUninitialized:true
}))

//global variables
//routers
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//static fieles

app.use(express.static(path.join(__dirname,'public')));
//server is listenning
app.listen(app.get('port'),()=>{
    console.log("server on port",app.get("port"));
});

