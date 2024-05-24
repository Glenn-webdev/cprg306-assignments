import react from "react";
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>Name: Glenn Luna</h1>
            
            
            <Link href="https://cprg306-assignments-lilac-three.vercel.app/" class="text-blue-600 visited:text-purple-600 ...">
                <h2 class="underline underline-offset-2 ...">Git Hub</h2></Link>
              
        </div>
        
    );
};

export default StudentInfo