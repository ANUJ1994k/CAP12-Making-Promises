//Question - 1 

//creating an array of marks and cut off score
let marks=[9,7,6.5,8.8,9.8,6.9]
let cutoffscore=5;


//defining codingScoreCSheck function
function codingScoreCheck(arr,cutoffscore){
    return new Promise((resolve,reject)=>{  //creating promise
        setTimeout(()=>{  //creating async with settimeout 2000ms
let averagemarks=marks.reduce((sum,ele)=>sum+ele)/marks.length; //finding averagemarks
if (averagemarks >= cutoffscore) {  //comparing average marks with cuttoffscore
    return resolve(`you have passed coding test with average marks :${averagemarks}`);
} else {
    return reject(`Sorry you haven’t cleared the coding round with average marks :${averagemarks} below the cutoffmarks.${cutoffscore}`);
}

        },2000)
    }
)}

    codingScoreCheck(marks,cutoffscore).then((val)=>{console.log(val)}).catch((val)=>{console.log(val)});


    //Qestion2

    //defining HUKUMUScoreCheck() function
    
    function HUKUMUScoreCheck(arr,cutoffscore){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{  //creating async with settimeout 2000ms
        let hukumuaveragemarks=marks.reduce((sum,ele)=>sum+ele)/marks.length; //finding hukumuaveragemarks
        if (hukumuaveragemarks >= cutoffscore) {  //comparing hukumuaverage marks with cuttoffscore
            return resolve(`you have passed Hukkumu interview with average marks :${hukumuaveragemarks}`);
        } else {
            return reject(`Sorry you haven’t cleared the huumu round with average marks :${hukumuaveragemarks} below the cutoffmarks.${cutoffscore}`);
        }
        
                },2000)
            }
        )}
        
        HUKUMUScoreCheck(marks,cutoffscore).then((val)=>{console.log(val)}).catch((val)=>{console.log(val)});


        //Question3
        //defining function unitMovementCheck with param averageCodingScore, averageHukumuScore, cut off Score, 

       
        function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoffScore){
         return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                let averageHukumuandcodingScore=(averageCodingScore+averageHukumuScore)/2;
            if(averageHukumuandcodingScore>cutoffScore){
                return resolve(`you have cleared final round cutoff with average ${averageHukumuandcodingScore}`);
            }else{
                return reject(`Sorry you haven’t cleared the final cutoff`);
            }

         })
            },2000)
        }

        unitMovementCheck(8,8,5).then((val)=>{console.log(val)}).catch((val)=>console.log(val));