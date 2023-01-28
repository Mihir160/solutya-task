
import { Inter } from '@next/font/google'
import Header from '@/components/Header/Header'
import MedicalCare from '@/components/MedicalCare/MedicalCare'
import People from '@/components/People/People'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
     <Header></Header>
     <MedicalCare></MedicalCare>
     <People></People>
  </div>
  )
}
