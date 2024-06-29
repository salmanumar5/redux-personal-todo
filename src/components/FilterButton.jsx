import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo, markAllCompleted } from '../redux/actions';

function FilterButton() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter));
    }
  return (
    <div className='flex space-x-4 items-center'>
        <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)} className='text-sm px-2 py-1 border-gray-300'>
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incompleted</option>
        </select>

        <button onClick={() => dispatch(markAllCompleted())} className='px-2 py-1 bg-purple-500 text-white ml-2 rounded'>Mark All Completed</button>
    </div>
  )
}

export default FilterButton