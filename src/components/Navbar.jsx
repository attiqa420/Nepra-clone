import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='p-6 bg-blue-950 fixed w-full' >
      <div className='flex items-center justify-between' >
      
        <img 
          src="https://nepra.spsnet.com/assets/images/logo-white.png" 
          alt="Software Productivity Strategists, Inc. logo" 
          className='w-2xs'
        />

        
        <div className='flex justify-center space-x-4 text-white'> 
          <NavLink to="/">Home</NavLink>

          
          

           <div className='relative group'>
            <button className='text-white' >Products</button>
            <div className='absolute hidden group-hover:block w-40 bg-white text-black'>
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/products/kaspersky" > Kaspersky</NavLink> 
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/products/tenable"  >Tenable</NavLink>  
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/products/microsoft" >Microsoft</NavLink> 
               <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/products/fortinet" >Fortinet</NavLink> 
            </div>
          </div>
          
           <div className='relative group'>
            <button className='text-white' >Services</button >
            <div className='absolute hidden w-40 bg-white text-black group-hover:block'>
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/services/datamanagement">Data Management</NavLink>  
              <NavLink className='b block border border-gray-500 py-2 px-2 over:text-blue-700'  to="/services/regulatoryreporting">Regulatory Reporting</NavLink> 
            </div>
          </div>

           <div className='relative group'>
            <button className='text-white'>Pricing</button>
            <div className='absolute hidden w-40 bg-white text-black group-hover:block'>
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/pricing/basic">Basic Plan</NavLink>  
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/pricing/standard">Standard Plan</NavLink>  
               <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/pricing/premium">Premium Plan</NavLink>  
            </div>
          </div>

           <div className='relative group'>
            <button className='text-white' >About Us</button>
            <div className='absolute hidden w-40 bg-white text-black group-hover:block'>
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/about/contact">Contact Us</NavLink>  
              <NavLink  className=' block border border-gray-500 py-2 px-2 hover:text-blue-700' to="/about/jobs">Jobs</NavLink>
            </div>
          </div>
        </div>
         <button className='object-top-right border border-white p-1.5 text-white hover:bg-blue-900'>Login to CSM</button>
      </div>
    </nav>
  );
}

export default NavBar;
