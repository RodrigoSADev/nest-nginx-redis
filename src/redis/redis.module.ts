import { RedisModule as NestRedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestRedisModule.forRoot({
      type: 'single', // Define o tipo de conexão (redis)
      options: {
        host: 'localhost', // Endereço do Redis
        port: 6379, // Porta do Redis
      },
    }),
  ],
  exports: [NestRedisModule],
})
export class RedisModule {}
