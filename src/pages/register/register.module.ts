import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

import { RegisterV1Module} from '../../components/register/register-v1/register-v1.module';
import { RegisterV2Module } from '../../components/register/register-v2/register-v2.module';
import { RegisterV3Module } from '../../components/register/register-v3/register-v3.module';
import { RegisterV4Module } from '../../components/register/register-v4/register-v4.module';
import { RegisterV5Module } from '../../components/register/register-v5/register-v5.module';
import { RegisterV6Module } from '../../components/register/register-v6/register-v6.module';
import { SuccessSignupModule } from '../../components/register/success-signup/success-signup.module';


@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RegisterV1Module,
    RegisterV2Module,
    RegisterV3Module,
    RegisterV4Module,
    RegisterV5Module,
    RegisterV6Module,
    SuccessSignupModule
  ],
})

export class RegisterPageModule {}
