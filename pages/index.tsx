import { useRouter } from 'next/router'
import { navigationRoutes } from '../routes/NavigationRoutes';
import { useEffect } from 'react';




export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push(navigationRoutes.DASHBOARD);
  }, [])

  return null
}