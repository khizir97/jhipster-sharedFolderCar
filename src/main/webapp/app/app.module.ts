import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SharedFolderCarSharedModule } from 'app/shared/shared.module';
import { SharedFolderCarCoreModule } from 'app/core/core.module';
import { SharedFolderCarAppRoutingModule } from './app-routing.module';
import { SharedFolderCarHomeModule } from './home/home.module';
import { SharedFolderCarEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedFolderCarSharedModule,
    SharedFolderCarCoreModule,
    SharedFolderCarHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SharedFolderCarEntityModule,
    SharedFolderCarAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class SharedFolderCarAppModule {}
