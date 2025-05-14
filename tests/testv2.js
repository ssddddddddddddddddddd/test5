const fetch = require("node-fetch");
async function fn(){
  setTimeout(async()=>{
  let a = await fetch("http://127.0.0.1:3000/metrics");
  let a_json = await a.json();
  if(a_json.count < 0){
    throw new Error('Error');
  }
  },4000)
}
fn();
