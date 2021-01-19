
interface MinMaxItem {
	min: number; 
	max: number; 
}
// Feel free to add new properties and methods to the class.
export class MinMaxStack {
	minMaxStack : MinMaxItem[]; 
	stack : number[]; 
	
	constructor(){
		this.minMaxStack = []; 
		this.stack = []; 
	}
	
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
		// solution without using the pop method
		// let poppedNum = this.arr[this.arr.length - 1]; 
		// // then you pop the last number
		// this.arr.length = this.arr.length - 1; 
		// // then you return it so that the user can see what was popped
		// return poppedNum || -1
		
		// solution using the pop method
		this.minMaxStack.pop(); 
		return this.stack.pop(); 
		
  }

  push(number: number) {
    // Write your code here.
		// initialize a new minMax object
		const newMinMax = { min: number, max: number }; 
		// if this array has legnth then compare to old one
		if(this.minMaxStack.length){
		// get the last minMax object 
		const oldMinMax = this.minMaxStack[this.minMaxStack.length - 1]; 
		// then compare here and update then newMinMax
		newMinMax.min = Math.min(oldMinMax.min, number) 
		newMinMax.max = Math.max(oldMinMax.max, number) 
		}
		this.minMaxStack.push(newMinMax); 
		this.stack.push(number); 
  }

  getMin() {
    // Write your code here.
	return this.minMaxStack[this.minMaxStack.length - 1].min; 
  }

  getMax() {
    // Write your code here.
	return this.minMaxStack[this.minMaxStack.length - 1].max; 
  }
}
