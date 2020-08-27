import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { startGetUsers, createUsers } from './redux/reducers/users.actions'
import { getPost } from './redux/reducers/posts.actions'

function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users.users)
  const posts = useSelector(store => store.posts.posts)

  const handleClick = (e) => {
    dispatch(startGetUsers('dieguito'))
  }

  const handlePostClick = (e) => {
    dispatch(getPost('obtener post'))
  }

  const newUser = {
                    id: 5000,
                    name: 'Nuevo creado por diego',
                    username: 'Triviño',
                    email: 'prueba@gmail.com',
                }

 const handleCreateClick = (e) => {
    dispatch(createUsers(newUser))
 }                
  return (
    <div>
     <button onClick={handleClick}>Get users</button>
      <ul>
        {
          users.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
      <button onClick={handlePostClick}>Get post</button>
      <ul>
        {
          posts.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
      <button onClick={handleCreateClick}>Create user</button>
    </div>
  );
}

export default App;
