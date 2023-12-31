import { useState, useRef } from 'react';
import { parsedData } from './utils/parseJSON';
import coffee from './data/coffee.json';
import bg from './assets/img/bg-cafe.jpg';
import CoffeeCard from './components/CoffeeCard';

interface coffeeDataProps {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number;
	votes: number;
	popular: boolean;
	available: boolean;
}

const defaultData = coffee;

const App = () => {
	const [coffeeData, setCoffeeData] = useState<coffeeDataProps[]>(
		parsedData(coffee)
	);
	const allProductsBtnRef = useRef<HTMLButtonElement>(null);
	const availableBtnRef = useRef<HTMLButtonElement>(null);

	const handleAllProductsClick = () => {
		allProductsBtnRef.current?.style &&
			(allProductsBtnRef.current.style.backgroundColor = '#6F757C');
		availableBtnRef.current?.style &&
			(availableBtnRef.current.style.backgroundColor = 'transparent');

		setCoffeeData(parsedData(defaultData));
	};

	const handleAvailableClick = () => {
		availableBtnRef.current?.style &&
			(availableBtnRef.current.style.backgroundColor = '#6F757C');
		allProductsBtnRef.current?.style &&
			(allProductsBtnRef.current.style.backgroundColor = 'transparent');

		const filterAllAvailable = coffeeData.filter(
			data => data.available !== false
		);
		setCoffeeData(filterAllAvailable);
	};

	return (
		<div className='flex items-center justify-center'>
			<img
				className='w-full h-[300px] object-cover'
				src={bg}
				alt='cafe background image'
			/>
			<div className='bg-[#1B1D1F] w-11/12  mx-auto absolute top-40 rounded-md '>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-[32px] font-bold mt-16'>Our Collection</h1>
					<p className='text-center w-[48ch] text-[#6F757C] text-[16px] mt-2'>
						Introducing our Coffee Collection, a selection of unique coffees
						from different roast types and origins, expertly roasted in small
						batches and shipped fresh weekly.
					</p>
					<div className='flex gap-8 mt-6 mb-12'>
						{/* add btn neutral class to whichever one is active */}
						<button
							ref={allProductsBtnRef}
							onClick={handleAllProductsClick}
							className='btn bg-[#6F757C] hover:bg-transparent border-none'>
							All Products
						</button>
						<button
							ref={availableBtnRef}
							onClick={handleAvailableClick}
							className='btn btn-ghost'>
							Available
						</button>
					</div>
					<CoffeeCard coffeeData={coffeeData} />
				</div>
			</div>
		</div>
	);
};

export default App;
