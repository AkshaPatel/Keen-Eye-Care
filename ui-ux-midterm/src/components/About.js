import './css/About.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Ling from './images/JeanieLingMd.jpeg';

export default function About() {
    return (
        <>
        <div className='doctors'>
            <h1> Meet Our Specialists </h1>
                  
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid sx={{px:1.5}} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image="https://jerdeeye.com/wp-content/uploads/2018/05/EricJerde_headshot_web-resized.jpg"
                            alt="Eye Doctor"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Eric White OD
                            </Typography>
                            <Typography>
                                University of Miami
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Grid sx={{px:1.5}} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image="https://jerdeeye.com/wp-content/uploads/2018/05/Dr-Thill-Headshot-819x1020.jpg"
                            alt="Eye Doctor"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Ashley Jones OD
                            </Typography>
                            <Typography>
                                John Hopkins University
                            </Typography>
                        </CardContent>
                        <CardActions>

                        </CardActions>
                        </Card>
                    </Grid>

                    <Grid sx={{px:1.5}} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image={Ling}
                            alt="Eye Doctor"
                            />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            Jeanie Ling OD
                            </Typography>
                            <Typography>
                                St. Louis University
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    );
}