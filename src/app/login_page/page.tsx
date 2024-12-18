import React from 'react'
import styles from './login.module.css'
import SignIn from '@/components/Sign-in'
export default function page() {
   return (
      <div className={styles.container}>
         <div className={styles.border}>
            <p className='text-center text-3xl font-bold mt-9 mb-5'>Login</p>
            <div>
               <SignIn />
            </div>
         </div>
      </div>
   )
}
