export const resolvers = {
  Query: {
    devices: (_parent, _args, ctx) => {
      return ctx.prisma.device.findMany()
    },
  },
}