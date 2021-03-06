import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { GroupImport } from './schemas/group.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupRepository } from './group.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
	imports: [MongooseModule.forFeature([GroupImport]), DatabaseModule],
	providers: [GroupService, GroupRepository],
	controllers: [GroupController],
	exports: [GroupRepository],
})
export class GroupModule {}
