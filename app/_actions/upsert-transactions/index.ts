"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { UpsertTransactionSchema } from "../schema-transactions/schema";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

interface UpsertTransactionProps {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const UpsertTransaction = async (params: UpsertTransactionProps) => {
  UpsertTransactionSchema.parse(params);
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const transactionData = {
    ...params,
    userId,
  };

  if (params.id) {
    await db.transaction.upsert({
      where: {
        id: params.id,
      },
      update: transactionData,
      create: transactionData,
    });
  } else {
    await db.transaction.create({
      data: transactionData,
    });
  }

  revalidatePath("/transactions");
};
