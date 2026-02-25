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
  Typography,
  CircularProgress
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await API.get("/api/users");
      setUsers(res.data);
    } catch (error) {
      console.log("Error fetching users:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingId(user._id);
    setEditedName(user.name);   // ✅ correct field
  };

  const handleSave = async (id) => {
    try {
      await API.put(`/api/users/${id}`, {
        name: editedName,   // ✅ correct field
      });

      setEditingId(null);
      fetchUsers();
    } catch (error) {
      console.log("Error updating user:", error.response?.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log("Error deleting user:", error.response?.data);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Users Management
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} elevation={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell align="right"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    {editingId === user._id ? (
                      <TextField
                        size="small"
                        value={editedName}
                        onChange={(e) =>
                          setEditedName(e.target.value)
                        }
                      />
                    ) : (
                      user.name   // ✅ correct field
                    )}
                  </TableCell>

                  <TableCell>{user.email}</TableCell>

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
      )}
    </Container>
  );
}