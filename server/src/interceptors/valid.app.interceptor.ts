import {
  ExecutionContext,
  Injectable,
  NotFoundException,
  NestInterceptor,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { AppsService } from 'src/services/apps.service';
import { Observable } from 'rxjs';

@Injectable()
export class ValidAppInterceptor implements NestInterceptor {
  constructor(private appsService: AppsService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { id, slug } = request.params;
    if (!(id || slug)) {
      throw new BadRequestException();
    }
    const app = request.tj_app || (id ? await this.appsService.find(id) : this.appsService.findBySlug(slug));
    if (!app) throw new NotFoundException('应用ID错误，无法打开页面');
    request.tj_app = app;
    return next.handle();
  }
}
