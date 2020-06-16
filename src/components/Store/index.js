import React, { useState } from 'react';
import Header from '../Header/index';
import AutoCarrousel from '../AutoCarrousel/index';
import Footer from '../Footer/index';
import Card from '../Card/index';
import CardLocation from '../CardLocation/index';
import PinGPS from '../PinGPS/index';
import img1 from '../../images/1_table.jpg';
import img2 from '../../images/2_table.jpg';
import img3 from '../../images/3_table.jpg';
import styles from './index.module.sass';
import Input from '../CDS/Input/Input';
import InputDemo from '../Input/InputDemo';

const items = [
	{
		image: img1,
	},
	{
		image: img2,
	},
	{
		image: img3,
	},
];




function Store({ device }) {
	const [index, setIndex] = useState(0);
	const { screenSize } = device;
	console.log(screenSize, device);
	return (
		<>
			<nav className="flex justify-between bb b--gray">
					<a className="link white-70 hover-white no-underline flex items-center pa3" href="">
						<svg
						className="dib h1 w1"
						data-icon="grid"
						viewBox="0 0 32 32"
						style={{fill:'green'}}>
						<title>Super Normal Icon Mark</title>
						<path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
						</path>
						</svg>
					</a>
					<div className="flex-grow pa3 flex items-center">
						<a className="f6 link dib black dim mr3 mr4-ns" href="#0">About</a>
						<a className="f6 link dib black dim mr3 mr4-ns" href="#0">Sign In</a>
						<a className="	f6 dib black
										bg-animate 
										hover-bg-green
										hover-white 
										no-underline 
										pv2 ph4 
										br-pill 
										ba 
										b--green" href="#0">Sign Up</a>
					</div>
				</nav>
			<div className="flex flex-column items-center">
				
				<InputDemo />
				<div className="flex items-center justify-center pa4">
					<a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
						<svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
							<title>chevronLeft icon</title>
							<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
						</svg>
						<span className="pl1">Previous</span>
					</a>
					<a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
						<span className="pr1">Next</span>
						<svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
						<title>chevronRight icon</title>
						<path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
}

export default Store;
