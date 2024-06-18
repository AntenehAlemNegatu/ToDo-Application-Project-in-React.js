import { useState } from "react"
export default function ToDoList (){
const [tasks,setTasks] = useState(["Eat Breakfast", "Take a shower","Walk the dog"]);
const [nextTask, setNewTask] = useState("");
function handleInputChange(event){
  setNewTask(event.target.value);
}
function addTask(){
    if(nextTask.trim() !== ""){
        setTasks(...tasks => [...tasks, nextTask]);
        setNewTask("");
    }

}
function deleteTask(index){
    const updatedTaks = tasks.filter((task,i) => i !== index);
    setTasks(updatedTaks);

}
function moveTaskUp(index){
    if(index > 0){
        const updatedTaks = [...tasks];
        [updatedTaks[index], updatedTaks[index - 1]] = [updatedTaks[index-1],updatedTaks[index]];
        setTasks(updatedTaks);
    }


}
function moveTaskDown(index){
   if(index > 0){
        const updatedTaks = [...tasks];
        [updatedTaks[index], updatedTaks[index + 1]] = [updatedTaks[index + 1],updatedTaks[index]];
        setTasks(updatedTaks);
    } 
    

}
return(
    <div className="to-do-list">
        <h1></h1>
        <div>
            <input
            type ="text"
            placeholder="Enter a task..."
            value={nextTask}
            onChange={handleInputChange}/>
            <button className="add-button"
            onClick={addTask}>
                Add
            </button>
        </div>
        <ul>
            {tasks.map((task,index) => 
                  <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>deleteTask</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>
                        UP</button>
                     <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>   
                  </li>
                   )
            
            
            
            }
        </ul>
    </div>
);

}