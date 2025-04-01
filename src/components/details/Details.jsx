import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function Details() {
  return (
    <div className="detail flex-1">
      <div className="user px-8 py-5 flex flex-col items-center gap-5 border-black border-b-2">
        <img src="./avatar.png" alt="" className="h-10 w-10 rounded-full mr-3"/>
        <h2>Sain Ji</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          incidunt est aliquid dolores perspiciati
        </p>
      </div>
      <div className="info p-5 flex-col gap-8">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Shared Photos</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="./bjp.jpg"
                  alt=""
                  className=" w-full h-[300px] rounded-md object-cover"
                />
                <span>photo_2024_2.png</span>
              </div>
              <FontAwesomeIcon icon={faDownload} />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}

export default Details;
