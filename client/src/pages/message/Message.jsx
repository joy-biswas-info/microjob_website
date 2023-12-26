import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  const user = {
    username: "User_Name",
    userId: 1,
    isSeller: true,
  };

  return (
    <div className="message">
      <div className="container">
        <div className="users">
          <h2>All Messages</h2>
          <ul>
            <li className="item active">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <div className="name">
                <h4>John Doi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="messages">
          <div className="beardcumber">
            <h3>Johan Doi</h3>
            <span>1 hour ago</span>
          </div>
          <hr />
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
            <div className="item owner">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                alt=""
              />
              <p className="owner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                modi accusantium quisquam ratione in sed natus accusamus
                suscipit quas voluptates!
              </p>
            </div>
          </div>
          <hr />
          <div className="write">
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Write Your messages..."
            ></textarea>
            <div className="bottom">
              <input type="file" name="" id="" accept="png,jpg,pdf,mp4" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
