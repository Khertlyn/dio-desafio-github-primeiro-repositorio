-- CreateTable
CREATE TABLE "tipo_anuncio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_anuncio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ala" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cia" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupo_unid" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "grupo_unid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unid" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ciaId" INTEGER NOT NULL,
    "grupoUnidId" INTEGER NOT NULL,

    CONSTRAINT "unid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viatura" (
    "id" SERIAL NOT NULL,
    "prefixo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "viaturaBm" BOOLEAN NOT NULL,

    CONSTRAINT "viatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tempo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tempo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncio_basico" (
    "id" SERIAL NOT NULL,
    "tipoAnuncioId" INTEGER NOT NULL,
    "alaId" INTEGER NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "dataAnuncio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anuncio_basico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncio_unid" (
    "id" SERIAL NOT NULL,
    "anuncioBasicoId" INTEGER NOT NULL,
    "efetivo" INTEGER NOT NULL,
    "motoserra" INTEGER NOT NULL,
    "agua" INTEGER NOT NULL,
    "lge" INTEGER NOT NULL,
    "desencarcerador" INTEGER NOT NULL,
    "gerador" INTEGER NOT NULL,
    "epr" INTEGER NOT NULL,
    "viaturaId" INTEGER NOT NULL,
    "tripulada" BOOLEAN NOT NULL,
    "obs" VARCHAR(256) NOT NULL,

    CONSTRAINT "anuncio_unid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncio_sede" (
    "id" SERIAL NOT NULL,
    "anuncioBasicoId" INTEGER NOT NULL,
    "supervisor" VARCHAR(256) NOT NULL,
    "supervisorTel" VARCHAR(256) NOT NULL,
    "cbu" VARCHAR(256) NOT NULL,
    "cbuTel" VARCHAR(256) NOT NULL,
    "acs" VARCHAR(256) NOT NULL,
    "acsTel" VARCHAR(256) NOT NULL,
    "piloto" VARCHAR(256) NOT NULL,
    "pilotoTel" VARCHAR(256) NOT NULL,

    CONSTRAINT "anuncio_sede_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncio_manut" (
    "id" SERIAL NOT NULL,
    "anuncioBasicoId" INTEGER NOT NULL,
    "grupoUnidId" INTEGER NOT NULL,
    "viaturaId" INTEGER NOT NULL,
    "obs" VARCHAR(256) NOT NULL,

    CONSTRAINT "anuncio_manut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anuncio_ciad" (
    "id" SERIAL NOT NULL,
    "anuncioBasicoId" INTEGER NOT NULL,
    "tempoId" INTEGER NOT NULL,
    "efetivo" INTEGER NOT NULL,
    "operacional" INTEGER NOT NULL,
    "scip" INTEGER NOT NULL,
    "obs" VARCHAR(256) NOT NULL,

    CONSTRAINT "anuncio_ciad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_anuncio_nome_key" ON "tipo_anuncio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ala_nome_key" ON "ala"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "cia_nome_key" ON "cia"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "grupo_unid_nome_key" ON "grupo_unid"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "unid_nome_key" ON "unid"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "viatura_prefixo_key" ON "viatura"("prefixo");

-- CreateIndex
CREATE UNIQUE INDEX "viatura_placa_key" ON "viatura"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_nome_key" ON "tempo"("nome");

-- AddForeignKey
ALTER TABLE "unid" ADD CONSTRAINT "unid_ciaId_fkey" FOREIGN KEY ("ciaId") REFERENCES "cia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "unid" ADD CONSTRAINT "unid_grupoUnidId_fkey" FOREIGN KEY ("grupoUnidId") REFERENCES "grupo_unid"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anuncio_basico" ADD CONSTRAINT "anuncio_basico_tipoAnuncioId_fkey" FOREIGN KEY ("tipoAnuncioId") REFERENCES "tipo_anuncio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anuncio_basico" ADD CONSTRAINT "anuncio_basico_alaId_fkey" FOREIGN KEY ("alaId") REFERENCES "ala"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anuncio_basico" ADD CONSTRAINT "anuncio_basico_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unid"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anuncio_unid" ADD CONSTRAINT "anuncio_unid_anuncioBasicoId_fkey" FOREIGN KEY ("anuncioBasicoId") REFERENCES "anuncio_basico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_unid" ADD CONSTRAINT "anuncio_unid_viaturaId_fkey" FOREIGN KEY ("viaturaId") REFERENCES "viatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_sede" ADD CONSTRAINT "anuncio_sede_anuncioBasicoId_fkey" FOREIGN KEY ("anuncioBasicoId") REFERENCES "anuncio_basico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_manut" ADD CONSTRAINT "anuncio_manut_anuncioBasicoId_fkey" FOREIGN KEY ("anuncioBasicoId") REFERENCES "anuncio_basico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_manut" ADD CONSTRAINT "anuncio_manut_grupoUnidId_fkey" FOREIGN KEY ("grupoUnidId") REFERENCES "grupo_unid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_manut" ADD CONSTRAINT "anuncio_manut_viaturaId_fkey" FOREIGN KEY ("viaturaId") REFERENCES "viatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_ciad" ADD CONSTRAINT "anuncio_ciad_anuncioBasicoId_fkey" FOREIGN KEY ("anuncioBasicoId") REFERENCES "anuncio_basico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anuncio_ciad" ADD CONSTRAINT "anuncio_ciad_tempoId_fkey" FOREIGN KEY ("tempoId") REFERENCES "tempo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
