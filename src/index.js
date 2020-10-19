import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component';
import { FavoriteComponent } from './components/favorite.component';
import { PostComponent } from './components/posts.component';
import { CreateComponent } from './components/create.component';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const create = new CreateComponent('create')
const posts = new PostComponent('posts')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
	{name: 'create', component: create},
	{name: 'posts', component: posts},
	{name: 'favorite', component: favorite},
])