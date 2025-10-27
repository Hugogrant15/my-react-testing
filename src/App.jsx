import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Students from "./components/Students"
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Button from './components/Button'
import ProfilePicture from './components/ProfilePicture'
import MyComponent from './components/MyComponent'
import Counter from './components/Counter'
import MyComponentsxx from './components/MyComponentsxx'
import ColourPicker from './components/ColourPicker'
import UpdaterObject from './components/UpdaterObject'


function App() {
  const [count, setCount] = useState(0)

  const fruits = [{id: 1, name: "apple", calories: 95},
                      {id: 2, name: "orange", calories: 45}, 
                      {id: 3, name: "banana", calories: 105}, 
                      {id: 4, name: "coconut", calories: 159}, 
                      {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "pototes", calories: 95},
                      {id: 7, name: "ginger", calories: 45}, 
                      {id: 8, name: "corn", calories: 105}, 
                      {id: 9, name: "brocolli", calories: 159}, 
                      {id: 10, name: "carrots", calories: 37}];
      

  return (
    <>
      <Students name="spongebob" age={30} isStudent={true}/>
      <Students name="partick" age={40} isStudent={false}/>
      <Students name="squidward" age={50} isStudent={false}/>
      <Students name="sandy" age={27} isStudent={true}/>
      <Students name="" />
      <UserGreeting isLoggedIn={true} username="ugogrant" />

      <List items={fruits} category="fruits"/>;
      <List items={vegetables} category="vegetables"/>;
       
       <Button/>
       <ProfilePicture/>

       <MyComponent/>
       <Counter/>
       <MyComponentsxx/>
       <ColourPicker/>
       <UpdaterObject/>
    </>
  )
}

export default App
