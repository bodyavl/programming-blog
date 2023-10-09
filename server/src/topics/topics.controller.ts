import { Controller, Get, Body, Param, Delete, Put, UseInterceptors, UseGuards } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { RoleGuard } from 'src/core/guards/role.guard';
import { Role } from 'src/core/decorators/role.decorator';
import { Roles } from 'src/core/enums/roles.enum';
import { ApiConflictResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('topics')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  @CacheKey('topics')
  @UseInterceptors(CacheInterceptor)
  findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Topic not found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Topic already exists' })
  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ): Promise<Topic> {
    return this.topicsService.update(id, updateTopicDto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiNotFoundResponse({ description: 'Topic not found' })
  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.topicsService.remove(id);
  }
}
