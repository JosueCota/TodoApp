import style from "./todoitem.module.css"

export default function TodoItem({todo, todos,setTodos}){

    function handleClick(name){
        let newArr = todos.map(todo => {
        return todo.name === name ? {...todo, done: !todo.name} : todo
        });
        setTodos(newArr);
    }

    function handleDelete(todo) {
        setTodos(todos.filter(item =>item.name !== todo));
    }

    return <div className={style.item}>
        <div className={style.itemName}>
            <span className={style.completed} key={todo.name} onClick={()=> handleClick(todo.name)}>{todo.name}</span>
            <span>
                <button className={style.itemBtn} onClick={() => {handleDelete(todo.name)}}>X</button>
            </span>

        </div>
        <hr className={style.line}/>
    </div>

}