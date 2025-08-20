// FavoriteList.tsx
import { useState } from "react";
import type { Phrase } from "../types/Phrase";
import './stylesComponents/FavoriteList.css';

interface FavoriteListProps {
  favorites: Phrase[];
  marcFavorite: (phrase: Phrase) => void;
}

export default function FavoriteList({ favorites, marcFavorite }: FavoriteListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="notif-icon" onClick={() => setIsOpen(!isOpen)}>
        ⭐
        {favorites.length > 0 && <span className="notif-count">{favorites.length}</span>}
      </div>

      {isOpen && (
        <div className="notif-panel">
          {favorites.length === 0 ? <p>No hay favoritas todavía.</p> : (
            favorites.map(f => (
              <div className="notification favorite-item" key={f.id}>
                <strong>Frase:</strong> {f.text} <br />
                <strong>Autor:</strong> {f.author} <br />
                <strong>Categoría:</strong> {f.category} <br />
                <button onClick={() => marcFavorite(f)}>❌</button>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
