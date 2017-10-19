import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Java2DaysSharedModule } from '../../shared';
import {
    EntryService,
    EntryPopupService,
    EntryComponent,
    EntryDetailComponent,
    EntryDialogComponent,
    EntryPopupComponent,
    EntryDeletePopupComponent,
    EntryDeleteDialogComponent,
    entryRoute,
    entryPopupRoute,
    EntryResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...entryRoute,
    ...entryPopupRoute,
];

@NgModule({
    imports: [
        Java2DaysSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EntryComponent,
        EntryDetailComponent,
        EntryDialogComponent,
        EntryDeleteDialogComponent,
        EntryPopupComponent,
        EntryDeletePopupComponent,
    ],
    entryComponents: [
        EntryComponent,
        EntryDialogComponent,
        EntryPopupComponent,
        EntryDeleteDialogComponent,
        EntryDeletePopupComponent,
    ],
    providers: [
        EntryService,
        EntryPopupService,
        EntryResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Java2DaysEntryModule {}
