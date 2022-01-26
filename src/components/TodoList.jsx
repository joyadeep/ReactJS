import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MdEdit,MdDelete} from 'react-icons/md';
import {VscClearAll} from 'react-icons/vsc';
import '../styles/todolist.css';
import {add_todo, delete_todo, clear_todo} from '../Redux/action/index';
import { useRef } from 'react';


export const TodoList = () => {
  const newtodo=useRef("");
  const dispatch=useDispatch();
  const list=useSelector((state)=>state.todoReducer.list);

  return(
      <>
      <section className="container">
        <h1>Todo</h1>
        <div className="addfield">
          <input type="text" placeholder='Add new todo...' ref={newtodo}/>
          <input type="button" value="+" onClick={()=>dispatch(add_todo(newtodo.current.value),newtodo.current.value="")} />
        </div>

{list.length>0?
<>
{
          list.map((item)=>{
            return(
              <div className="todoitem" key={item.id}>
              <div className="item">{item.data}</div>
              {/* <div className="edit"><MdEdit/></div> */}
              <div className="delete" onClick={()=>dispatch(delete_todo(item.id))}><MdDelete/></div>
             
            </div>
            )
          })
        }
</>:
<h1>No todo available !</h1>
}
      
        {list.length>0 &&
        <div className="clearall" onClick={()=>dispatch(clear_todo())}>
          <VscClearAll/>
        </div>
}

      </section>
      </>
  );
};
