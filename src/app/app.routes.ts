import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { StoreComponent } from './store/store.component';
import { GiveawayComponent } from './giveaway/giveaway.component';

export const routes: Routes = [
    {
        path: 'projects',
        title: 'Projects',
        component: ProjectsComponent
    },
    {
        path: 'store',
        title: 'Store',
        component: StoreComponent
    },
    {
        path: 'chat',
        title: 'Chat',
        component: ChatComponent
    },
    {
        path: 'gallery',
        title: 'Gallery',
        component: GalleryComponent
    },
    {
        path: 'giveaway',
        title: 'Giveaway',
        component: GiveawayComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'projects'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];
