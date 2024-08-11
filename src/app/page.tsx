import { Metadata } from 'next'
import Navbar from '../../components/Navbar';
 
export const metadata: Metadata = {
  title: 'Portfolio | Osh',
}

export default function Home() {
  return (
    <>
      <Navbar />

    </>
  );
}
