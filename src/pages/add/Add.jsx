import "./Add.scss";
const Add = () => {
  return (
    <div className="addGig">
      <div className="container">
        <h1>Add A New Gig</h1>
        <div className="wraper">
          <div className="left">
            <div className="input title">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                name="title"
                id=""
                placeholder="e.g. I will do..."
              />
            </div>
            <div className="input service-title">
              <label htmlFor="service-title">Service Title</label>
              <br />
              <input
                type="text"
                name="service-title"
                id=""
                placeholder="e.g. One page web design"
              />
            </div>
            <div className="input category">
              <label htmlFor="category">Category</label>
              <br />
              <select name="" id="">
                <option value="amination">Animation</option>
                <option value="programingand tech">Programing and Tech</option>
                <option value="graphicdesign">Graphic Design</option>
              </select>
            </div>
            <div className="input coverImage">
              <label htmlFor="coverImage">Cover Image</label>
              <br />
              <input type="file" name="" id="" accept=".jpg,png,.mp4" />
            </div>
            <div className="input uploadImage">
              <label htmlFor="uploadImage">Upload Image</label>
              <br />
              <input
                type="file"
                name=""
                id=""
                multiple
                accept=".jpg,png,.mp4"
              />
            </div>
            <div className="input description">
              <label htmlFor="description">Description</label> <br />
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="30"
                placeholder="Description is here..."
              ></textarea>
            </div>
          </div>
          <div className="right">
            <div className="input short-description">
              <label htmlFor="short-description">Short Description</label>{" "}
              <br />
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Short Description...
"
              ></textarea>
            </div>

            <div className="input delivery-time">
              <label htmlFor="delivery-time">Delivery Time (e.g. 3days)</label>
              <br />
              <input
                type="text"
                name="delivery-time"
                id=""
                placeholder="Delevery time"
              />
            </div>
            <div className="input rivision-number">
              <label htmlFor="rivision-number">Rivision Number(10)</label>
              <br />
              <input
                type="text"
                name="rivision-number"
                id=""
                placeholder="Nuber of rivision"
              />
            </div>
            <div className="input features">
              <label htmlFor="features">Features</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. Responsive design"
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. E-commerce"
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. Content upload"
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. Speed optimization"
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. Number of pages
"
              />{" "}
              <br />
            </div>
            <div className="input price">
              <label htmlFor="price">Price</label>
              <br />
              <input type="text" name="price" id="" placeholder="Price" />
            </div>
          </div>
        </div>
        <button type="submit">Create New Gig</button>
      </div>
    </div>
  );
};

export default Add;
