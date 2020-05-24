import React from 'react';
import Card from './Card';

function CardList({ robots }){
  if (false)
  {
    throw new Error('NOOOOOOO');
  }
  return (
    <div>
      {robots.map((user, i) => <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)}
    </div>
  );
}

export default CardList;
