
import './App.css';
import { useState, useEffect } from 'react';
import List from './components/CONTACTS/LİST';
import Form from './components/FORM/index'
function App() {// kayıtların ekleneceği state
  const [contacts, setContacts] = useState([// liste alanının boş kalmaması için yapılan örnekler
    { 
      fullname: "Ece Beyza Nur Özen",
      phone_number: "999999"
    },
    {
      fullname: "Merve Hediye",
      phone_number: "2385738"
    },
    {
      fullname: "Esma Gencer",
      phone_number:"000000000"
    }
  ])

  useEffect(() => {
    // contactsa yeni ekleme yapıldığında yakalamak için 
    
  }, [contacts])
  return (

    <div className="container">
      <h1 className="baslik">Contacts</h1>
      <List contacts={contacts} />  {/* 1-list compenentine bilgiler doma yazılması için gönderildi gönderildi 
      */}
      <Form addContacts={setContacts} contacts={contacts} />
      {/* contacts var olana önceki verilerinde dahil edilmesi için yapıldı formdaki addContacts ve forma eklendi*/}
    </div>
  );
}

export default App;
