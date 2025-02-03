import { useState } from 'react';
import { userData } from '../../../data/data'

export const Phonebook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(userData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm) ||
    contact.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Телефонный справочник</h1>
        
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-4 mb-4 border rounded-md"
        />

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Job position</th>
              <th className="border p-2">Extension</th>
              <th className="border p-2">Office</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map(contact => (
                <tr key={contact.id}>
                  <td className="border p-2">{contact.name}</td>
                  <td className="border p-2">{contact.position}</td>
                  <td className="border p-2">{contact.phone}</td>
                  <td className="border p-2">{contact.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">Нет совпадений</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

