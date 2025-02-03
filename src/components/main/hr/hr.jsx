import css from './hr.module.scss';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useState } from 'react';
export const HR = () => {
    const [value, setValue] = useState('vacations');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
    return (
        <main>
            <div className={css.layout}>
            <Box sx={{ width: '58%', typography: 'body1' }}>
					<TabContext value={value}>
						<Box>
							<TabList
								onChange={handleChange}
								aria-label='lab API tabs example'
							>
								<Tab label='Vacations' value='vacations' />
								<Tab label='Policies' value='policies' />
								<Tab label='Information' value='info' />
							</TabList>
						</Box>
						<TabPanel value='vacations'>
							<h1>Vacations</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
							</span>
							
						</TabPanel>
						<TabPanel value='policies'>
							<h1>HR Policies:</h1>
							<h2>Policy 1</h2>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
							<h2>Policy 2</h2>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
							<h2>Policy 3</h2>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
						</TabPanel>
						<TabPanel value='info'>
							<h1>Information</h1>
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
						</TabPanel>
					</TabContext>
				</Box>
            </div>
           
        </main>
    )
}