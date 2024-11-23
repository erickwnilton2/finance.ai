"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { DeleteTransactionSchema } from "../schema-transactions/schema-delete";

const DeleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.transaction.delete({ where: { id: transactionId } });

  revalidatePath("/transactions");
  revalidatePath("/");
};

export default DeleteTransaction;
