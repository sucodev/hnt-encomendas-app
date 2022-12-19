import Layout from '../components/Layout'

import { LoginContainer } from '../components/Containers';

export default function Login() {  

  return (
      <Layout 
        title='Rastreio de Encomendas' 
        description='Rastreio de encomendas de natal'
        className='bg-[#f5f5f5] min-h-screen flex justify-center  '
      >
        <LoginContainer />
      </Layout>
  )
}
