const expressUncode = (app,express) =>{
    app.use(express.urlencoded({ extended: true })); 
}

module.exports = expressUncode