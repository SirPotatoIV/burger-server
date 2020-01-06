// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.get("/api/hamberder", async function(req,res){
        try{
            const allHamberders = await db.Hamberders.findAll()
            // console.log(allHamberders)
            res.json(allHamberders)
        }
        catch(err){
            console.log("Error getting all hamberders from the database: ", err)
        }
    })
    
    app.post("/api/hamberder", async function(req, res){
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

    app.put("/api/hamberder/:id", async function(req, res){
        // console.log(req.body)
        const hamberderToDevour = req.params.id;
        try{
            const hamberderDevoured = await db.Hamberders.update({devoured: true},{where:{id: hamberderToDevour}})
            console.log(hamberderDevoured)
            res.json(hamberderDevoured)
        }
        catch(err){
            console.log("Error creating a new hamberder: ", err)
        }
    })
}