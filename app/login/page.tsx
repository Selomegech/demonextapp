import React from 'react'
import Loginform from '../UI/LoginForm'
import { auth } from '/auth';

export default async function Page() {
 const session = await auth();
  return (
    <div>
      <Loginform session={session}/>
    </div>
  )
}
