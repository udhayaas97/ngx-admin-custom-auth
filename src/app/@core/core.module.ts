import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import { NbAuthModule } from "@nebular/auth";

import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LayoutService } from "./utils/layout.service";
import { SeoService } from "./utils/seo.service";
import { StateService } from "./utils/state.service";

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({}).providers,
  LayoutService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
