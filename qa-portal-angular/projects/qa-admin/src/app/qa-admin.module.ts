import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management-console/user-management.component';
import { RoleChipsComponent } from './role-chips/role-chips.component';
import { QaCommonModule } from '../../../qa-common/src/app/qa-common.module';

import { CohortChipsComponent } from './cohort-chips/cohort-chips.component';
import { QaAdminRoutingModule } from './qa-admin-routing.module';
import { CohortManagementComponent } from './cohort-management/cohort-management.component';
import { DeleteUserDialogComponent } from './user-management-console/delete-user-dialog/delete-user-dialog.component';
import { UpdateUserCohortDialogComponent } from './user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component';
import { UpdateUserRoleDialogComponent } from './user-management-console/update-user-role-dialog/update-user-role-dialog.component';
import { AddUserDialogComponent } from './user-management-console/add-user-dialog/add-user-dialog.component';
import { CohortDetailComponent } from './cohort-detail/cohort-detail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    UserManagementComponent,
    RoleChipsComponent,
    CohortChipsComponent,
    AddUserDialogComponent,
    CohortManagementComponent,
    DeleteUserDialogComponent,
    UpdateUserCohortDialogComponent,
    UpdateUserRoleDialogComponent,
    CohortDetailComponent
  ],
  imports: [
    QaCommonModule,
    QaAdminRoutingModule,
    DragDropModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  entryComponents: [
    // User
    AddUserDialogComponent,
    DeleteUserDialogComponent,
    UpdateUserCohortDialogComponent,
    UpdateUserRoleDialogComponent
  ]
})
export class QaAdminModule { }
