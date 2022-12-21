import { GetServerSideProps } from "next";
import AppLayout from "../components/AppLayout";
import ProductCard from "../components/ProductCard";
import { prisma } from "../helpers/prisma";

interface IndexPageProps {
  products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
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

function IndexPage(props: IndexPageProps) {
  return (
    <AppLayout>
      <div className="p-4 grid lg:grid-cols-3 gap-4">
        {props.products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </AppLayout>
  );
}

export default IndexPage;
