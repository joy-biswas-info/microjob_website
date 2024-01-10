import { useParams } from "react-router-dom";
import "./Message.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import NotificationSound from "/notification-sound.mp3";
import { useRef } from "react";

const Message = () => {
  const { id } = useParams();

  const playAudio = () => {
    const audio = new Audio(NotificationSound);
    console.log("play Audio");
    audio.play();
  };

  const queryClient = useQueryClient();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get("/messages").then((res) => {
        return res.data;
      }),
  });

  if (
    data?.map(
      (m) => user.isSeller && m.readBySeller && !user.isSeller && !m.readByBuyer
    )
  ) {
    playAudio();
  }

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post("/messages", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const conversationId = id;
    const message = e.target[0].value;
    mutation.mutate({ conversationId: conversationId, message: message });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="messages">
            <div className="beardcumber">
              <h3>Johan Doi</h3>
              <span>1 hour ago</span>
            </div>
            <hr />
            <div className="items">
              {data?.map((m) => (
                <div
                  className={m.userId === user._id ? "item owner" : "item"}
                  key={m._id}
                >
                  <img
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg"
                    alt=""
                  />
                  <p>{m?.message}</p>
                </div>
              ))}
            </div>
            <hr />
            <div className="write">
              <form onSubmit={handleSendMessage}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="Write Your messages..."
                  required
                ></textarea>
                <div className="bottom">
                  <input type="file" name="" id="" accept="png,jpg,pdf,mp4" />
                  <button>Send</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;

{
  /* <div className="users">
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
        </div> */
}
