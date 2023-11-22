import { PrismaClient } from "@prisma/client";
export default async function handler(req, res) {
  //Creamos la instancia que habra la conexion a la base de datos y nos permita actualizar esa orden
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    //console.log(req.query.id);
    //console.log("Actualizando");

    const { id } = req.query;

    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id),
      },
      data: {
        estado: true,
      },
    });
    res.status(200).json(ordenActualizada);
  }
}
