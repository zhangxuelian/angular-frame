import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.page';
import { NewsPage } from '../pages/news/news.page';
import { AboutPage } from '../pages/about/about.page';
import { NotFoundPage } from '../pages/notfound/notfound.page';

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'home', component: HomePage },
    { path: 'news', component: NewsPage },
    { path: 'about', component: AboutPage },
    { path: '**', component: NotFoundPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }