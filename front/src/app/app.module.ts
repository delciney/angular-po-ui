import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import {
  PoAccordionModule,
  PoAvatarModule,
  PoBreadcrumbModule,
  PoButtonModule,
  PoFieldModule
} from '@po-ui/ng-components';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ComboComponent } from './components/combo/combo.component';
import { ContainerComponent } from './components/container/container.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatepickerRangeComponent } from './components/datepicker-range/datepicker-range.component';
import { DecimalComponent } from './components/decimal/decimal.component';
import { DisclaimerGroupComponent } from './components/disclaimer-group/disclaimer-group.component';
import { DividerComponent } from './components/divider/divider.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicViewComponent } from './components/dynamic-view/dynamic-view.component';
import { EmailComponent } from './components/email/email.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { GridComponent } from './components/grid/grid.component';
import { InfoComponent } from './components/info/info.component';
import { InputComponent } from './components/input/input.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { LoginComponent } from './components/login/login.component';
import { LookupComponent } from './components/lookup/lookup.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalPasswordRecoveryComponent } from './components/modal-password-recovery/modal-password-recovery.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NumberComponent } from './components/number/number.component';
import { PageBlockedUserComponent } from './components/page-blocked-user/page-blocked-user.component';
import { PageChangePasswordComponent } from './components/page-change-password/page-change-password.component';
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageDynamicDetailComponent } from './components/page-dynamic-detail/page-dynamic-detail.component';
import { PageDynamicEditComponent } from './components/page-dynamic-edit/page-dynamic-edit.component';
import { PageDynamicSearchComponent } from './components/page-dynamic-search/page-dynamic-search.component';
import { PageDynamicTableComponent } from './components/page-dynamic-table/page-dynamic-table.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { PageJobSchedulerComponent } from './components/page-job-scheduler/page-job-scheduler.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageSlideComponent } from './components/page-slide/page-slide.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AvatarComponent,
    BreadcrumbComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CalendarComponent,
    ChartComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    CodeEditorComponent,
    ComboComponent,
    ContainerComponent,
    DatepickerComponent,
    DatepickerRangeComponent,
    DecimalComponent,
    DisclaimerGroupComponent,
    DividerComponent,
    DropdownComponent,
    DynamicFormComponent,
    DynamicViewComponent,
    EmailComponent,
    GaugeComponent,
    GridComponent,
    InfoComponent,
    InputComponent,
    ListViewComponent,
    LoadingOverlayComponent,
    LoginComponent,
    LookupComponent,
    MenuComponent,
    MenuPanelComponent,
    ModalComponent,
    ModalPasswordRecoveryComponent,
    MultiselectComponent,
    NavbarComponent,
    NumberComponent,
    PageBlockedUserComponent,
    PageChangePasswordComponent,
    PageDefaultComponent,
    PageDetailComponent,
    PageDynamicDetailComponent,
    PageDynamicEditComponent,
    PageDynamicSearchComponent,
    PageDynamicTableComponent,
    PageEditComponent,
    PageJobSchedulerComponent,
    PageListComponent,
    PageLoginComponent,
    PageSlideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoTemplatesModule,
    PoAccordionModule,
    PoAvatarModule,
    PoBreadcrumbModule,
    PoButtonModule,
    PoFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
