import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import aboutBanner from '../assets/images/label-images/bg-about.jpg';

const About = () => {
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
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 60%), url(${aboutBanner})`,
					}}
				>
					<h2 className='text-white text-3xl font-bold'>About</h2>
				</div>

				{/* FILTER */}
				<div></div>

				{/* About */}
				<div></div>
			</div>
		</div>
	);
};

export default About;
