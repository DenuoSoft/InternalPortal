import css from './main.module.scss';
//import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useState } from 'react';
//import { Search } from './search/search';
//import {Form} from "./form/form";
//import * as React from 'react';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import CardActionArea from '@mui/material/CardActionArea';
//import CardActions from '@mui/material/CardActions';
//import Search from './search/search'
export const Main = () => {
	const [value, setValue] = useState('news');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<main>
			<div className={css.layout}>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={value}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<TabList onChange={handleChange} aria-label='lab API tabs example'>
								<Tab label='News' value='news' />
								<Tab label='Events' value='events' />
								<Tab label='Other' value='other' />
							</TabList>
						</Box>
						<TabPanel value='news'>
							<h1>News 1</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
								explicabo error doloremque doloribus velit quod consequatur
								sequi ratione facilis cupiditate. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. In quidem vel nisi mollitia
								corporis voluptatum tenetur, provident quia voluptates explicabo
								error doloremque doloribus velit quod consequatur sequi ratione
								facilis cupiditate.
							</span>
							<h1>News 2</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
								explicabo error doloremque doloribus velit quod consequatur
								sequi ratione facilis cupiditate. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. In quidem vel nisi mollitia
								corporis voluptatum tenetur, provident quia voluptates explicabo
								error doloremque doloribus velit quod consequatur sequi ratione
								facilis cupiditate.
							</span>
							<h1>News 3</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
						</TabPanel>
						<TabPanel value='events'>
							<h1>February events:</h1>
							<h2>Event 1</h2>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
							<h2>Event 2</h2>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
							<h3>Event 3</h3>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
						</TabPanel>
						<TabPanel value='other'>Other:</TabPanel>
					</TabContext>
				</Box>
			</div>
		</main>
	);
};
