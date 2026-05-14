
import "./StudyRoom.css";


export default function StudyRoom() {

  //importing videos 
  const videos = [

    "https://www.youtube.com/embed/jfKfPfyJRdk",//YouTube embed link
    "https://www.youtube.com/embed/yVk8SSqAqF4",
    "https://www.youtube.com/embed/ySmjheVxYc4",
    "https://www.youtube.com/embed/lTRiuFIWV54",
    "https://www.youtube.com/embed/DWcJFNfaw9c",
    "https://www.youtube.com/embed/R1r9nLYcqBU",
    "https://www.youtube.com/embed/_9gax5ilQZ8",
    "https://www.youtube.com/embed/LjRygr4xR7g"
  ];

  return (
    <div className="study-room">

      <div className="videos-container">

        {videos.map((video, index) => (
          <div className="video-card" key={index}>

            <iframe
              src={video}
              title={`video-${index}`}
              allowFullScreen
            ></iframe>

          </div>
        ))}

      </div>

    </div>
  );
}