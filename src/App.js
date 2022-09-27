import "./App.css";
import { useState } from "react";
import contactsJSON from './data/contacts.json';
import { Grid, Container } from "@mui/material";
import Header from "./components/Header";
// import contactsJSON from './data/contacts.json';
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (dContacts) => {
    const newContacts = [...contacts, dContacts];
    setContacts(newContacts);
  }

  return (
    <>
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <ContactForm addContact={addContact} />
          </Grid>
          <Grid item xs={8}>
            {contacts.map((contact, item) =>
              <Contact key={item} data={contact} /> 
            )}
          </Grid>
        </Grid>
        </Container>
    </div>
    </>
  );
};

export default App;
