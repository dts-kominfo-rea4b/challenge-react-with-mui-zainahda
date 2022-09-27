// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
    return (
        <>
        <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem alignItems="flex-start" key={data.email}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={data.photo} />
            </ListItemAvatar>
            <ListItemText
                primary={data.name}
                secondary={
                <React.Fragment>
                    {data.phone}
                    <br />
                    {data.email}
                </React.Fragment>
                }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
        </>
    );
};

export default Contact;
