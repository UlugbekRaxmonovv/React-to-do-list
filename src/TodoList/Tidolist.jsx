import React,{useState} from 'react';
import './Todolist.css'

const Tidolist = () => {
    const [task,setTask] = useState(['salom']);
    const [newtask,setNewtask] =useState("");



    function handleInput(event){
        setNewtask(event.target.value);
    }


    function addTask(){
        if(newtask.trim() !== ""){
            setTask( t =>[...t,newtask])
            setNewtask('')
        }
    }


    function deletTask(index){
   const updatedTask = task.filter((_, i) => i !== index);
   setTask(updatedTask); 
    }


    function tomoveTask(index){

        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1] ,updatedTask[index]];
            setTask(updatedTask)
               }
    }




    function tomoveRask(index){
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1] ,updatedTask[index]];
            setTask(updatedTask)
               }
    }
    return (
        <div className='to-do-list'>
            <h1>To do list</h1>

            <div>
                <input type="text" 
                placeholder='Enter atask...'
                value={newtask}
                onChange={handleInput}/>

                <button
                onClick={addTask}
                 className='add-button'
                 >Add
                 </button>
            </div>
            <ol>
                {
                    task.map((task,index) =>
                    <li key={index}> 
                         <span>{task}</span>
                      <div className="go">
                        <div className="go1">
                        <button
                         onClick={() => deletTask(index)}
                           className='delete-button' >
                            delete
                         </button>


                         <button
                         onClick={() => tomoveTask(index)}
                           className='move-button'>
                           ✌
                         </button>

                         
                         <button
                         onClick={ () => tomoveRask(index)}
                           className='move-button'>
                          🤞
                         </button>
                        </div>
                      </div>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Tidolist;
