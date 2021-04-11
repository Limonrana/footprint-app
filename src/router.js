import Vue from 'vue'
import Router from 'vue-router'
//Import Components
import Category from './components/Category'
import GetStarted from './components/GetStarted'
import ScanningResult from './components/ScanningResult'
Vue.use(Router)


const routes = [
    { path: '/',  component: GetStarted, name: 'GetStarted' },
    { path: '/category',  component: Category, name: 'Category' },
    { path: '/scanning-result',  component: ScanningResult, name: 'ScanningResult' },
]

export default new Router ({
    mode: 'history',
    routes
})