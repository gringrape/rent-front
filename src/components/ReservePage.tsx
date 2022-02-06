import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Calendar from 'react-calendar';

import { useState } from 'react';
import { HOME_ICON_INACTIVE, LEFT_ARROW_ICON } from '../../assets';

import { useProduct } from '../hooks';

const Navigation = styled.nav`
  padding: 19px 16px;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
  }
`;

const Wrapper = styled.div`
  .react-calendar__month-view__weekdays__weekday {
    margin-bottom: 8px;
    text-align: center;

    abbr {
      text-decoration: none;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .react-calendar__month-view__days__day {
    padding: 10px 0;
    border: none;
    outline: none;
    background: white;
    font-size: 12px;
    line-height: 14px;
  }
  
  .react-calendar__tile--range, .react-calendar__tile--hover {
    background-color: #ff5800;
    background-clip: content-box;
    color: white;
  }

  .react-calendar__tile--rangeStart {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .react-calendar__tile--hoverEnd {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .react-calendar__tile--hoverStart {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .react-calendar__tile--rangeEnd {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;

function formatDate(date: Date | null) {
  if (!date) {
    return '';
  }

  const toTwoDigits = (num: number) => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${toTwoDigits(month)}월 ${toTwoDigits(day)}일`;
}

function differenceInDays(former: Date | null, latter: Date | null) {
  if (former === null || latter === null) {
    return 0;
  }

  return latter.getDate() - former.getDate();
}

export default function ReservePage() {
  const [duration, setDuration] = useState<Date[] | null[]>([
    null,
    null,
  ]);

  const { product } = useProduct();

  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    navigate('/');
  };

  const handleChange = (range: Date[] | null[]) => {
    setDuration(range);
  };

  return (
    <>
      <Navigation>
        <button type="button" onClick={handleClickGoBack}>
          <img
            src={LEFT_ARROW_ICON}
            alt="goback"
          />
        </button>
        <button type="button" onClick={handleClickHome}>
          <img src={HOME_ICON_INACTIVE} alt="home" />
        </button>
      </Navigation>
      <h1>{product.name}</h1>
      <p>사용자 101</p>
      <Wrapper>
        <Calendar
          showNeighboringMonth={false}
          returnValue="range"
          onChange={handleChange}
          formatDay={(locale, date: Date) => date.getDate().toString()}
          selectRange
        />
      </Wrapper>

      <p>
        시작일
        {' '}
        {formatDate(duration[0])}
      </p>
      <p>
        반납일
        {' '}
        {formatDate(duration[1])}
      </p>

      <h2>
        빌리어 기간
      </h2>
      <p>
        {differenceInDays(duration[0], duration[1])}
        일
      </p>

      <p>
        시작일:
        {formatDate(duration[0])}
      </p>
      <p>
        종료일:
        {formatDate(duration[1])}
      </p>
      <p>
        예상금액:
        {product.price * differenceInDays(duration[0], duration[1])}
        원
      </p>

      <button type="button">
        예약하기
      </button>
    </>
  );
}
