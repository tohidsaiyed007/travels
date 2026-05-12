import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Cards.css";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "flights"));
      const list = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(list);
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {data.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.city} />

          <div className="card-overlay">
            <span className="badge">Round trip - Economy</span>

            <div className="card-bottom">
              <h3>{item.city}</h3>
              <p>From ₹{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;