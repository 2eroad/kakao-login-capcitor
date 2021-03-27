import { WebPlugin } from '@capacitor/core';
import { KaKaoLoginPluginPlugin } from './definitions';

export class KaKaoLoginPluginWeb extends WebPlugin implements KaKaoLoginPluginPlugin {
  constructor() {
    super({
      name: 'KaKaoLoginPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const KaKaoLoginPlugin = new KaKaoLoginPluginWeb();

export { KaKaoLoginPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KaKaoLoginPlugin);
