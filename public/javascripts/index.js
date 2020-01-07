// All html elements that are needed
const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("berder-box");
const berderStorageEl = document.getElementById("berder-storage");
const devouredberdersEl = document.getElementById("devoured-berders");

// displays all the berders in the db
async function displayHamberders(){
    try{
        let allTheHamberdersHtml = "";
        let allTheDevouredHambersHtml = "";
        // performs a get request to the backend, which performs a findAll request to the db
        // how to rename during deconstruction https://wesbos.com/destructuring-renaming/
        const {data: allHamberders} = await axios.get("/api/hamberder")
        // Loops through all the berders in the database and creates divs for them
        for(let i=0; i < allHamberders.length; i++){
            const {id, hamberder_name: hamberderName, devoured} = allHamberders[i]
            // If the berder has been devoured it gets different HTML than not devoured
            if(devoured){
                const devouredHamberderHtml = `
                    <div class="hamberder ${id}">
                        ${id}: ${hamberderName}
                    </div>`
                // adds the created html to the overall devour string that stores all the html
                allTheDevouredHambersHtml += devouredHamberderHtml;            
            }else{
                const devouredHamberderHtml = `
                    <div class="hamberder ${id}">
                        ${id}: ${hamberderName}
                        <button id=${id} class="devour-btn">Devour!</button>
                    </div>`
                // adds the created html to the overall created berders string that stores all the html
                allTheHamberdersHtml += devouredHamberderHtml;
            }
        }
        // Updates the html elements
        berderStorageEl.innerHTML = allTheHamberdersHtml;
        devouredberdersEl.innerHTML = allTheDevouredHambersHtml;
    }
    catch(err){
        console.log("Error calling backend to get all the hamberders: ", err);
    }
    try{
        await startDevourBtns()
    }
    catch(err){
        console.log("Error starting event listeners for devour btns: ", err)
    }
}
displayHamberders();

async function createHamberder(){
    await startHamberderBtn();
}
createHamberder(); 

// adds event listeners to all the devour buttons
function startDevourBtns(){
    // Gets all the created devour buttons
    const devourBtnEls = document.querySelectorAll(".devour-btn")
    // loops through all the devour buttons and starts event listeners for them all
    for(let i=0; i < devourBtnEls.length; i++){
        devourBtnEls[i].addEventListener("click", function(){
            // gets the id on the devour button, which is id of the corresponding row in the database
            const hamberderId = event.target.id;
            devourTheHamberder(hamberderId)
        })
    }
}

// updates the db when the berder is devoured
async function devourTheHamberder(hamberderId){
    // performs a put request to the backend, which performs an update of the db
    await axios.put(`/api/hamberder/${hamberderId}`)
    // reruns the code that generates the berder html to reflect the changes to the db
    await displayHamberders()
}

// all the functionality for the create berder button
function startHamberderBtn(){
    // starts an event listener for the burger create button
    createBtnEl.addEventListener("click", async function(){
        // https://www.w3schools.com/jsref/event_preventdefault.asp
        let hamberderName = "";
        await event.preventDefault()
        try {
            // gets the text in that the user described the hamberder
            hamberderName = await getHamberderName();
          } catch (error) {
            console.error(error);
          }
        
        try {
            // performs a post request to the backend, which performs a create in the db
            await axios.post('/api/hamberder',{hamberderName});
            // reruns the code that generates the berder html to reflect the changes to the db
            displayHamberders();
          } catch (error) {
            console.error(error);
          }
    })
}

// gets the users input of the berder name
function getHamberderName(){
    const hamberderName = berderBoxEl.value;
    return hamberderName;
}