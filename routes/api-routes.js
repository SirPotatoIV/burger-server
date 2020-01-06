// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.get("api/hamberder", function(req, res){
        console.log(req)
        res.json("Got chu a hamberder.")
    })
}