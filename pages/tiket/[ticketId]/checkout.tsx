import { Bars3Icon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import AppLayout from "../../../components/AppLayout";
import { prisma } from "../../../helpers/prisma";
import { authOptions } from "../../api/auth/[...nextauth]";

interface CheckoutTicketPageProps {
  id: number;
  ticket?: {
    id: number;
    price: number;
    name: string;
    description: string;
  };
}

export const getServerSideProps: GetServerSideProps<
  CheckoutTicketPageProps
> = async (context) => {
  let ticket: {
    id: number;
    price: number;
    name: string;
    description: string;
  };

  try {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (session?.user?.email === undefined || session?.user?.email === null)
      throw new Error();

    ticket = await prisma.ticket.findUniqueOrThrow({
      where: {
        id: Number(context.query.ticketId),
      },
      select: {
        id: true,
        price: true,
        name: true,
        description: true,
      },
    });
  } catch (error) {
    console.error(error);

    return {
      props: {
        id: Number(context.query.ticketId),
      },
    };
  }

  return {
    props: {
      id: Number(context.query.ticketId),
      ticket,
    },
  };
};

export default function CheckoutTiketPage(props: CheckoutTicketPageProps) {
  const handleCheckout = async () => {
    try {
      const _ = fetch("/api/users/tickets", {
        method: "PATCH",
        body: JSON.stringify({
          id: props.id,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (props.ticket === undefined) return <AppLayout>Error</AppLayout>;

  return (
    <AppLayout title="Daftar Tiket">
      <div className="p-4 flex flex-col items-center gap-4">
        <div className="card w-96 bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Beli tiket</h2>
            <div className="my-4 bg-base-300 p-4 rounded-xl">
              <div className="flex justify-between">
                <p className="text-left font-semibold">Nama Tiket</p>
                <p className="text-right">{props.ticket.name}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-left font-semibold">Kuantitas</p>
                <p className="text-right">1</p>
              </div>
              <div className="flex justify-between">
                <p className="text-left font-semibold">Harga</p>
                <p className="text-right">
                  {props.ticket.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button onClick={handleCheckout} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
