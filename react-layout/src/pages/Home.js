import Tree from '../components/Tree';
import '../css/Home.css';

const Home = () => {
	return (
		<div className='trees'>
			<Tree name='Bald Cypress' image='images/bald-cypress.jpg' />
			<Tree name='Eastern Redbud' image='images/eastern-redbud.webp' />
			<Tree name='Live Oak' image='images/live-oak.jpeg' />
		</div>
	);
};

export default Home;