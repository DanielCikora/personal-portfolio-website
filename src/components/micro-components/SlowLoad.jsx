import { useEffect, useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
export default function ({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div className='slow-load'>
      <CircleLoader size={100} />
    </div>
  ) : (
    children
  );
}
