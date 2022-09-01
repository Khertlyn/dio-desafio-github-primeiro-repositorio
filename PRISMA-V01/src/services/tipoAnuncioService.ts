import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newTipoAnuncio = await prisma.tipo_anuncio.create ({
    data: {
      nome: 'Pré-anúncio',
    },
  })
  console.log('Created new type: ', newTipoAnuncio)

  const allTipoAnuncio = await prisma.tipo_anuncio.findMany({
  })
  console.log('All users: ')
  console.dir(allTipoAnuncio, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect ())