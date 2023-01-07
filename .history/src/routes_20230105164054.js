import Dashboard from 'views/Dashboard.js'
import UserProfile from 'views/UserProfile.js'
import PatientProfile from 'views/Patient/PatientProfile'
import TableList from 'views/TableList.js'
import Typography from 'views/Typography.js'
import Icons from 'views/Icons.js'
import Maps from 'views/Maps.js'
import Notifications from 'views/Notifications.js'
import Upgrade from 'views/Upgrade.js'
import Login from 'views/auth/Login/Login'
import Signup from 'views/auth/Signup/Signup'

const dashboardRoutes = [
	{
		upgrade: true,
		path: '/upgrade',
		name: 'Upgrade to PRO',
		icon: 'nc-icon nc-alien-33',
		component: Upgrade,
		layout: '/admin',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'nc-icon nc-chart-pie-35',
		component: Dashboard,
		layout: '/admin',
	},
	{
		path: '/user',
		name: 'Paciente',
		icon: 'nc-icon nc-circle-09',
		component: PatientProfile,
		layout: '/admin',
	},
	{
		path: '/signup',
		name: 'Signup',
		icon: 'nc-icon nc-circle-09',
		component: Signup,
		layout: '/admin',
	},
	{
		path: '/user',
		name: 'User Profile',
		icon: 'nc-icon nc-circle-09',
		component: UserProfile,
		layout: '/admin',
	},
	{
		path: '/table',
		name: 'Table List',
		icon: 'nc-icon nc-notes',
		component: TableList,
		layout: '/admin',
	},
	{
		path: '/typography',
		name: 'Typography',
		icon: 'nc-icon nc-paper-2',
		component: Typography,
		layout: '/admin',
	},
	{
		path: '/icons',
		name: 'Icons',
		icon: 'nc-icon nc-atom',
		component: Icons,
		layout: '/admin',
	},
	{
		path: '/maps',
		name: 'Maps',
		icon: 'nc-icon nc-pin-3',
		component: Maps,
		layout: '/admin',
	},
	{
		path: '/notifications',
		name: 'Notifications',
		icon: 'nc-icon nc-bell-55',
		component: Notifications,
		layout: '/admin',
	},
]

const routes = (props) => {
	return [
		{
			path: '/admin/login',
			element: <Login {...props} />,
		},
		{
			path: '/admin/dashboard',
			element: <Dashboard {...props} />,
		},
	]
}
export { routes, dashboardRoutes }
