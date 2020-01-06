const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("berder-box");

async function createHamberder(){
    await startHamberderBtn()
}
createHamberder();

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
            const response = await axios.put('/api/hamberder',{hamberderName});
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    })
}

function getHamberderName(){
    const hamberderName = berderBoxEl.value;
    return hamberderName;
}

// function test(){
//     console.log("Can I get your order?!")
// }
// test();