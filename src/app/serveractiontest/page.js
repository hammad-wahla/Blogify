import { actionFunction } from '@/lib/action'
import React from 'react'


const ServerTest = () => {
    return (
        <div>
            <form action={actionFunction} >
                <input className='bg-gray-800' type="text" placeholder='title' name='title' />
                <input className='bg-gray-800' type="text" placeholder='desc' name='desc' />
                <input className='bg-gray-800' type="text" placeholder='slug' name='slug' />
                <input className='bg-gray-800' type="text" placeholder='userId' name='userId' />

                <button> create </button>
            </form>

        </div>
    )
}

export default ServerTest
