import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { DatabaseModule } from './database/database.module';
import { FacultyModule } from './faculty/faculty.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV}`,
			isGlobal: true,
		}),
		DatabaseModule,
		StudentModule,
		GroupModule,
		FacultyModule,
	],
})
export class AppModule {}
