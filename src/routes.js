import Home from './Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageTwoMenu from './components/PageTwoMenu';
import TwoA from './components/TwoA';
import TwoB from './components/TwoB';
 
export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/page-one', component: PageOne, name: 'one'},
    {
        path: '/page-two', component: PageTwo, children: [
            {path: '', component: PageTwoMenu},
            {path: 'a', component: TwoA},
            {path: 'b', component: TwoB}
        ]
    },
    {path: '/redirect-user', redirect: '/page-two'},
    {path: '*', redirect: '/'}
];