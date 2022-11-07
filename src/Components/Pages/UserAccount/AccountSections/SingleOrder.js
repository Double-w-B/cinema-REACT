import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BsPlayCircle } from "react-icons/bs";
import { setSingleMovieVideoKey } from "../../../../features/movies/singleMovieSlice";
import { GrStatusGoodSmall } from "react-icons/gr";

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

  const orderId = movieId.toString().concat(seats[0]);

  const handleClick = () => {
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

  return (
    <StyledContainer id={orderId}>
      <StyledImgContainer>
        <img src={imgLowResUrl + poster} alt="" />
        <BsPlayCircle onClick={handleClick} />
      </StyledImgContainer>
      <StyledInfoContainer status={payment}>
        <h2>{title}</h2>
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
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.005);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
`;

const StyledImgContainer = styled.div`
  width: 100px;
  height: 100%;
  position: relative;

  &:hover {
    & img {
      filter: brightness(70%) drop-shadow(0px 5px 15px black);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: 0.3s linear;
    filter: brightness(100%) drop-shadow(0px 5px 10px black);

    &:hover {
      filter: brightness(70%) drop-shadow(0px 5px 15px black);
    }
  }

  svg {
    font-size: 3rem;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 0.75;
    transition: 0.3s linear;

    &:hover {
      font-size: 4rem;
      opacity: 1;
      color: var(--primary-white-clr);
    }

    &:active {
      transition: font-size 0.5s linear;
      font-size: 3rem;
    }
  }
`;

const StyledInfoContainer = styled.div`
  width: calc(100% - 100px);
  height: 100%;

  h2 {
    margin-left: 1.3rem;
  }
  .info {
    width: 100%;
    height: calc(100% - 32px);
    padding-left: 1rem;
    display: flex;

    .info__details {
      width: 65%;
      height: 100%;
      display: flex;

      .info__details_labels {
        width: 100px;
        height: 100%;
        padding-left: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          color: var(--primary-grey-clr);
        }
      }
      .info__details_data {
        width: 230px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

    .info__payment {
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      .info__payment_order,
      .info__payment_status {
        width: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        p {
          display: flex;
          align-items: center;

          &:first-child {
            color: var(--primary-grey-clr);
          }
          svg {
            width: 1rem;
            margin-left: 0.5rem;
            color: ${(props) =>
              props.status ? "green" : "var(--primary-red-clr)"};
            filter: drop-shadow(0px 0px 2px black);
          }
        }
      }
    }

    .info__details .info__details_labels p,
    .info__payment_order p:first-child,
    .info__payment_status p:first-child {
      -webkit-touch-callout: none;
      /* iOS Safari */
      -webkit-user-select: none;
      /* Safari */
      -khtml-user-select: none;
      /* Konqueror HTML */
      -moz-user-select: none;
      /* Old versions of Firefox */
      -ms-user-select: none;
      /* Internet Explorer/Edge */
      user-select: none;
    }
  }
`;
export default SingleOrder;
