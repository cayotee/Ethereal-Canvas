import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import artistBanner from '../assets/images/label-images/bg-artist.jpg';

const Artists = () => {
	const { isDropdownOpen } = useOutletContext();

	return (
		<div
			className={`font-custom container max-w-7xl mx-auto mt-5 px-4 relative -z-50 ${isDropdownOpen ? '-z-50' : ''}`}
		>
			<div>
				{/* LABEL */}
				<div
					className='bg-cover bg-center py-5 px-10 relative rounded-2xl'
					style={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 50%), url(${artistBanner})`,
					}}
				>
					<h2 className='text-white text-3xl font-bold'>Artists</h2>
				</div>

				{/* FILTER */}
				<div></div>

				{/* ARTISTS */}
				<div></div>
			</div>
		</div>
	);
};

export default Artists;
