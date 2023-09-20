import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Button,
  Avatar,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowUpward } from '@mui/icons-material';

export default function RedBackgroundWebsite2() {
  return (
    <div style={{ backgroundColor: '#933d44', color: '#f3e0ca' }}>
      <AppBar position="static" style={{ backgroundColor: '#933d44' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
            Social Network
          </Typography>
          <div sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <InputBase
              sx={{
                width: '200px',
                background: '#f3e0ca',
                borderRadius: '4px',
                padding: '4px',
              }}
              placeholder="Search"
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </div>
          <Button startIcon={<ArrowUpward />} variant="contained" color="primary">
            Upload
          </Button>
          <Avatar alt="User" src="/path/to/profile-pic.jpg" sx={{ marginLeft: 1 }} />
          <Typography variant="subtitle1" sx={{ marginRight: 1 }}>
            User Name
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '24px' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover">Home</Link>
          <Link underline="hover">Category</Link>
          <Typography color="text.primary">Subcategory</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ maxWidth: 345, margin: '16px' }}>
          <CardMedia component="img" height="140" image="/path/to/image.jpg" alt="Post Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Post Description
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, margin: '16px' }}>
          <CardMedia component="img" height="140" image="/path/to/image.jpg" alt="Post Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Post Description
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, margin: '16px' }}>
          <CardMedia component="img" height="140" image="/path/to/image.jpg" alt="Post Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Post Description
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
