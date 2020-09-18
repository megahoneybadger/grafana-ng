import { Md5 } from 'ts-md5/dist/md5';
import { BaseService } from '../_base/base-service';

export class AvatarHelper {
  
  static getUrl( key: string ){
    const hash = Md5.hashStr(key.trim().toLowerCase());
    return `${new BaseService( undefined ).base}/avatar/${hash}`
  }
 
}