import {useState} from 'react';

function TodoList() {
    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);

    // function handleChange(event) {
    //     setInputVal(event.target.value);
    // }

    function handleSubmit(event) {
        //stopping the native HTML from submission
        event.preventDefault();
        //add item to our list
        //creating a "shallow copy"
        const clonedList = list.slice();
        //add to the cloned list
        clonedList.push({
            text: inputVal,
            completed: false  
        });

        setList(clonedList);

        //clear the input box
        setInputVal('');
    }

    function handleDelete(index) {
        //callback returns whether index does NOT equal idx
        //filter returns a NEW array
        const filtered = list.filter((_, idx) => index !== idx);

        setList(filtered);
    }

    function toggleIt(index) {
        const todo = list[index];
        // if(todo.completed === true) {
        //     todo.completed = false;
        // } else {
        //     todo.completed = true;
        // }
        todo.completed = !todo.completed;
        
        setList(list.slice());
        //same thing below
        //setList([... list]);
    }

    return(
        <div>
            {inputVal}
            <form onSubmit={handleSubmit}> 
                <input
                type="text"
                //technically we can use onChange={handleChange} for this line if we write out the function "handleChange" above.
                onChange={event => setInputVal(event.target.value)}
                value={inputVal}
                />
                <button>Add</button>
            </form>
            <div>
                {list.map((item, idx) => (
                    <p key={idx}>
                        <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>
                        <input type="checkbox" onChange={() => toggleIt(idx)}></input>
                        <button onClick={() => handleDelete(idx)}>Delete</button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
