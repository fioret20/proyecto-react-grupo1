import { useState } from "react";
import type { Phrase } from "../types/Phrase";
import './stylesComponents/FavoriteList.css';

interface FavoriteListProps {
  favorites: Phrase[];
  marcFavorite: (phrase: Phrase) => void;
  maxFavorites: number;
}

export default function FavoriteList({ favorites, marcFavorite, maxFavorites }: FavoriteListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const limitReached = favorites.length >= maxFavorites;

  return (
    <>
      <div
        className={`notif-icon ${limitReached ? 'limit' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >        ⭐
        <span className="notif-count">{favorites.length}/{maxFavorites}</span>
      </div>


      {isOpen && (
        <div className="notif-panel ">
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
