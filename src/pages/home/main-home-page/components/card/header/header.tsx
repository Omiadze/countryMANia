import { useState } from 'react';
import styles from '@/pages/home/main-home-page/components/card/header/header.module.css';
import { useParams } from 'react-router-dom';
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from '@tanstack/react-query';
import { updateCountry } from '@/api/countries';

type CardHeaderProps = {
  votes: number;
  id: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  id,
  votes,
  refetch,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { lang } = useParams();
  const { mutate: mutateUpdateVote } = useMutation({
    mutationFn: updateCountry,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onVote = () => {
    const updatedVotes = votes + 1;
    mutateUpdateVote({ id, payload: { votes: updatedVotes } });
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <div className={styles['svg-div']}>
      <div>
        <p>{`${lang === 'eng' ? `HEART: ${votes}` : `გული: ${votes}`}`}</p>
      </div>
      <svg
        onClick={() => {
          handleClick();
          onVote();
        }}
        width="50"
        height="50"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M79.5 40C79.5 61.5332 61.8212 79 40 79C18.1788 79 0.5 61.5332 0.5 40C0.5 18.4668 18.1788 1 40 1C61.8212 1 79.5 18.4668 79.5 40Z"
          fill={isClicked ? '#6F4E37' : 'white'}
          stroke="#E9E9F2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.9974 24.4044C42.1899 22.2239 45.0189 21.4473 47.732 21.4861C54.2531 21.5793 60.8348 26.8343 60.8348 34.4468C60.8348 41.7693 56.092 47.8655 51.4011 52.01C49.0276 54.107 46.5932 55.7718 44.6163 56.9183C43.6284 57.4912 42.738 57.9444 42.0114 58.2601C41.6495 58.4174 41.3098 58.5486 41.0072 58.6433C40.744 58.7257 40.3729 58.8256 40.0008 58.8256C39.6287 58.8256 39.2577 58.7257 38.9944 58.6433C38.6919 58.5486 38.3522 58.4174 37.9902 58.2601C37.2637 57.9444 36.3733 57.4912 35.3854 56.9183C33.4084 55.7718 30.9741 54.107 28.6006 52.01C23.9097 47.8655 19.1669 41.7693 19.1669 34.4468C19.1669 26.8523 25.7333 21.4859 32.2922 21.4859C34.9318 21.4859 37.7879 22.2282 39.9974 24.4044ZM47.6868 24.5717C45.1914 24.536 42.866 25.3726 41.3009 27.6908C41.0111 28.12 40.5232 28.3779 40.0008 28.3779C39.4784 28.3779 38.9906 28.12 38.7008 27.6908C37.1451 25.3866 34.7774 24.5719 32.2922 24.5719C27.2883 24.5719 22.2919 28.7205 22.2919 34.4468C22.2919 40.4453 26.2212 45.767 30.6843 49.7102C32.8877 51.657 35.1508 53.2035 36.9679 54.2573C37.8771 54.7846 38.6579 55.1788 39.2487 55.4355C39.5454 55.5644 39.7759 55.6506 39.9392 55.7018C39.9625 55.7091 39.983 55.7152 40.0008 55.7203C40.0186 55.7152 40.0392 55.7091 40.0625 55.7018C40.2257 55.6506 40.4562 55.5644 40.7529 55.4355C41.3438 55.1788 42.1246 54.7846 43.0337 54.2573C44.8508 53.2035 47.1139 51.657 49.3174 49.7102C53.7804 45.767 57.7098 40.4453 57.7098 34.4468C57.7098 28.7385 52.7286 24.6437 47.6868 24.5717Z"
          fill="#044e42"
        />
      </svg>
    </div>
  );
};
