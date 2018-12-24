/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LandRecordComponent } from './LandRecord/LandRecord.component';
import { NurseryComponent } from './Nursery/Nursery.component';
import { GoKComponent } from './GoK/GoK.component';
import { TreasuryComponent } from './Treasury/Treasury.component';

import { FarmerAgentComponent } from './FarmerAgent/FarmerAgent.component';
import { NurseryAdminComponent } from './NurseryAdmin/NurseryAdmin.component';
import { InspectionOfficerComponent } from './InspectionOfficer/InspectionOfficer.component';
import { TreasuryAdminComponent } from './TreasuryAdmin/TreasuryAdmin.component';

import { VerificationComponent } from './Verification/Verification.component';
import { MonitoringComponent } from './Monitoring/Monitoring.component';
import { DisbursementComponent } from './Disbursement/Disbursement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'LandRecord', component: LandRecordComponent },
  { path: 'Nursery', component: NurseryComponent },
  { path: 'GoK', component: GoKComponent },
  { path: 'Treasury', component: TreasuryComponent },
  { path: 'FarmerAgent', component: FarmerAgentComponent },
  { path: 'NurseryAdmin', component: NurseryAdminComponent },
  { path: 'InspectionOfficer', component: InspectionOfficerComponent },
  { path: 'TreasuryAdmin', component: TreasuryAdminComponent },
  { path: 'Verification', component: VerificationComponent },
  { path: 'Monitoring', component: MonitoringComponent },
  { path: 'Disbursement', component: DisbursementComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
