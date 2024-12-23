import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the toast CSS

import ProtectedRoute from './components/isAuthenticated';

import Home from './pages/Home';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Marketplace from './pages/Marketplace';
import About from './pages/About';

import Unauthorized from './components/Unauthorized';
import Login from './pages/Login';
import RegisterArtist from './pages/RegisterArtist';
import RegisterCollector from './pages/RegisterCollector';

import AdminDashboard from './pages/DashboardAdmin';
import ArtistDashboard from './pages/DashboardArtist';
import CollectorDashboard from './pages/DashboardCollector';

import DashboardArtistEditProfile from './components/DashboardArtistEditProfile';
import DashboardArtistUploadArtwork from './components/DashboardArtistUploadArtwork';
import DashboardArtistArtworks from './components/DashboardArtistArtworks';
import DashboardArtistTransaction from './components/DashboardArtistTransaction';

import DashboardAdminArtistList from './components/DashboardAdminArtistList';
import DashboardAdminArtworkList from './components/DashboardAdminArtworkList';
import DashboardAdminCollectorList from './components/DashboardAdminCollectorList';
import DashboardAdminTransactionList from './components/DashboardAdminTransactionList';

import NonAdminLayout from './components/NonAdminLayout';
import AdminLayout from './components/AdminLayout';

import ArtworkDetails from './components/ArtworkDetails';

const App = () => {
	return (
		<Router>
			<Routes>
				{/* Non-admin routes */}
				<Route element={<NonAdminLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/artists' element={<Artists />} />
					<Route path='/artworks' element={<Artworks />} />
					<Route path='/marketplace' element={<Marketplace />} />
					<Route path='/artwork/:id' element={<ArtworkDetails />} />
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register/artist' element={<RegisterArtist />} />
					<Route path='/register/collector' element={<RegisterCollector />} />
					<Route path='/unauthorized' element={<Unauthorized />} />
					{/* PRIVATE ROUTES */}
					<Route
						path='/collector/dashboard'
						element={
							<ProtectedRoute requiredRole='collector'>
								<CollectorDashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/artist/dashboard'
						element={
							<ProtectedRoute requiredRole='artist'>
								<ArtistDashboard />
							</ProtectedRoute>
						}
					>
						<Route index element={<DashboardArtistEditProfile />} />
						<Route path='edit-profile' element={<DashboardArtistEditProfile />} />
						<Route path='upload-artwork' element={<DashboardArtistUploadArtwork />} />
						<Route path='artworks' element={<DashboardArtistArtworks />} />
						<Route path='transaction' element={<DashboardArtistTransaction />} />
					</Route>
				</Route>

				{/* Admin routes */}
				<Route element={<AdminLayout />}>
					<Route
						path='/admin/dashboard'
						element={
							<ProtectedRoute requiredRole='admin'>
								<AdminDashboard />
							</ProtectedRoute>
						}
					>
						<Route index element={<DashboardAdminArtistList />}></Route>
						<Route path='list-artist' element={<DashboardAdminArtistList />}></Route>
						<Route path='list-artwork' element={<DashboardAdminArtworkList />}></Route>
						<Route path='list-collector' element={<DashboardAdminCollectorList />}></Route>
						<Route path='list-transaction' element={<DashboardAdminTransactionList />}></Route>
					</Route>
				</Route>
			</Routes>

			{/* Toast Container */}
			<ToastContainer />
		</Router>
	);
};

export default App;
