import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';
import dateFormat from '../../lib/dateFormat';

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBookings = async () => {
    try {
      console.log("Dummy Data:", dummyBookingData);
      setBookings(dummyBookingData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Bookings" />
      <div className='relative max-w-4xl mt-6 overflow-x-auto'>
        <BlurCircle top="-100px" left="0" />
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className='bg-primary/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>User Name</th>
              <th className='p-2 font-medium'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Seats</th>
              <th className='p-2 font-medium'>Amount</th>
            </tr>
          </thead>

          <tbody className='text-sm font-light'>
            {bookings.map((booking, index) => (
              <tr key={index} className='border-b border-primary/10 bg-primary/5 even:bg-primary/10'>
                <td className='p-2 pl-5'>{booking?.user?.name ?? 'N/A'}</td>  
                <td className='p-2'>{booking?.show?.movie?.title ?? 'N/A'}</td>     
                <td className='p-2'>{booking?.show?.showDateTime ? dateFormat(booking.show.showDateTime) : 'N/A'}</td>
                <td className='p-2'>{Array.isArray(booking?.seats) ? booking.seats.join(', ') : 'N/A'}</td>
                <td className='p-2'>{currency}{booking?.amount ?? 0}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  ) : <Loading />;
};

export default ListBookings;