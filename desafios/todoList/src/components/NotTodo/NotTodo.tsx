import s from "./NotTodo.module.css";
import clip from "../../assets/clip.svg";

export function NotTodo() {
  return (
    <div className={s.notTodoWrapper}>
      <img src={clip} alt="Imagem de uma pasta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
