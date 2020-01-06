const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("berder-box");
const berderStorageEl = document.getElementById("berder-storage");

async function createHamberder(){
    await startHamberderBtn()
}
createHamberder();

async function displayHamberders(createdHamberder){
    try{
        const {data: allHamberders} = await axios.get("/api/hamberder")
        console.log(allHamberders)
    }
    catch(err){
        console.log("Error calling backend to get all the hamberders: ", err);
    }
}
displayHamberders();
    
    
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
            const {data} = await axios.put('/api/hamberder',{hamberderName});
            // console.log(response);
            displayHamberder(data);
          } catch (error) {
            console.error(error);
          }
    })
}

function getHamberderName(){
    const hamberderName = berderBoxEl.value;
    return hamberderName;
}

