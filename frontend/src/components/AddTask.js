import axios from 'axios';

function AddTask() {
  const task={
   task:"",
   day:"",
   reminder :false,
  }
  const inserttask = () => {
    axios.post('/api/addTask',task).then(res => console.log(res.data));
  };
  
    return (
    <form >
      <div className="form-control">
        <label>Task</label>
        <input
          placeholder="Add Task"
          onChange={(e) => (task.task = e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          placeholder="Add Day & Time"
          onChange={(e) => (task.day = e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => (task.reminder=e.currentTarget.checked)}
        />
      </div>

      <input type="submit" onClick={inserttask} value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
