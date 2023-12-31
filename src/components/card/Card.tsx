import "./card.css";
// import { useNavigate } from "react-router-dom";
interface CardProps {
  name: string;
  position: string;
  fields: string[];
}

// const goToPayment = useNavigate()

export default function Card({ name, position, fields }: CardProps) {
  return (
    <div className="card">
      <div className="info">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <div className="fields">
          Fields: &nbsp;
          <p>{fields.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
