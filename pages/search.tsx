import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import ProductCard from "../components/ProductCard";
import { prisma } from "../helpers/prisma";

interface SearchPageProps {
  products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  let products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];

  try {
    products = await prisma.ticket.findMany({
      where: {
        name: {
          contains: context.query.q as string,
          mode: "insensitive",
        },
      },
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

export default function SearchPage(props: SearchPageProps) {
  const router = useRouter();

  if (props.products === undefined) return <AppLayout>Error</AppLayout>;

  return (
    <AppLayout title="Search">
      <main className="p-4">
        <form className="form-control mb-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
              name="q"
              defaultValue={router.query["q"]}
            />
            <button className="btn btn-square">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="grid lg:grid-cols-3 gap-4">
          {props.products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </AppLayout>
  );
}
