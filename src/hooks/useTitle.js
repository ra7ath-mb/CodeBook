import {useEffect} from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CodeBook`;
  }, [title]);
};
export default useTitle;
