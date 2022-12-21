import Link from "next/link";

export default function ProductCard(props: {
  id: number;
  name: string;
  description?: string;
  price: number;
}) {
  return (
    <div className="card card-compact bg-base-200">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="text-sm">
          {props.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <Link className="btn" href={`/tiket/${props.id}/checkout`}>
            Beli
          </Link>
        </div>
      </div>
    </div>
  );
}
