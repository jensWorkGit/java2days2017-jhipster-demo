import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Java2DaysBlogModule } from './blog/blog.module';
import { Java2DaysEntryModule } from './entry/entry.module';
import { Java2DaysTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Java2DaysBlogModule,
        Java2DaysEntryModule,
        Java2DaysTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Java2DaysEntityModule {}
