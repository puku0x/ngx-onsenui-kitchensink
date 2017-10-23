import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { AppService } from './services/app.service';

/**
 * Core module
 */
@NgModule({
  imports: [],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppService,
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
