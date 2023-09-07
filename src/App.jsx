import logo from './logo.svg';
import './App.css';
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const singers = [
    {id:1, name: 'Mahfuz', age: 68},
    {id:2, name: 'Eva Rahman', age:38},
    {id:3, name: 'Pritom', age:28}
]
  const actors = ['Sakib', 'Raz', 'Salman', 'Sahrukh', 'Miraz']
  return (
    <div className="App-header"> 
      {singers.map(singer => <Singer singer={singer}></Singer>)}
      {/* <Actor name={'Bappa Raz'}></Actor> */}
      {actors.map(actor =><Actor name={actor}></Actor>)}
    </div>
    
  );
}
function Person() {
  const age = 35;
  const money = 400;

  return (
    <h3 className='student'>
      I am a Web Developer and my age is {age}, I have money = {money}
    </h3>
  );
}

export default App;
