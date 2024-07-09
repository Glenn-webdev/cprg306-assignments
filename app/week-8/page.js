"use client";

import { getDisplayName } from "next/dist/shared/lib/utils";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
//import { redirect } from "next/navigation";


 

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    async function signIn() {
        try {
            await gitHubSignIn();
        }
        catch {
            console.log("error")
        }
    }
    async function signOut() {
        try {
            await firebaseSignOut();
        }
        catch {
            console.log("error logout!")
        }
    }
   
   
    return (
       <main>

        
        {user ? (
            <main className = 'flex min-h-screen flex-col items-center justify-between'>
                <p>Welcome</p>
                <p>{user && getDisplayName}</p>
                <Link href="http://localhost:3000/week-7">shopping list</Link>
         

                             
                <button className="rounded-lg  bg-lime-700 p-5 " onClick={signOut}>Sign Out</button>
                
        
                </main>
                ) : (
                    <main className = 'flex min-h-screen flex-col items-center justify-between'>

                        <h1>You dont have access to the page</h1>
                    
                    <button className="rounded-lg  bg-lime-700 p-5" onClick = {signIn}>Sign In</button>

                   
                    </main>
                  
                )}
       

                </main>
                
    )
 
    
};

