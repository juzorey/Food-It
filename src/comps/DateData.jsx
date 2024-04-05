import { useState, useEffect, useContext, useRef } from "react";
import FoodContext from "./SearchFoodDataContext.js";
import searchFoodContextData from './SearchFoodDataContext.js';


const DateData = ()=>{
const DataContext = useContext(FoodContext) // gives me access to all data in the context
const {head} = useContext(searchFoodContextData)
// if this doesnt work then ill have to do a linked list 
//array that contains each days data( caloirie goal,calories consumed, breakfast compoenent disply(the array of the foods),marcos sum and array for the breakfest log)
const DataObject = {
  4:{
  calGoal: 2000,


  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},


0:{
  calGoal: 1,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},
1:{
  calGoal: 2,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},
2:{
  calGoal: 3,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},
3: {
  calGoal: 4,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},
5:{
  calGoal: 5,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
},
6: {
  calGoal: 6,
  calConsumed: 1500,
  breakfast: [],
  macros: {
    carbs: 0,
    protein: 0,
    fat: 0,
  },
}




}




//variable chosen data by click in nav
let chosenDate =  3
//variable based on date compoenent 
let actualData = 3
///  i know this is too much. its easier with just an objext bc then im supposed to have a standar data with nothign that it reverts it to and from there it polymorphs into the data i want
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Method to traverse the list from head to tail
  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Method to traverse the list from tail to head
  traverseBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // Method to get a node at a specific index
  getNodeAtIndex(index) {
    if (index < 0) return null; // Handle negative index
    let current = this.head;
    let count = 0;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.append(DataObject[0]);
// doublyLinkedList.append(DataObject.1);
// doublyLinkedList.append(DataObject.2);
// doublyLinkedList.append(DataObjectToday);
// doublyLinkedList.append(DataObject.4);
// doublyLinkedList.append(DataObject.5);
// doublyLinkedList.append(DataObject.6);

useEffect(()=>{
  // console.log("Node at index 3:", doublyLinkedList.getNodeAtIndex(head)); // Output: Node object at index 2
  console.log(`Node at index + ${head} + :`,DataObject[head]); // Output: Node object at index 2

},[head])
//this information is what will dicate where it goes and whats displayed










  return(
    <div>

    </div>
  )

}
export default DateData
