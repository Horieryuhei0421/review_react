import React, {useState} from 'react';

const Article = () => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <div>
      <h3>Šm”F</h3>
      <input type="checkbox" checked={isPublished} onClick={() => togglePublished(!isPublished)} />
    </div>
  )
}

export default Article;