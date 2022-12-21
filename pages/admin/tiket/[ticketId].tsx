import { SubmitHandler, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import AppLayout from "../../../components/AppLayout";
import { administratorMenuItems } from "../../../constants";
import { prisma } from "../../../helpers/prisma";

interface AdminEditTicketPageProps {
  id: number;
  ticket?: {
    id: number;
    price: number;
    name: string;
    description: string;
  };
}

export const getServerSideProps: GetServerSideProps<
  AdminEditTicketPageProps
> = async (context) => {
  let ticket: {
    id: number;
    price: number;
    name: string;
    description: string;
  };

  try {
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

function AdminEditTicketPage(props: AdminEditTicketPageProps) {
  const router = useRouter();
  const { handleSubmit, register } = useForm<{
    price: number;
    name: string;
    description: string;
  }>();

  const onSubmit: SubmitHandler<{
    price: number;
    name: string;
    description: string;
  }> = async (data) => {
    try {
      const _ = await fetch(`/api/tickets/${props.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (props.ticket === undefined) return <AppLayout>Error</AppLayout>;

  return (
    <AppLayout menuItems={administratorMenuItems}>
      <div className="p-4 flex flex-col">
        <form
          action={`/api/tickets/${props.id}`}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={props.ticket.name}
              {...register("name")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Harga</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              defaultValue={props.ticket.price}
              {...register("price")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Deskripsi</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              defaultValue={props.ticket.description}
              {...register("description")}
            ></textarea>
          </div>

          <button className="btn mt-4">Perbaharui</button>
        </form>

        <button
          className="btn w-full btn-error mt-4"
          onClick={() => {
            fetch(`/api/tickets/${props.id}`, {
              method: "DELETE",
            });

            router.push("/admin/tiket", {}, { shallow: true });
          }}
        >
          Hapus Tiket
        </button>
      </div>
    </AppLayout>
  );
}

export default AdminEditTicketPage;
