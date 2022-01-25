import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ComboComponent } from './components/combo/combo.component';
import { ContainerComponent } from './components/container/container.component';
import { DatepickerRangeComponent } from './components/datepicker-range/datepicker-range.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
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
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalPasswordRecoveryComponent } from './components/modal-password-recovery/modal-password-recovery.component';
import { ModalComponent } from './components/modal/modal.component';
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

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'Accordion',
    component: AccordionComponent
  },
  {
    path: 'Avatar',
    component: AvatarComponent
  },
  {
    path: 'Breadcrumb',
    component: BreadcrumbComponent
  },
  {
    path: 'Button',
    component: ButtonComponent
  },
  {
    path: 'ButtonGroup',
    component: ButtonGroupComponent
  },
  {
    path: 'Calendar',
    component: CalendarComponent
  },
  {
    path: 'Chart',
    component: ChartComponent
  },
  {
    path: 'Checkbox',
    component: CheckboxComponent
  },
  {
    path: 'CheckboxGroup',
    component: CheckboxGroupComponent
  },
  {
    path: 'CodeEditor',
    component: CodeEditorComponent
  },
  {
    path: 'Combo',
    component: ComboComponent
  },
  {
    path: 'Container',
    component: ContainerComponent
  },
  {
    path: 'Datepicker',
    component: DatepickerComponent
  },
  {
    path: 'DatepickerRange',
    component: DatepickerRangeComponent
  },
  {
    path: 'Decimal',
    component: DecimalComponent
  },
  {
    path: 'DisclaimerGroup',
    component: DisclaimerGroupComponent
  },
  {
    path: 'Divider',
    component: DividerComponent
  },
  {
    path: 'Dropdown',
    component: DropdownComponent
  },
  {
    path: 'DynamicForm',
    component: DynamicFormComponent
  },
  {
    path: 'DynamicView',
    component: DynamicViewComponent
  },
  {
    path: 'Email',
    component: EmailComponent
  },
  {
    path: 'Gauge',
    component: GaugeComponent
  },
  {
    path: 'Grid',
    component: GridComponent
  },
  {
    path: 'Info',
    component: InfoComponent
  },
  {
    path: 'Input',
    component: InputComponent
  },
  {
    path: 'ListView',
    component: ListViewComponent
  },
  {
    path: 'LoadingOverlay',
    component: LoadingOverlayComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Lookup',
    component: LookupComponent
  },
  {
    path: 'Menu',
    component: MenuComponent
  },
  {
    path: 'MenuPanel',
    component: MenuPanelComponent
  },
  {
    path: 'Modal',
    component: ModalComponent
  },
  {
    path: 'ModalPasswordRecovery',
    component: ModalPasswordRecoveryComponent
  },
  {
    path: 'Multiselect',
    component: MultiselectComponent
  },
  {
    path: 'Navbar',
    component: NavbarComponent
  },
  {
    path: 'Number',
    component: NumberComponent
  },
  {
    path: 'PageBlockedUser',
    component: PageBlockedUserComponent
  },
  {
    path: 'PageChangePassword',
    component: PageChangePasswordComponent
  },
  {
    path: 'PageDefault',
    component: PageDefaultComponent
  },
  {
    path: 'PageDetail',
    component: PageDetailComponent
  },
  {
    path: 'PageDynamicDetail',
    component: PageDynamicDetailComponent
  },
  {
    path: 'PageDynamicEdit',
    component: PageDynamicEditComponent
  },
  {
    path: 'PageDynamicSearch',
    component: PageDynamicSearchComponent
  },
  {
    path: 'PageDynamicTable',
    component: PageDynamicTableComponent
  },
  {
    path: 'PageEdit',
    component: PageEditComponent
  },
  {
    path: 'PageJobScheduler',
    component: PageJobSchedulerComponent
  },
  {
    path: 'PageList',
    component: PageListComponent
  },
  {
    path: 'PageLogin',
    component: PageLoginComponent
  },
  {
    path: 'PageSlide',
    component: PageSlideComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
