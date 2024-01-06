import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no,display,text,setTodos}) => {

  const toggle =(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
   for(let i=0;i<data.length;i++){
    if(data[i].no===no){
      if(data[i].display === ""){
        data[i].display="line-through";
      }
      else{
        data[i].display="";
      }
      break;
    }
   }
   setTodos(data)
  }

  const deletetodo=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data =data.filter((todo)=>todo.no !== no)
    setTodos(data)

  }


  return (
    <div className='todoItems'>
      <div className={`todo-items-container ${display}`}onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt=""/>:<img src={tick} alt=""/>}
        <div className="todo-items-text">{text}</div>
      </div>
      <img className="crossicon" src={cross} alt="" onClick={()=>{deletetodo(no)}}/>
    </div>
  );
}

export default TodoItems;
