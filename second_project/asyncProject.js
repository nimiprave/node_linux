//working on promises and async function 

function timeOut(){
    return new Promise((resolve,reject)=>{
      
       try {
        setTimeout(()=>{
            console.log("Resolved section inside time out")
             resolve("Resolved inside the timeout function")
         },1000)

       } catch (error) {

        console.log("Rejected section")
        reject("rejected")
       } 
     //  resolve("timeout Resolved")
        
    })
}

async function showSuccess(){
   var results = await timeOut()
   console.log(`Results after executing the promise: ${results}`)
}

// start
console.log("main Started")
showSuccess();
console.log("main ended")