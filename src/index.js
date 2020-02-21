
exports.min = function min (array) {
	if(!Array.isArray(array))return 0;
	if(!array.length)return 0;
	let min=0;
  for(let i=0; i<array.length; i++){
  	min = Math.min(array[i],min);
  }
  return min;
}

exports.max = function max (array) {
	if(!Array.isArray(array))return 0;
	if(!array.length)return 0;
  let max=0;
  for(let i=0; i<array.length; i++){
  	max = Math.max(array[i],max);
  }
  return max;
}

exports.avg = function avg (array) {
	if(!Array.isArray(array))return 0;
	if(!array.length)return 0;
  let avg=0;
  for(let i=0; i<array.length; i++){
  	avg+=array[i];
  }
  avg=avg/array.length;
  return avg;
}
