/*
  Warnings:

  - You are about to drop the column `efetivo` on the `anuncio_ciad` table. All the data in the column will be lost.
  - You are about to drop the column `tempoId` on the `anuncio_ciad` table. All the data in the column will be lost.
  - Added the required column `efetivo_t1` to the `anuncio_ciad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `efetivo_t2` to the `anuncio_ciad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `efetivo_t3` to the `anuncio_ciad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anuncio_ciad" DROP CONSTRAINT "anuncio_ciad_tempoId_fkey";

-- AlterTable
ALTER TABLE "anuncio_ciad" DROP COLUMN "efetivo",
DROP COLUMN "tempoId",
ADD COLUMN     "efetivo_t1" INTEGER NOT NULL,
ADD COLUMN     "efetivo_t2" INTEGER NOT NULL,
ADD COLUMN     "efetivo_t3" INTEGER NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL;
