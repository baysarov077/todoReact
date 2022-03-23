import React, { useState } from 'react';
import { fakeDataBase } from '../fakeDataBase';
import Todos from '../main/Todos';
const Input = () => {

  const [data, setData] = useState(fakeDataBase)
  const [value, setValue] = useState('')

  const addTodo = () => {
    setValue('')
    console.log(data);
    if(value){
      setData([
        {
          id: new Date(),
          todo: value,
          completed: false,
          favorite: false
        },
        ...data
      ]
      )
    }
    

  }

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className='inputBlock'>
        <input value={value} onChange={(e) => handleInput(e)} placeholder='Введите текс' type="text" />
        <button onClick={addTodo}>+</button>
      </div>
      <div className="main">
        <Todos data={data} setData={setData} />
      </div>
    </>
  );
};

export default Input;