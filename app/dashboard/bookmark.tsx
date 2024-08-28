import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
export default function BookMark({
    isBookmarked,
    id,
    token,
}: {
    isBookmarked: boolean;
    id: string;
    
    token: string;
}) {
  const [isBooked, setBooked] = useState(isBookmarked);

  const toggleBookmark = async () => {
    const url = `https://akil-backend.onrender.com/bookmarks/${id}`;
    try {
      const response = await fetch(url, {
        method: isBooked ? "DELETE" : "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            setBooked(!isBooked);
        }
    } catch (error) {
        console.error("Error toggling bookmark:", error);
    }
  }
  

  return (
    <div style={{ position: 'absolute', top: 0, right: 0 , padding: 12}}>
      <button onClick={toggleBookmark} className=''>
        {isBooked ? <FaBookmark className='w-5 h-10 border-0 text-yellow-500' /> : <FaRegBookmark className='w-10 h-10 col text-yellow-500' />}
      </button>
    </div>
  );
}
