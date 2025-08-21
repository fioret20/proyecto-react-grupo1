import { useState } from "react";
import type { Phrase } from "../types/Phrase";
import './stylesComponents/FavoriteList.css';
import Counter from "./Counter";

interface FavoriteListProps {
  favorites: Phrase[];
  marcFavorite: (phrase: Phrase) => void;
}

export default function FavoriteList({ favorites, marcFavorite }: FavoriteListProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Counter count={favorites.length}  />
      <div className="notif-icon" onClick={() => setIsOpen(!isOpen)}>
        ⭐
        {favorites.length > 0 && <span className="notif-count">{favorites.length}</span>}
      </div>
    

      {isOpen && (
        <div className="notif-panel">
          {favorites.length === 0 ? <p>No hay favoritas todavía.</p> : (
            favorites.map(f => (
              <div className="notification favorite-item" key={f.id}>
                <button onClick={() => marcFavorite(f)}>X</button>
                <br />
                <div className="textFavorite">"{f.text}"</div>
                <div className="authorFavorite"> — {f.author}</div>
                <div className="categoryFavorite">{f.category}</div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
