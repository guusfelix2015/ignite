import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
  avatarUrl: string;
}

export function Comment({ content, onDeleteComment, avatarUrl }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar onClick={() => alert("Hi")} hasBorder={false} src={avatarUrl} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Felix</strong>
              <time
                title="26 de Outubro ás 17:14"
                dateTime="2022-10-26 00:17:13"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onMouseDown={handleDeleteComment} title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
