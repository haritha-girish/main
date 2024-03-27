// //promise 

// let promise = new Promise<string>(function(resolve,reject){
//     console.log('Promise Pending....');
//     setTimeout(()=>{
//         resolve('Promise resolved!!');
//     },2000);
//     setTimeout(()=>{
//         reject('Prmoise rejected!!')
//     },3000)
// })

// //then / catch 
// promise.then((val)=>console.log(val));
// promise.catch((e)=>console.log('An error Occured!!'+e));


//aync & await 
 //returns a promise 

async function Day() : Promise<any> {
    let weekday = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Monday , Tuesday , Wednesday , Thursday , Friday')
        },3000)
    });
    let weekend = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Saturday, Sunday ')
        },3000)
    });
    
    console.log('Fetching Weekdays.....');
    let weekDay = await weekday;
    console.log('Week Days are : '+weekDay);
    console.log('Fetched Weekdays')
    console.log('Fetching Weekends.....');
    let weekEnd = await weekend;
    console.log('Week Ends are :'+weekEnd);
    console.log('Fetched Weekends')

    return [weekDay,weekEnd];

}

let result = Day();
result.then((val)=>val);


