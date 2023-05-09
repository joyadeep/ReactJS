import { useState } from 'react';
import { useMemo } from 'react'
import Table from '../components/Table'
const CoinTable = () => {
  return (
    <div className='w-full h-screen bg-violet-400 flex items-center justify-center'>
        <div className='w-3/4'>
            <Table/>
        </div>

    </div>
  )
}

export default CoinTable