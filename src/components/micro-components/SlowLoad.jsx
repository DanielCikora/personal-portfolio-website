import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
export default function SlowLoad({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <div className='slow-load'>
      <CircleLoader size={140} color='white' />
    </div>
  ) : (
    children
  );
}
