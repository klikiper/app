import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { LoginV1Module} from '../../components/login/login-v1/login-v1.module';
import { LoginV2Module } from '../../components/login/login-v2/login-v2.module';
import { LoginV3Module } from '../../components/login/login-v3/login-v3.module';
import { LoginV4Module } from '../../components/login/login-v4/login-v4.module';
import { LoginV5Module } from '../../components/login/login-v5/login-v5.module';
import { LoginV6Module } from '../../components/login/login-v6/login-v6.module';
import { LoginV7Module } from '../../components/login/login-v7/login-v7.module';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LoginV1Module,
    LoginV2Module,
    LoginV3Module,
    LoginV4Module,
    LoginV5Module,
    LoginV6Module,
    LoginV7Module
  ],
})
export class LoginPageModule {}
