import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common'
import { NestApplication } from '@nestjs/core'
import { PrismaClient } from '@prisma/client'
import { error } from 'console'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    // Note: this is optional
    await this.$connect()
    }
    async enableShutdownHooks(app:NestApplication){
        this.$on('beforeExit', async ()=>{
            await app.close()
        })
    }

  }