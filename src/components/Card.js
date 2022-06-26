import LeftCard from './LeftCard';

function Card(props) {
    return (
        <div className="content">
            <div className='card'>
                <img src="images/image2.jpg" />
            </div>

            <LeftCard />
        </div>
    );
}

export default Card;