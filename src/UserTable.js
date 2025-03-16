import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Name</strong></TableCell>
                        <TableCell><strong>Action</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map(row => (
                            <TableRow key={row.id} 
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0px 10px', color: 'blue' }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name })}
                                    >
                                        Update
                                    </Button>

                                    <Button
                                        sx={{ margin: '0px 10px', color: 'red' }}
                                        onClick={() => deleteUser({id: row.id})}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;
