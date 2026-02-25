import { useEffect, useState } from "react";
import API from "../api";

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Typography
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const fetchUsers = async () => {
    const res = await API.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingId(user._id);
    setEditedName(user.name);
  };

  const handleSave = async (id) => {
    await API.put(`/users/${id}`, { name: editedName });
    setEditingId(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await API.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Users Management
      </Typography>

      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Username</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>

                {/* Username Column */}
                <TableCell>
                  {editingId === user._id ? (
                    <TextField
                      size="small"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </TableCell>

                {/* Email Column */}
                <TableCell>{user.email}</TableCell>

                {/* Actions */}
                <TableCell align="right">

                  {editingId === user._id ? (
                    <IconButton
                      color="success"
                      onClick={() => handleSave(user._id)}
                    >
                      <SaveIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(user)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(user._id)}
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Container>
  );
}