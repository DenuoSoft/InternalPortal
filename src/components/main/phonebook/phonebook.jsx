import css from './phonebook.module.scss'
import { useState } from 'react';
import { userData } from '../../../data/userData';

export const Phonebook = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [contacts, setContacts] = useState(userData || []);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};
  const columns = ['Name', 'Job position', 'Extension', 'Mobile phone', 'Office'] 
	const filteredContacts = contacts.filter(
		(contact) =>
			(contact.name &&
				contact.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(contact.position &&
				contact.position.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(contact.phone && contact.phone.includes(searchTerm)) ||
			(contact.location &&
				contact.location.toLowerCase().includes(searchTerm.toLowerCase()))
	);

  return (
    <main>
      <div className={css.layout}>
        <div className={css.searchbox}>
        <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            className={css.input}
				/>

        </div>
				
        <div className={css.dataBlock}>
          <div className={css.dataColumns}>
            {columns.map((column, index) => (
              <div key={index}>{column}</div>
            ))}
          </div>
          <div></div>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact.id} className={css.columnItem}>
								<div>{contact.name}</div>
								<div>{contact.position}</div>
                <div>{contact.phone}</div>
                <div>{contact.mobile}</div>
								<div>{contact.location}</div>
							</div>
						))
					) : (
						<div className='text-center'>Нет совпадений</div>
					)}
				</div>
			</div>
		</main>
	);
};
