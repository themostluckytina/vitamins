import { useState } from 'react';
import { data } from './data';
import './App.css';
import vit from './vit.jpg';

function App() {



const [vitamin, setVitamin] = useState([]);

const [showMore, setShowMore] = useState(false);

const [btnText, setBtnText] =useState(false);



const remove =(id)=>{
 
  let newVitamin = vitamin.filter(use => use.id !==id);
  setVitamin(newVitamin)
  
}

const showBtnText = (thing) =>{
  thing.showMore = !thing.showMore
  setBtnText(!btnText)

}





 return(<div>
   <div className='App'>
   <h1><span className='one'>В</span>
   <span className='two'>И</span>
   <span className='three'>Т</span>
   <span className='four'>А</span>
   <span className='five'>М</span>
   <span className='six'>И</span>
   <span className='seven'>Н</span>
   <span className='eight'>Ы</span>
   </h1>
      <p>Витамины - это органические вещества, которые очень важны и
        полезны для человека. Недаром в переводе с латинского "витамины"
        значит жизнь. Они помогают нормальной работе и развитию 
        человеческого организма, обновлению тканей, правильному обмену
        веществ и повышению иммунитета.
      </p>
      <p className='bold'>Определи дефицит витаминов в своем организме и составь свой список,
        исключив ненужные нажатием на кнопку "удалить".
        </p>

      
        <button className='list' onClick={()=>setVitamin(data)} > СПИСОК ВИТАМИНОВ</button>
   </div>

   {vitamin.map((thing =>{
     const {id, name,feature, lack, food, showMore} = thing;

      return( <div key={id} className='App'>


        <div>
          <p className='name'> {id} </p>
          <p className='full'> {name} </p>
         </div>
        
        <div>
          <p><span className='feature'>Свойства	витамина. </span> {showMore ? feature: feature.substring(0, 80) } 
          <button className='btn' onClick={()=>showBtnText(thing)}> {showMore ? '<<<Скрыть' : '>>> Далее'} </button>
          </p>
          </div>

        <div><p><span className='lack'>Симптомы	дефицита. </span> {lack} </p></div>
        <div><p><span className='food'>Содержится в продуктах. </span> {food} </p></div>
        <div>
          <button onClick={()=>remove(id)}>Удалить</button>
        </div>
        
        
</div>


)
   }
  ))}







<div className='App'>
  <img className='pic' src={vit} width={350} alt='pic' />
</div>



   </div>
 )
}

export default App;

