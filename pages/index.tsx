import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layouts';


const HomePage: NextPage = () => {

  return (
    <Layout title='Home | Open Jira'>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            <CardContent>
              {/* Agregar nueva entrada */}
              {/* Listado de entradas */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            <CardContent>
              {/* Agregar nueva entrada */}
              {/* Listado de entradas */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent>
              {/* Agregar nueva entrada */}
              {/* Listado de entradas */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage