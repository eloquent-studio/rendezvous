/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `BusinessAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BusinessAccount_name_key" ON "BusinessAccount"("name");
