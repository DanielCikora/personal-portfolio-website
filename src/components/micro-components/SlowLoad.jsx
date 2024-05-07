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
    }, 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <div className='slow-load'>
      <CircleLoader size={100} />
    </div>
  ) : (
    children
  );
}
