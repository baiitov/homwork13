import React, { useState } from 'react'
import { useEffect } from 'react'
import './Fetch.css'
const Fetch = () => {
	const [newData, setNewData] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then((response) => {
				return response.json()
			})
			.then((data) => setNewData(data))
	}, [])

	return (
		<div className='container' >
			{newData.map((el) => (
				<div className='block'>
					{console.log(newData)}
					<p className='id'>{el.id}</p>
					<p className='text'>{el.title}</p>

					<img src={el.thumbnailUrl} alt='' />
				</div>
			))}
		</div>
	)
}

export default Fetch
