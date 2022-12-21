import { Bars3Icon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import ProductCard from "../components/ProductCard";
import { prisma } from "../helpers/prisma";
import { authOptions } from "./api/auth/[...nextauth]";

interface PurchasedPageProps {
  purchasedTickets?: {
    id: number;
    price: number;
    name: string;
    description: string;
  }[];
}

export const getServerSideProps: GetServerSideProps<
  PurchasedPageProps
> = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session?.user?.email === undefined || session?.user?.email === null)
    return {
      props: {},
    };

  try {
    const { purchasedTickets } = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.user.email,
      },
      select: {
        purchasedTickets: {
          select: {
            id: true,
            price: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return {
      props: {
        purchasedTickets,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
};

function PurchasedPage(props: PurchasedPageProps) {
  if (props.purchasedTickets === undefined) return <AppLayout>Error</AppLayout>;

  return (
    <AppLayout title="Tiket yang sudah dibeli">
      <div className="p-4 grid lg:grid-cols-3 gap-4">
        {props.purchasedTickets.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </AppLayout>
  );
}

export default PurchasedPage;
