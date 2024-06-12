import React from 'react'
import { useSelector } from 'react-redux';
import './TrelloBoard.css';
import Category from './Category';

export const TrelloBoard = () => {
  const trelloBoard = useSelector((state: any) => state.trelloBoard);
  return (
    <div id={'trello-board-container'}>
      {
        trelloBoard.categories.map((category: any)=> <Category category={category}/>)
      }
    </div>
  )
}
