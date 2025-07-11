// import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// type GetRoomsAPIResponse = Array<{
//   id: string;
//   name: string;
// }>;

export function CreateRoom() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["get-rooms"],
  //   queryFn: async () => {
  //     const response = await fetch("http://localhost:3333/rooms");

  //     const result: GetRoomsAPIResponse = await response.json();

  //     return result;
  //   },
  // });

  return (
    <div className="min-h-screen py-8 px-4">
      {/* {isLoading && <p>Carregando...</p>} */}

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 grid-cols-2 items-start">
          <div />

          <Card>
            <CardHeader>
              <CardTitle>Salas Recentes</CardTitle>
              <CardDescription>
                Acesso rápido para as salas criadas recentemente
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">

            </CardContent>
          </Card>
        </div>
        {/* {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          );
        })} */}
      </div>
    </div>
  );
}


