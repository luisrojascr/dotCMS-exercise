import { Routes } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'news-list', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
];

