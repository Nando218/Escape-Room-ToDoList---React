import React, {useState} from "react";



    function ToDoForm(props) {
        const [input, setInput] = useState(props.edit ? props.edit.value : '');

        const handleChange = e => {
            setInput(e.target.value);
        };

        const handleSubmit = e => {
            e.preventDefault();

            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            });
            setInput('');
        };

        return (
            <form onSubmit={handleSubmit} className='toDo-form'>
                {props.edit ? (
                    <>
                        <input
                            type='text'
                            placeholder='Update your item'
                            value={input}
                            name='text'
                            className='toDo-input edit'
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit} className='toDo-button edit'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type='text'
                            placeholder='Add a to do'
                            value={input}
                            name='text'
                            className='toDo-input'
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit} className='toDo-button'>
                            Add something to do
                        </button>
                    </>
                )}
            </form>
        );
    }



export default ToDoForm