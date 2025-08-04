import { useState } from "react"

export default function FeedbackForm({onSubmit}){
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[rating,setRating] = useState(0);
    const[message,setMessage] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const feedback={
            name:firstName+" "+lastName,
            email:email,
            rating:rating,
            message:message,
        };
        onSubmit(feedback);
        setFirstName('');
        setLastName('');
        setEmail('');
        setRating(0);
        setMessage('');
    };
    
    return(
        <form className="row" onSubmit={handleSubmit}>
            <legend className="fs-3">Workshop Feedback Form</legend>
            <p className="fs-6">Thanks for attending our workshop! We would love to get your feedback to give you an even better experience next time.</p>
            <hr />
            <div className="col-sm-6 mb-2">
                <label className="form-label" htmlFor="v1">First Name</label>
                <input className="form-control" id="v1" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required></input>
            </div>
            <div className="col-sm-6 mb-2">
                <label className="form-label" htmlFor="v2">Last Name</label>
                <input className="form-control" id="v2" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required></input>
            </div>
            <div className="col-sm-6 mb-2">
                <label className="form-label" htmlFor="v3">E-mail (optional)</label>
                <input className="form-control" id="v3" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="col-sm-12 mb-2">
                <p className="mb-1">Rate your experience</p>
                <div>
                    {[1,2,3,4,5].map((star)=>{
                        let iconClass ="bi ";
                        if(star<= rating){
                            iconClass+="bi-star-fill";
                        }else{
                            iconClass+="bi-star"; 
                        }
                        return(
                            <i key={star} className={iconClass} style={{fontSize:"1.5rem",marginRight:"8px",cursor:"pointer"}} onClick={()=>setRating(star)}></i>
                        );
                    })}
                </div>
            </div>
            <div className="col-sm-12 mb-2">
                <label className="form-label" htmlFor="v4">Comments / Suggestions</label>
                <textarea className="form-control" id="v4" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
            </div>
           <div className="col-12 mt-2">
            <button type="submit" className="btn" style={{borderColor:"saddlebrown",color:"saddlebrown"}}>Submit</button>
           </div>
        </form>
    )
}