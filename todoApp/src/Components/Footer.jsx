import style from "./footer.module.css"

export default function Footer({totalTodos, completedTodos}) {
    return <div className={style.footer}>
        <span className={style.item}>
        Total Todos: {totalTodos}
        </span>
        <span className={style.item}>
        Completed Todos: {completedTodos}
        </span>
    </div>
}