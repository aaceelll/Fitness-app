import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Avatar, 
  Grid, 
  Radio, 
  RadioGroup, 
  FormControl, 
  FormControlLabel, 
  FormLabel,
  IconButton
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function Profile() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('Female');
  const [profilePicture, setProfilePicture] = useState('/placeholder.svg');
  const [isEditing, setIsEditing] = useState(false);

  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (storedProfile) {
      setName(storedProfile.name || '');
      setPhone(storedProfile.phone || '');
      setEmail(storedProfile.email || '');
      setWeight(storedProfile.weight || '');
      setHeight(storedProfile.height || '');
      setGender(storedProfile.gender || 'Female');
      setProfilePicture(storedProfile.profilePicture || '/placeholder.svg');
    }
  }, []);

  const handleSave = () => {
    if (validatePhone(phone) && validateEmail(email)) {
      const profileData = {
        name,
        phone,
        email,
        weight,
        height,
        gender,
        profilePicture,
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
      setIsEditing(false);
      console.log('Profile saved:', profileData);
    } else {
      console.log('Validation failed');
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validatePhone = (value) => {
    const phoneRegex = /^08\d{8,}$/; // harus diawali 08 dan minimal 10 angka
    if (!phoneRegex.test(value)) {
      setPhoneError('Nomor HP harus dimulai dengan 08 dan minimal 10 angka');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // format harus ...@gmail.com
    if (!emailRegex.test(value)) {
      setEmailError('Email harus berformat ...@gmail.com');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', mt: 8, px: 3, mb: 4 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 3, p: 5 }}>
        <CardContent>
          {/* Avatar and Profile Title Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', mr: 3 }}>
              <Avatar
                alt="Profile Picture"
                src={profilePicture}
                sx={{ width: 120, height: 120 }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'white', p: 0.5 }}
              >
                <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                <PhotoCamera />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ color: '#FF5722', fontWeight: 'bold' }}>
                Hello, {name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {phone}
              </Typography>
            </Box>
          </Box>

          {/* Form Fields in Two Columns */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Full Name
              </Typography>
              <TextField
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                variant="outlined"
                InputProps={{
                  readOnly: !isEditing,
                  style: { color: !isEditing ? 'grey' : 'black' }
                }}
                onClick={() => setIsEditing(true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validatePhone(e.target.value);
                }}
                placeholder="Enter your phone number"
                variant="outlined"
                type="tel"
                error={!!phoneError}
                helperText={phoneError}
                InputProps={{
                  readOnly: !isEditing,
                  style: { color: !isEditing ? 'grey' : 'black' }
                }}
                onClick={() => setIsEditing(true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                placeholder="Enter your email"
                variant="outlined"
                type="email"
                error={!!emailError}
                helperText={emailError}
                InputProps={{
                  readOnly: !isEditing,
                  style: { color: !isEditing ? 'grey' : 'black' }
                }}
                onClick={() => setIsEditing(true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Weight (kg)
              </Typography>
              <TextField
                fullWidth
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
                variant="outlined"
                type="number"
                inputProps={{ min: 0, step: 0.1 }}
                InputProps={{
                  readOnly: !isEditing,
                  style: { color: !isEditing ? 'grey' : 'black' }
                }}
                onClick={() => setIsEditing(true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Height (cm)
              </Typography>
              <TextField
                fullWidth
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
                variant="outlined"
                type="number"
                inputProps={{ min: 0, step: 1 }}
                InputProps={{
                  readOnly: !isEditing,
                  style: { color: !isEditing ? 'grey' : 'black' }
                }}
                onClick={() => setIsEditing(true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold' }}>Gender</FormLabel>
                <RadioGroup
                  row
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  onClick={() => setIsEditing(true)}
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" disabled={!isEditing} />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" disabled={!isEditing} />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          {/* Save Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ width: 200, backgroundColor: '#FF5722', color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#E64A19' } }}
            >
              Save Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
