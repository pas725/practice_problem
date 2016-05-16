

var arr = [ 2 , 3 , -4, 5, -5, -4, 5 , 4, 2, 0, 4, 1 , -3 , -2, 0, 1];

var fbLength = 5;
var fbArr = [];
var numOfFb = 7; 


initOperationalArray(fbArr,fbLength);
console.log('----- :',fbArr);


fillOperationalArray(arr, fbArr, arr.length);
console.log('----- :',fbArr);

 
var output = process(fbArr, numOfFb);
console.log('----- Output:',output);


function initOperationalArray(arr, length){
	for(var i=0;i<=length;i++){
		arr[i] = [];
	}
}

function fillOperationalArray(sourceArr, operationalArr, sourceArrLength){
	for(var i=0;i<sourceArrLength;i++){

		var num = sourceArr[i];
		operationalArr[ Math.abs(num)].push(num);
	}
}

function process(fbArr, numOfFb){	
	var cnt = 0;
	var output = [];
	for(i=5 ; i>=0 ;i--){

		var row = fbArr[i];
		console.log('---row :',row);
		for(var j=0 ;j<row.length && cnt<numOfFb;j++){
			output.push(row[j]);			
			cnt++;
		}
		if(cnt >= numOfFb){
				break;
			}
	}
	return output;
}