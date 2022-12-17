import { FormEvent, useState } from 'react'
import Layout from '../components/Layout'

import { useDispatch } from 'react-redux'
import { userStarted } from '../store/slices/userSlice';

export default function Home() {  
  const dispatch = useDispatch();

  const [customerCPF, setCustomerCPF] = useState<string>('');

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userStarted({customerCPF}));
  }

  return (
    <>
      <Layout
        title='Rastreio de Encomendas'
        description='Rastreio de encomendas de natal'
      >
        <form 
          className='flex gap-2'
          onSubmit={handlerSubmit}  
        >
          <input 
            type="text" 
            placeholder='Insira seu CPF' 
            className='border-2 p-4' 
            value={customerCPF}
            onChange={(e) => setCustomerCPF(e.target.value)}
          />
          <button type="submit" className='bg-red-50 p-4'>Rastrear pedido</button>
        </form>
      </Layout>
    </>
  )
}
