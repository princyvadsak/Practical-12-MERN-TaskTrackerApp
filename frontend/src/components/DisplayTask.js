import axios from "axios";
import { useEffect, useState } from "react";

//import { FaTimes } from "react-icons/fa";

const DisplayTask = () => {

    useEffect(()=>{
        getAllTask();
    },[]);

    const getAllTask = () => {
        axios.get("/api/displayTask").then((res) => setTask(res.data.data));
    };
    const deleteTask = (id) => {
        axios.delete(`/api/deleteTask/${id}`).then((res) => {console.log(res.data)});
      };
      const toggleReminder = (id,reminder) => {
        axios.put(`/api/toggleReminder/${id}/${reminder}`).then((res) => {console.log(res.data)});
      };

    const [task,setTask] = useState([]);
return(
    
                        
                            task.map((item,index) => {
                                return(

                                    <div key={index}>
                                        <div className={item.reminder?"reminder":"task"} onDoubleClick={()=>{toggleReminder(item._id,item.reminder)}}>
                                    <h3>
                                     {item.task}  
                                      <div className="fa fa-close" style={{color: "red"}} onClick= {()=>{deleteTask(item._id)}}></div>
                                    </h3>

                                    <div className="edit">
                                    <h4> {item.day}
                                    <div className="fa fa-edit" style={{color: "red"}} ></div>
                                     </h4>
                                     </div>
                                    </div>
                                  </div>
                                )
                            })
)             
};

export default DisplayTask;
