import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UiElementsPage } from './ui-elements';

import { ActionSheetsModule } from '../../components/ui-elements/actionsheets/actionsheets.module';
import { AlertsModule } from '../../components/ui-elements/alerts/alerts.module';
import { BadgesModule } from '../../components/ui-elements/badges/badges.module';
import { ButtonsModule } from '../../components/ui-elements/buttons/buttons.module';
import { CardsModule } from '../../components/ui-elements/cards/cards.module';
import { CheckboxModule } from '../../components/ui-elements/checkbox/checkbox.module';
import { DateTimeModule } from '../../components/ui-elements/datetime/datetime.module';
import { FABsModule } from '../../components/ui-elements/fabs/fabs.module';
import { InputsModule } from '../../components/ui-elements/inputs/inputs.module';
import { ListsModule } from '../../components/ui-elements/lists/lists.module';
import { LoadingModule } from '../../components/ui-elements/loading/loading.module';
import { MenusModule } from '../../components/ui-elements/menus/menus.module';
import { ModalsModule } from '../../components/ui-elements/modals/modals.module';

import { ModalBasicModule } from '../../components/ui-elements/modal-basic/modal-basic.module';

import { PopoverModule } from '../../components/ui-elements/popover/popover.module';
import { RadioModule } from '../../components/ui-elements/radio/radio.module';
import { RangeModule } from '../../components/ui-elements/range/range.module';
import { SearchbarModule } from '../../components/ui-elements/searchbar/searchbar.module';
import { SegmentModule } from '../../components/ui-elements/segment/segment.module';
import { SelectModule } from '../../components/ui-elements/select/select.module';
import { SlidesModule } from '../../components/ui-elements/slides/slides.module';
import { TabsModule } from '../../components/ui-elements/tabs/tabs.module';
import { ToastModule } from '../../components/ui-elements/toast/toast.module';
import { ToggleModule } from '../../components/ui-elements/toggle/toggle.module';
import { ToolbarModule } from '../../components/ui-elements/toolbar/toolbar.module';


@NgModule({
  declarations: [
    UiElementsPage
  ],
  imports: [
    IonicPageModule.forChild(UiElementsPage),
    ActionSheetsModule,
    AlertsModule,
    BadgesModule,
    ButtonsModule,
    CardsModule,
    CheckboxModule,
    DateTimeModule,
    FABsModule,
    InputsModule,
    ListsModule,
    LoadingModule,
    MenusModule,
    ModalsModule,
    ModalBasicModule,
    PopoverModule,
    RadioModule,
    RangeModule,
    SearchbarModule,
    SegmentModule,
    SelectModule,
    SlidesModule,
    TabsModule,
    ToastModule,
    ToggleModule,
    ToolbarModule,
  ],
})
export class UiElementsPageModule {}
