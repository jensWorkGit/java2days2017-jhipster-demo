import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { EntryComponent } from './entry.component';
import { EntryDetailComponent } from './entry-detail.component';
import { EntryPopupComponent } from './entry-dialog.component';
import { EntryDeletePopupComponent } from './entry-delete-dialog.component';

@Injectable()
export class EntryResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const entryRoute: Routes = [
    {
        path: 'entry',
        component: EntryComponent,
        resolve: {
            'pagingParams': EntryResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'java2DaysApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'entry/:id',
        component: EntryDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'java2DaysApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const entryPopupRoute: Routes = [
    {
        path: 'entry-new',
        component: EntryPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'java2DaysApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'entry/:id/edit',
        component: EntryPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'java2DaysApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'entry/:id/delete',
        component: EntryDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'java2DaysApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
