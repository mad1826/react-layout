import { useEffect, useState } from 'react';
import HousePlan from './HousePlan';
import axios from 'axios';

const HousePlans = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const loadHouses = async () => {
			const response = await axios.get('https://portiaportia.github.io/json/house-plans.json');
			setHouses(response.data);
		};
		loadHouses();
	}, []);

	return <div class='house-plans'>
		<h3>House Plans</h3>
		{houses.map(house =>
			<HousePlan name={house.name} size={house.size} bedrooms={house.bedrooms} bathrooms={house.bathrooms} key={house.name} />
		)}
	</div>;
};

export default HousePlans;