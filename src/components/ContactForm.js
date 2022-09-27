// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Stack,
} from "@mui/material";

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onChangeContact = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: ""
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Card variant="outlined" sx={{ width: "80%" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <CardContent>
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                value={newContact.name}
                onChange={onChangeContact}
              />
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Phone"
                variant="standard"
                name="phone"
                value={newContact.phone}
                onChange={onChangeContact}
              />
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                value={newContact.email}
                onChange={onChangeContact}
              />
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Photo URL"
                variant="standard"
                name="photo"
                value={newContact.photo}
                onChange={onChangeContact}
              />
            </CardContent>
          </Stack>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              Add New Contact
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default ContactForm;
