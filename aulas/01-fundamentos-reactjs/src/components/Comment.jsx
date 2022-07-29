import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.content}>
      <img src="https://github.com/guusfelix2015.png" alt="" />
      <div className={styles.comentBox}>
        <div classname={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Felix</strong>
              <time title="27 de Julho ás 21:10" dateTime="2022-07-27 21:10">
                Cerca de uma hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
