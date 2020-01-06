const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("berder-box");
const berderStorageEl = document.getElementById("berder-storage");
const devouredberdersEl = document.getElementById("devoured-berders");

async function displayHamberders(){
    try{
        let allTheHamberdersHtml = "";
        let allTheDevouredHambersHtml = "";
        // how to rename during deconstruction https://wesbos.com/destructuring-renaming/
        const {data: allHamberders} = await axios.get("/api/hamberder")
        console.log(allHamberders)
        for(let i=0; i < allHamberders.length; i++){
            const {id, hamberder_name: hamberderName, devoured} = allHamberders[i]
            console.log(devoured)
            if(devoured){
                const devouredHamberderHtml = `
                    <div class="hamberder ${id}">
                        ${id}: ${hamberderName}
                    </div>`
                allTheDevouredHambersHtml += devouredHamberderHtml;            
            }else{
                const devouredHamberderHtml = `
                    <div class="hamberder ${id}">
                        ${id}: ${hamberderName}
                        <button id=${id} class="devour-btn">Devour!</button>
                    </div>`
                allTheHamberdersHtml += devouredHamberderHtml;
            }
        }
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

function startDevourBtns(){
    const devourBtnEls = document.querySelectorAll(".devour-btn")
    console.log(devourBtnEls)
    for(let i=0; i < devourBtnEls.length; i++){
        devourBtnEls[i].addEventListener("click", function(){
            const hamberderId = event.target.id;
            devourTheHamberder(hamberderId)
        })
    }
}

async function devourTheHamberder(hamberderId){
    await axios.put(`/api/hamberder/${hamberderId}`)
    await displayHamberders()
}

function startHamberderBtn(){
    createBtnEl.addEventListener("click", async function(){
        // https://www.w3schools.com/jsref/event_preventdefault.asp
        let hamberderName = "";
        await event.preventDefault()
        try {
            hamberderName = await getHamberderName();
          } catch (error) {
            console.error(error);
          }
        
        try {
            const {data} = await axios.post('/api/hamberder',{hamberderName});
            // console.log(response);
            displayHamberders();
          } catch (error) {
            console.error(error);
          }
    })
}

function getHamberderName(){
    const hamberderName = berderBoxEl.value;
    return hamberderName;
}

    // const {id, hamberder_name: hamberderName} = createdHamberder;
    // console.log(id, hamberderName)
    // let berderBoxHtml = berderStorageEl.innerHTML;
    // const newHamberderEl = `
    //     <div class="hamberder ${id}">
    //         <p>${hamberderName}</p>
    //         <button id=${id}>Devour!</button>
    //     </div>`
    // berderBoxHtml = berderBoxHtml + newHamberderEl;
    // berderStorageEl.innerHTML = berderBoxHtml;
// }