import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(()=>{
    fetch("https://workshop-feedback-backend.onrender.com/api/feedbacks")
    .then(res=>res.json())
    .then(data=>setFeedbacks(data))
    .catch(err=>console.error("Error fetching feedbacks",err));
  },[]);

  const handleAddFeedback=(newFB)=>{
    fetch("https://workshop-feedback-backend.onrender.com/api/feedbacks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(newFB)})
    .then(res=>res.json())
    .then(()=>{return fetch("https://workshop-feedback-backend.onrender.com/api/feedbacks").then(res=>res.json()).then(data=>setFeedbacks(data));})
    .catch(err=>console.error("Error saving feedbacks",err));
  };
  return (
    <div className="p-5" style={{ backgroundColor: 'burlywood', color: 'saddlebrown' }}>
      <FeedbackForm onSubmit={handleAddFeedback} />
      {feedbacks.length > 0 &&
        (<>
            <hr style={{ borderColor: 'saddlebrown' }} />
            <FeedbackList feedbacks={feedbacks} />
        </>)
      }
    </div>
  );
}