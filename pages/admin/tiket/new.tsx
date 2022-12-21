import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AppLayout from "../../../components/AppLayout";
import { administratorMenuItems } from "../../../constants";

const Row = (props: {
  id: string;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <tr>
      <th></th>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>
        {props.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </td>
      <td>
        <Link href={`/admin/tiket/${props.id}`} className="btn btn-sm">
          Edit
        </Link>
      </td>
    </tr>
  );
};

function AdminCreateNewProductPage() {
  const products = Array(12)
    .fill(null)
    .map((x, i) => ({
      id: i.toString(),
      name: `Tiket ${i + 1}`,
      description: "Aku adalah anak gembala",
      price: 10000,
    }));

  return (
    <AppLayout title="Daftar Tiket" menuItems={administratorMenuItems}>
      <div className="p-4 flex flex-col">
        <form
          action="/api/tickets"
          method="post"
          className="flex flex-col gap-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama</span>
            </label>
            <input type="text" className="input input-bordered" name="name" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Harga</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              name="price"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deskripsi</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              name="description"
            ></textarea>
          </div>
          <button className="btn mt-4">Buat baru</button>
        </form>
      </div>
    </AppLayout>
  );
}

export default AdminCreateNewProductPage;
