import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/site';
import { v4 as uuid } from 'uuid';
import { Button } from "@blueprintjs/core";

const ToDo = () => {

  let settingsValues = useContext(SettingsContext);

  const [list, setList] = useState([]);
  const [endIndex, setEndIndex] = useState(settingsValues.pagination);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item, '<-- item --<<');
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items)
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    })

    setList(items)
  }

  const paginate = () => {

    let start = endIndex - settingsValues.pagination;
    
    return list.slice(start, endIndex);
  }

  const handleNext = (e) => {
    e.preventDefault();

    setEndIndex(endIndex + settingsValues.pagination)
  }

  const handlePrevious = (e) => {
    e.preventDefault();

    setEndIndex(endIndex - settingsValues.pagination);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`
  }, [list, incomplete])

  return (
    <div style={settingsValues}>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <Button type="submit">Add Item</Button>
        </label>
      </form>

      {paginate().map((item, idx) => (
        <div key={idx}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</button>
          <button onClick={() => deleteItem(item.id)} >Delete</button>
          <hr />
        </div>
      ))}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default ToDo;