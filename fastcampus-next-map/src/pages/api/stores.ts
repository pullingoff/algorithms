import type { NextApiRequest, NextApiResponse } from "next";
import { StoreApiResponse, StoreType } from "@/types";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse | StoreType[]>,
) {
  const { page = "" }: { page?: string } = req.query;
  const prisma = new PrismaClient();

  if (page) {
    const count = await prisma.store.count();
    const skipPage = parseInt(page) - 1; // 페이지 넘기는 역할
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
      take: 10,
      skip: skipPage * 10,
    });

    res.status(200).json({
      page: parseInt(page),
      data: stores,
      totalCount: count,
      totalPage: Math.ceil(count / 10),
    });
  } else {
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
    });

    return res.status(200).json(stores);
  }
}
