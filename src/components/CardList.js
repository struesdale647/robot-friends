import React from 'react';
import Card from './Card';

//Loops the array in robot.js, and populates the card for each detail.
const CardList = ({ robots }) => {	
	return (
		<div>
			{
			robots.map((user, i) =>{
				return (
					<Card key={i}
					id={robots[i].id}
					name={robots[i].name}
					username={robots[i].username}
					email={robots[i].email}
					/>
				);
			})
		}
		</div>	
	);
}

export default CardList;