import { WebPlugin } from '@capacitor/core';
import { PostNotificationsPermissionPlugin } from './definitions';

export class PostNotificationsPermissionWeb extends WebPlugin implements PostNotificationsPermissionPlugin {
  constructor() {
    super({
      name: 'PostNotificationsPermission',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const PostNotificationsPermission = new PostNotificationsPermissionWeb();

export { PostNotificationsPermission };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PostNotificationsPermission);
