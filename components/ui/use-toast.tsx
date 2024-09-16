// components/Toaster.tsx
import { Toaster } from 'react-hot-toast';

const CustomToaster: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Define default options
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      
        success: {
          duration: 3000,
         style:{
          background: 'green',
          color: 'white',
         }
        },
        error: {
          duration: 3000,
         style:{
          background: 'red',
          color: 'white',
         }
        },
      }}
    />
  );
};

export default CustomToaster;
