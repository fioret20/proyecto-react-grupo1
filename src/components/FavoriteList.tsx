import type { Phrase } from "../types/Phrase";

interface FavoriteListProps  {
  favorites: Phrase[];
  marcFavorite: (phrase: Phrase) => void;

}

export default function FavoriteList({ favorites, marcFavorite }: FavoriteListProps) {
  return (
    <aside style={{ width: "250px", padding: "1rem", background: "#f4f4f4", borderLeft: "2px solid #ddd", position: "fixed", right: 0, top: 0, height: "100vh", overflowY: "auto" }}>
      <h2>⭐ Favoritos</h2>
      {favorites.length === 0 ? <p>No hay favoritas todavía.</p> : (
        <ul>
          {favorites.map(f => (
            <li key={f.id}>
              {f.phrase} <button onClick={() => marcFavorite(f)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}