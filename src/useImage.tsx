/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

const useImage = (fileName: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null);
  const [image, setImage] = useState<any>(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./assets/${fileName}.jpeg`) ;
        setImage(response.default)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [fileName]);

    return { loading, error, image };
}

export default useImage;