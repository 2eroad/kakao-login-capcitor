declare module '@capacitor/core' {
  interface PluginRegistry {
    KaKaoLoginPlugin: KaKaoLoginPluginPlugin;
  }
}

export interface KaKaoLoginPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
