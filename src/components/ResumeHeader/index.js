import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

const ResumeHeader = () => (
	<div className='resumeHeader'>
		<h1>Kevin Arevalo</h1>
		<div className='emailAddress'>Arevalok91@gmail.com </div>
		<div className='phoneNumber'> 919-408-4205</div>
		<div className='SocialIcons'>
			<a
				href='https://www.linkedin.com/in/kevin-arevalo-0b9221122/'
				className='linkedin social'>
				<FontAwesomeIcon icon={faLinkedin} size='2x' />
			</a>
			<a href='https://github.com/arevalok91' className='github social'>
				<FontAwesomeIcon icon={faGithub} size='2x' />
			</a>
			<a href='https://www.twitter.com/arevalok91' className='twitter social'>
				<FontAwesomeIcon icon={faTwitter} size='2x' />
			</a>
			<a
				href='https://www.instagram.com/mr_ar3valo'
				className='instagram social'>
				<FontAwesomeIcon icon={faInstagram} size='2x' />
			</a>
		</div>
	</div>
);

export default ResumeHeader;
