declare module '@capacitor/core' {
  interface PluginRegistry {
    PostNotificationsPermission: PostNotificationsPermissionPlugin;
  }
}

export interface PostNotificationsPermissionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
