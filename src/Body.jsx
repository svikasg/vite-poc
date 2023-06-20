import Container from '@mui/material/Container';
import Chart from './chart.jsx';

export const Body = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Chart/>
        </Container>
    );
}
