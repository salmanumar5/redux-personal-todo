import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearch } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
    dispatch(updateSearch(value));
  };

  const handleInputPress = (e) => {
    if(e.key == "Enter"){
        handleAddTodoClick()
    }
    };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h1 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h1>

      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onKeyDown={handleInputPress}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          placeholder="Add Todo..."
          name="text"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodoClick}
          className="ml-4 p-1 text-3xl bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>

      {/* filter and Search */}
      <div className="flex items-center justify-between">
        <FilterButton/>
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
            type="text"
            placeholder="Search"
            name="text"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-1 text-3xl bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList/>
    </div>
  );
}

export default Todo;
