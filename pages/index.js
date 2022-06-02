import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Amazona</title>
        <meta
          name="description"
          content="The ecommerce website by next and sanity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Sanity Amazona
      </Typography>
    </div>
  );
}
