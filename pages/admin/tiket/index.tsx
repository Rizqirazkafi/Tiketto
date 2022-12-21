import { GetServerSideProps } from "next";
import Link from "next/link";
import AppLayout from "../../../components/AppLayout";
import { administratorMenuItems } from "../../../constants";
import { prisma } from "../../../helpers/prisma";

interface AdminTiketPageProps {
  products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

export const getServerSideProps: GetServerSideProps<
  AdminTiketPageProps
> = async () => {
  let products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];

  try {
    products = await prisma.ticket.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
      },
    });
  } catch (error) {
    console.error(error);

    return {
      props: {
        products: [],
      },
    };
  }

  return {
    props: {
      products,
    },
  };
};

const Row = (props: {
  id: number;
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

function IndexPage(props: AdminTiketPageProps) {
  return (
    <AppLayout menuItems={administratorMenuItems}>
      <div className="p-4 flex flex-col">
        <div className="mb-4 flex items-center">
          <Link href="/admin/tiket/new" className="ml-auto btn btn-primary">
            Buat baru
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((product) => (
                <Row {...product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}

export default IndexPage;
