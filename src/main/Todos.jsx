import React from 'react';
const Todos = ({data, setData}) => {

  function removeTodo(id){
   setData(
    data.filter(item => {
      if(id !== item.id){
        return item
      }
    })
   )
  }
  function doFavorite(id) {
    setData(
      data.map(item => {
        if(id === item.id){
          item.favorite = !item.favorite
        } 
        return item
      })
    )
    console.log(data);
  }
  return (
    <div className='todosBlock'>
     <ul>
      {data.map(item => {
        return (
          <li 
            key={item.id} 
            className={item.favorite ? 'listItemFavorite' : 'listItem'}>
              <span
                className={item.favorite ? 'favorite' : 'noFavorite'}
                onClick={(e) => {
                  doFavorite(item.id)
                }}>+</span>{item.todo} <button onClick={() => removeTodo(item.id)}>x</button></li>
        )
        })}
     </ul>
    </div>
  );
};

export default Todos;