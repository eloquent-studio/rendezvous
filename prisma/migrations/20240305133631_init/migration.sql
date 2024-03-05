-- CreateTable
CREATE TABLE "BusinessAccount" (
    "id" SERIAL NOT NULL,
    "profession" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "image" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BusinessAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessAccount_userId_key" ON "BusinessAccount"("userId");

-- AddForeignKey
ALTER TABLE "BusinessAccount" ADD CONSTRAINT "BusinessAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
