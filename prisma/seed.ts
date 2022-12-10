// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { devices } from '../data/devices'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
    },
  })

  await prisma.device.createMany({
    data: devices,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })