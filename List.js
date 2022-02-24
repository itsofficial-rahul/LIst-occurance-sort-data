// var list_Item=[1,2,355,4,4,5]
// var dumy_arr=[]
// var dumy_arr=list_Item.concat(dumy_arr)
//     dumy_arr.sort((a,b)=>{
//    return a-b
// })

// let c=list_Item.join('');
// let d=dumy_arr.join('')

// if(c==d)
// {
//     console.log("sorted arry")
// }
// else{
//     console.log("not sorted order")
// }






//  2nd task      Occurance by shubham sir


// // const a = [4,3,6,3,4,3]

// // function count_duplicate(a){
// //  let counts = {}

// //  for(let i =0; i < a.length; i++){ 
// //      if (counts[a[i]]){
// //      counts[a[i]] += 1
// //      } else {
// //      counts[a[i]] = 1
// //      }
// //     }  
// //     for (let prop in counts){
// //         if (counts[prop] >= 2){
// //             console.log(prop + " counted: " + counts[prop] + " times.")
// //         }
// //     }
// //   console.log(counts)
// // }

// // count_duplicate(a)




// // 3rd task






//  3 rd Task sum of 0 find

var list=  [-25, -10, -7, -3, 2, 4, 8, 1]
var newArray =[];

function fun(a,n){      

for(let i = 0; i<a.length; i++)
{

 for(let j=i+1; j<a.length; j++)
 {     
     for(let k=j+1;k<a.length;k++)   
     {
     if((a[i]+a[j]+a[k])==n){        
     newArray.push([a[i],a[j],a[k]]);       
    }
  }
}
 }
}     

fun(list, 0)
console.log(newArray);






