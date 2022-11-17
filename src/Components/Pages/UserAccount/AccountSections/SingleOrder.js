import React from "react";
import { Link } from "react-router-dom";
import StyledAccountSections from "./style";
import { BsPlayCircle } from "react-icons/bs";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as SingleMovie from "../../../../redux/features/movies/singleMovieSlice";
import { setSingleMovieVideoKey } from "../../../../redux/features/movies/singleMovieSlice";

const SingleOrder = (props) => {
  const dispatch = useDispatch();
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const {
    title,
    movieId,
    poster,
    trailerKey: key,
    date,
    time,
    seats,
    tickets: { total, adult, child, senior },
    payment,
  } = props;

  const screeningMonth = new window.Date(date).getMonth() + 1;
  const screeningDate = new window.Date(date).getDate();
  const screeningTime = time.slice(0, 2) + time.slice(-2);

  const orderId = screeningMonth
    .toString()
    .concat(screeningDate, screeningTime, seats[0]);

  const handleIconClick = () => {
    dispatch(setSingleMovieVideoKey({ key }));
    props.setIsModal(true);
    props.setIsMovieTrailer(true);
  };

  const checkGroups = () => {
    const allGroups = [adult, child, senior];
    const filteredGroup = allGroups
      // eslint-disable-next-line
      .map((tickets, index) => {
        if (tickets > 0 && index === 0) {
          return `Adult x${tickets}`;
        }
        if (tickets > 0 && index === 1) {
          return `Child x${tickets}`;
        }
        if (tickets > 0 && index === 2) {
          return `Senior x${tickets}`;
        }
      })
      .filter((group) => group)
      .join(", ");

    return filteredGroup;
  };

  const handleTitleClick = () => {
    sessionStorage.removeItem("single_movie");
    dispatch(SingleMovie.removeSingleMovieData());
    dispatch(SingleMovie.getSingleMovieInfo(movieId));
    dispatch(SingleMovie.getSingleMovieVideos(movieId));
    dispatch(SingleMovie.getSingleMovieReviews(movieId));
  };

  const setPath = () => {
    return `/nowPlaying/${title.split(" ").join("_")}`;
  };

  return (
    <StyledAccountSections.SingleOrder id={orderId}>
      <StyledAccountSections.ImgContainer>
        <img src={imgLowResUrl + poster} alt="" />
        <BsPlayCircle onClick={handleIconClick} />
      </StyledAccountSections.ImgContainer>
      <StyledAccountSections.OrderInfo status={payment}>
        <h2>
          <Link to={setPath()} onClick={handleTitleClick}>
            {title}
          </Link>
        </h2>

        <div className="info">
          <div className="info__details">
            <div className="info__details_labels">
              <p>Date:</p>
              <p>Time:</p>
              <p>Seats:</p>
              <p>Tickets:</p>
            </div>
            <div className="info__details_data">
              <p>{date}</p>
              <p>{time}</p>
              <p>{seats.join(", ")}</p>
              <p>
                {total} ({checkGroups()})
              </p>
            </div>
          </div>
          <div className="info__payment">
            <div className="info__payment_order">
              <p>Order ID:</p>
              <p>#{orderId}</p>
            </div>
            <div className="info__payment_status">
              <p>Status:</p>
              <p>
                {payment ? "Paid" : "Unpaid"} <GrStatusGoodSmall />
              </p>
            </div>
          </div>
        </div>
      </StyledAccountSections.OrderInfo>
    </StyledAccountSections.SingleOrder>
  );
};

export default SingleOrder;
