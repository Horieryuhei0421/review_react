import React, {useState, useEffect} from 'react';

const Article = () => {
  const [isPublished, togglePublished] = useState(false);
  const [count, countUpper] = useState(0);

  const countUp = () => {
    countUpper(count + 1)
  }

  // useEffect(()=>{
  //   console.log("???")
  //   document.getElementById('checkbox').addEventListener('click', countUp)
  //   return() => {
  //     console.log("!!!")
  //     document.getElementById('checkbox').removeEventListener('click', countUp)
  //   }
  // })

  return (
    <div>
      <h3>確認</h3>
      <input type="checkbox" checked={isPublished} onClick={() => togglePublished(!isPublished)} />
      <button id={"counter"} >いいね数:{count}</button>
    </div>
  )
}

export default Article;