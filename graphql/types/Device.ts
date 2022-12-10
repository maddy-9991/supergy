import { objectType, extendType, nonNull, stringArg } from 'nexus'
import { User } from './User'

export const Device = objectType({
  name: 'Device',
  definition(t) {
    t.string('id')
    t.string('title')
    t.string('url')
    t.string('description')
    t.string('imageUrl')
    t.string('category')
    t.list.field('users', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.device
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users()
      },
    })
  },
})

export const DevicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('devices', {
      type: 'Device',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.device.findMany()
      },
    })
  },
})

export const CreateDeviceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createDevice', {
      type: Device,
      args: {
        title: nonNull(stringArg()),
        url: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
        category: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {

        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action`)
        }

        const newDevice = {
          title: args.title,
          url: args.url,
          imageUrl: args.imageUrl,
          category: args.category,
          description: args.description,
        }

        return await ctx.prisma.device.create({
          data: newDevice,
        })
      },
    })
  },
})