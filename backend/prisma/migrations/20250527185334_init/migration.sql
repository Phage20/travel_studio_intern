/*
  Warnings:

  - You are about to drop the `Requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Requests";

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "guestPhone" TEXT NOT NULL,
    "requestText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
