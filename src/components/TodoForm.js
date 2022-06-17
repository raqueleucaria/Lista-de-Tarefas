import { useState, useEffect, useRef } from "react";



function TodoForm(props) {
   const [input, setInput] = useState(props.edit ? props.edit.value: '');  
   
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });

   const handChange = e => {
        setInput(e.target.value);
   }
   
   const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('')
    }

    
    

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input 
            type="text" 
            placeholder="Edite sua tarefa" 
            value={input} 
            name='text' 
            className="todo-input-edit"
            onChange={handChange}
            ref={inputRef}
        />
        <button className="todo-button-edit">Atualizar</button>
        </>
        ) : 
        (
        <>
        <input 
          type="text" 
          placeholder="Adicione uma tarefa" 
          value={input} 
          name='text' 
          className="todo-input"
          onChange={handChange}
          ref={inputRef}
      />
      <button className="todo-button">Adicionar</button>
      </>
      ) 
    }
        
    </form>
  )
}

export default TodoForm