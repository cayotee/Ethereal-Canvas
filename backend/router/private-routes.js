import express from 'express';
import { registerAdmin } from '../controller/private/admin/admin-register.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';

import { artists, collectors, admins } from '../controller/private/admin/admin-get-users.js';
import { artworks } from '../controller/private/admin/admin-get-artworks.js';

import {
	approveArtist,
	rejectArtist,
	disableArtist,
} from '../controller/private/admin/admin-update-artist-status.js';

import {
	artworkApprove,
	artworkReject,
	artworkDisable,
} from '../controller/private/admin/admin-update-artwork-status.js';

import { disableCollector } from '../controller/private/admin/admin-update-collector-status.js';

import { getArtistDashboardProfile } from '../controller/private/artist/artist-dashboard-get-profile.js';
import { ArtistUpdateDetails } from '../controller/private/artist/artist-dashboard-update-details.js';
import { ArtistUpdateAvatar } from '../controller/private/artist/artist-dashboard-update-avatar.js';
import { ArtistRemoveAvatar } from '../controller/private/artist/artist-dashboard-remove-avatar.js';
import { ArtworkUpload } from '../controller/private/artist/artist-upload-artwork.js';
import { RetrieveArtworks } from '../controller/private/artist/artist-dashboard-retrieve-artworks.js';
import { createCheckoutLink } from '../controller/private/collector/collector-checkout-link.js';

import { getCollectorDashboardProfile } from '../controller/private/collector/collector-dashboard-get-profile.js';

const router = express.Router();

router.post('/admin/admin-registration', authorizeRoles('admin'), registerAdmin);

// RETRIEVE
router.get('/admin/artists', authorizeRoles('admin'), artists);
router.get('/admin/collectors', authorizeRoles('admin'), collectors);
router.get('/admin/admins', authorizeRoles('admin'), admins);
router.get('/admin/artworks', authorizeRoles('admin'), artworks);

// UPDATE ARTIST STATUS
router.patch('/admin/approve-artist/:id', authorizeRoles('admin'), approveArtist);
router.patch('/admin/reject-artist/:id', authorizeRoles('admin'), rejectArtist);
router.patch('/admin/disable-artist/:id', authorizeRoles('admin'), disableArtist);

// UPDATE ARTWORK STATUS
router.patch('/admin/approve-artwork/:id', authorizeRoles('admin'), artworkApprove);
router.patch('/admin/reject-artwork/:id', authorizeRoles('admin'), artworkReject);
router.patch('/admin/disable-artwork/:id', authorizeRoles('admin'), artworkDisable);

// UPDATE COLLECTOR STATUS
router.patch('/admin/disable-collector/:id', authorizeRoles('admin'), disableCollector);

// ARTIST DASHBOARD EDIT PROFILE
router.get('/artist/dashboard-profile/:id', authorizeRoles('artist'), getArtistDashboardProfile);
router.put('/artist/dashboard-update-details', authorizeRoles('artist'), ArtistUpdateDetails);
router.put('/artist/dashboard-update-avatar', authorizeRoles('artist'), ArtistUpdateAvatar);
router.put('/artist/dashboard-remove-avatar', authorizeRoles('artist'), ArtistRemoveAvatar);
router.post('/artist/dashboard-upload-artwork', authorizeRoles('artist'), ArtworkUpload);
router.get('/artist/dashboard-retrieve-artworks', authorizeRoles('artist'), RetrieveArtworks);

// COLLECTOR
router.post('/artwork-checkout', authorizeRoles('collector'), createCheckoutLink);
router.get(
	'/collector/dashboard-profile/:id',
	authorizeRoles('collector'),
	getCollectorDashboardProfile
);

export default router;
