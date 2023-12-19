import star from '../assets/img/Star_fill.svg';
import noFillStar from '../assets/img/Star.svg';

interface CoffeeDataProps {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number;
	votes: number;
	popular: boolean;
	available: boolean;
}

const CoffeeCard = ({ coffeeData }: { coffeeData: CoffeeDataProps[] }) => {
	return (
		<div className='grid lg:grid-cols-2 gap-8 relative'>
			{coffeeData.map(data => (
				<div className='card w-96'>
					<figure>
						<img
							className='w-full'
							src={data.image}
							alt={data.name}
						/>
					</figure>
					<div className='card-body'>
						<div className='flex justify-between items-center'>
							<h2 className='card-title'>{data.name}</h2>
							<div className='text-black py-1 px-2 rounded-md bg-[#BEE3CC]'>
								{data.price}
							</div>
						</div>
						<div className='flex '>
							{data.rating && data.votes ? (
								<>
									<img
										className='mr-1'
										src={star}
										alt='star'
									/>
									<span className='mr-1'>{data.rating}</span>
									<span className='text-[#6F757C]'>({data.votes} votes)</span>
								</>
							) : (
								<>
									<img
										src={noFillStar}
										alt='no fill star'
									/>
									<span className='text-[#6F757C]'>No ratings</span>
								</>
							)}
						</div>
					</div>
					{data.popular && (
						<div className='text-black py-1 px-4 rounded-full bg-[#F6C768] absolute top-3 left-3 font-bold'>
							Popular
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default CoffeeCard;
