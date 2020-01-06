const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("berder-box");

function createHamberder(){
    console.log(createBtnEl)
    createBtnEl.addEventListener("click", function(){
        // https://www.w3schools.com/jsref/event_preventdefault.asp
        event.preventDefault()
        const hamberderName = berderBoxEl.value;
        console.log(hamberderName)
    })
}
createHamberder();
// function test(){
//     console.log("Can I get your order?!")
// }
// test();