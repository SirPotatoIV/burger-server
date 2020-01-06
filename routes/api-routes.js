// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.put("/api/hamberder", async function(req, res){
        // console.log(req.body)
        const {hamberderName} = req.body;
        try{
            const newHamberder = await db.Hamberders.create({hamberder_name: hamberderName})
            res.json(newHamberder)
        }
        catch(err){
            console.log("Error creating a new hamberder: ", err)
        }
    })
}