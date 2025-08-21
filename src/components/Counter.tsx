import './stylesComponents/Counter.css';

interface CounterProps {
  count: number;
}

export default function Counter({ count }: CounterProps) {
  return (
    <div className="quotes-counter">
      Mis frases favoritas: {count}
    </div>
  );
}
