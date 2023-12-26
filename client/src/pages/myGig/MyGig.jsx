import { Link } from "react-router-dom";
import "./MyGig.scss";

const MyGig = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link className="link" to="/add">
            Add New Gig
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>Active</td>
            <td>1000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>Active</td>
            <td>1000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>Active</td>
            <td>1000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>Active</td>
            <td>1000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>Active</td>
            <td>1000</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGig;
