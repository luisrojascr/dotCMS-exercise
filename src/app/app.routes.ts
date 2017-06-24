import { Routes } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';

export const rootRouterConfig: Routes = [
    { path: '', component: NewsListComponent },
];

