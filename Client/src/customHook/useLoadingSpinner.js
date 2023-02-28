import { useState, useCallback } from 'react';
import LoadingSpinner from '~/components/LoadingSpinner';

function useLoadingSpinner() {
  const [loading, setLoading] = useState(true);

  //   const handleSetLoading = useCallback((value) => setLoading(value), []);

  return [loading ? <LoadingSpinner /> : null, (value) => setLoading(value)];
}

export default useLoadingSpinner;
