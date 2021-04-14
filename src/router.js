import Vue from 'vue'
import Router from 'vue-router'
//Import Components
import Analytics from './components/Analytics'
import Category from './components/Category'
import GetStarted from './components/GetStarted'
import Integration from './components/Integration'
import Plan from './components/Plan'
import ScanningResult from './components/ScanningResult'
Vue.use(Router)


const routes = [
    { path: '/',  component: GetStarted, name: 'GetStarted' },
    { path: '/category',  component: Category, name: 'Category' },
    { path: '/scanning-result',  component: ScanningResult, name: 'ScanningResult' },
    { path: '/integration',  component: Integration, name: 'Integration' },
    { path: '/analytics',  component: Analytics, name: 'Analytics' },
    { path: '/plan-switch',  component: Plan, name: 'Plan' },
]

export default new Router ({
    mode: 'history',
    routes
})