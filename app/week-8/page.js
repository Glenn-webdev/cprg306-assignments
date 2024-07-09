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


 //{redirect("./week-7")}

/*{user ? (
            <main className = 'flex min-h-screen flex-col items-center justify-between'>
                <p>Welcome</p>
                <p>{user && getDisplayName}</p>
                <button className="rounded-lg  bg-lime-700 p-5" onclick={signOut}>Sign Out</button>

            </main>

        ) : (
            <main className = 'flex min-h-screen flex-col items-center justify-between'>
                <p>
                    you dont have access!
                    <button className="rounded-lg  bg-lime-700 p-5" onClick={signIn}>sign In</button>
                </p>


            </main>

        )}
          */



 /**<div className =" justify-center align-middle bg-slate-100 border-gray-700 rounded-lg ps-10">
            <h1 className="text-center font-bold">Week 8</h1>
            <div className="text-center">{user ? "hi there!": "Please sign in"}</div>
            <div className ="text-center font-bold">{user && user.displayName}</div>
            <div> 
                {user ? (
                    <div className = "flex justify-center align-middle">
                    <button className="rounded-lg  bg-lime-700 p-5 " onClick = {firebaseSignOut}>Sign Out</button> 
                    </div>
                ) : (
                    <div className = "flex justify-center align-middle">
                    <button className="rounded-lg  bg-lime-700 p-5" onClick = {gitHubSignIn}>Sign In</button>
                    </div>
                )}
              
            </div>
        </div> **/


/** "use client";
import React from 'react';
import { useContext } from 'react';

//global varialble provider shared between componemts
//create a context 
//put the component that share this global


const MyContext = React.createContext();
const authenticationContext = React.createContext()

export default function Page() {

    const {count,increment} = useCounter()

    return (
        <main>
            <MyContext.Provider value="leo decarpio">
                
            <Movie>
                <h1>
                    test
                </h1>
                <img  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Online Image"/>

            </Movie>
            
            </MyContext.Provider>
        </main>
    )

    function Movie({children}) {

        const name = useContext(MyContext);
        return (
            <main>
                <h1>
                    catch me if you can children
                </h1>
                <h2>{name}</h2>
                {children}
             
            </main>
        )
    }

    function Actor () {
        const name = useContext(MyContext);
        return (
            <div>
                <h1>
                    Actor is an actor
                </h1>
                <h2>
                    {name}
                </h2>
            </div>
        )
    }
//most diffecult part
   function AuthenticationContext() {

    //some logic
    //some function
    //login function
    //logoout function
    //user information
    return <AuthenticationContext.Provider value = {}>{children}</AuthenticationContext.Provider>
   }
    
};

*/
