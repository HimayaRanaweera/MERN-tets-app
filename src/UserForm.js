import { Button, Grid2 , Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                marginBottom: '30px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
            }}
        >
            <Grid2 item xs={12}>
                <Typography component="h1" sx={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
                    User Form
                </Typography>
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="label" htmlFor="id" sx={{ color: 'black', marginRight: '20px', fontSize: '16px', width: '100px' }}>
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(Number(e.target.value))}
                />
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="label" htmlFor="name" 
                    sx={{ color: 'black', marginRight: '20px', fontSize: '16px', width: '100px' }}>
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid2>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: 'blue',
                    }
                }}
                onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
            >
                {isEdit ? 'Update' : 'Add'}
            </Button>
        </Grid2>
    );
}

export default UserForm;
