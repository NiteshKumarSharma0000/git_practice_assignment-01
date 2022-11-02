
let num=5;
let count=0
for(let i=0;i<num;i++){
	if(num%i==0){
		count++
	}
}if(count>=1){
	console.log("not prime")
}else{
	console.log("prime")
}