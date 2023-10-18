
import ShareVideo from '-!file-loader!public/assets/share.mp4';
import Image from 'next/image';
import GoogleLoginBtn from './GoogleLoginBtn';
import { useSession } from 'next-auth/react';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className="relative w-full h-full">
            <video 
            src={require('public/assets/share.mp4')}
            type="video/mp4"
            muted
            loop
            autoPlay
            controls={false}
            className='w-full h-full object-cover'
            />
        </div>

    <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
    <div className="p-5">
      <Image src='/assets/logowhite.png' width={130} height={130} alt="logo " />
    </div>
    <div className="shadow-2xl">
      <GoogleLoginBtn />
    </div>
    </div>
    </div>
  )
}

export default Login;