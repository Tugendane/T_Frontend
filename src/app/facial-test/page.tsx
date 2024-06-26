// 'use client'

// import React, { useEffect, useState } from 'react';
// import FaceIO from '@faceio/fiojs';


// export default function Login() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     let faceio : any;

//     useEffect(() => {
//         faceio = new FaceIO("fioad820")
//         console.log(".....", faceio);
//     }, []);

//     const handleSignIn = async () => {
//         try {
//             // console.log(faceio);

//             let response = await faceio.enroll({
//                 locale: "auto",
//                 payload: {
//                     email: "example@gmail.com",
//                     pin: "12345",
//                 },
//             });

//      console.log(` Unique Facial ID: ${response.facialId}
//       Enrollment Date: ${response.timestamp}
//       Gender: ${response.details.gender}
//       Age Approximation: ${response.details.age}`);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleLogIn = async () => {        
//         try {
//             let response = await faceio.authenticate({
//                 locale: "auto",
//             });

//             console.log(` Unique Facial ID: ${response.facialId}
//           PayLoad: ${response.payload}
//           `);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto">
//             <h1 className="text-2xl font-semibold">Facial Recognition Login</h1>
//             {isAuthenticated ? (
//                 <div className="text-green-500">Authentication Successful</div>
//             ) : (
//                 <div>
//                     <button onClick={handleSignIn}>Authenticate</button>
//                     <button onClick={handleLogIn}>Verify</button>
//                 </div>
//             )}
//         </div>
//     );
// }

'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FaceIO from '@faceio/fiojs';

export default function Login() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter(); // Initialize the router
    let faceio: any;

    useEffect(() => {
        faceio = new FaceIO("fioad820")
        console.log(".....", faceio);
    }, []);

    const handleSignIn = async () => {
        try {
            let response = await faceio.enroll({
                locale: "auto",
                payload: {
                    email: "example@gmail.com",
                    pin: "12345",
                },
            });

            console.log(`Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);

            // Set authentication status and redirect
            setIsAuthenticated(true);
            router.push('/Pages/Dashboard/view'); // Redirect to success page
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogIn = async () => {        
        try {
            let response = await faceio.authenticate({
                locale: "auto",
            });

            console.log(`Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}`);

            // Set authentication status and redirect
            setIsAuthenticated(true);
            router.push('/Pages/Dashboard/view'); // Redirect to dashboard or desired page
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold">Facial Recognition Auth</h1>
            {isAuthenticated ? (
                <div className="text-green-500">Authentication Successful</div>
            ) : (
                <div>
                    <button onClick={handleSignIn}>Authenticate</button>
                    <button onClick={handleLogIn}>Verify</button>
                </div>
            )}
        </div>
    );
}
