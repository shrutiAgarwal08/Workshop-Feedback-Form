export default function FeedbackList({ feedbacks }) {
  return (
    <>
      <legend className="fs-3 mb-4 text-center">Testimonials</legend>
      <div className="row gx-5 justify-content-center">
        {feedbacks.map((fb, index) => {
          let stars = [];
          for (let i = 1; i <= fb.rating; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
          }
          return (
            <div className="col-6 col-md-3 d-flex" key={index}>
              <div className="card w-100 h-100 " style={{ minHeight: "180px" }}>
                <div className="card-body d-flex flex-column justify-content-between text-center" style={{ color: "saddlebrown" }}>
                  <p>{stars}</p>
                  <p className="card-text lh-sm">"{fb.message}"</p>
                  <h5 className="card-title fs-6 text-uppercase" style={{ color: "saddlebrown", fontFamily: "cursive" }}>-{fb.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}