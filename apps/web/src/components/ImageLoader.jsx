
import React, { useState, useEffect } from 'react';
import { convertGoogleDriveUrl } from '@/lib/googleDriveUtils.js';

const ImageLoader = ({ src, alt, className = '', wrapperClassName = '' }) => {
  const [status, setStatus] = useState('loading'); // 'loading', 'loaded', 'error'
  const [currentSrc, setCurrentSrc] = useState('');
  const [hasFallenBack, setHasFallenBack] = useState(false);

  useEffect(() => {
    setStatus('loading');
    const converted = convertGoogleDriveUrl(src);
    setCurrentSrc(converted);
    setHasFallenBack(false);
  }, [src]);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    // If the converted URL fails, fallback to the original URL once
    if (!hasFallenBack && currentSrc !== src) {
      setHasFallenBack(true);
      setCurrentSrc(src);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={`relative overflow-hidden bg-muted flex items-center justify-center ${wrapperClassName || 'h-full w-full'}`}>
      {/* Loading Skeleton */}
      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-muted-foreground/10" />
      )}
      
      {/* Error State UI */}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-muted">
          <span className="text-sm font-medium text-muted-foreground">Image failed to load</span>
        </div>
      )}

      {/* Image Element */}
      {status !== 'error' && currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${className || 'h-full w-full object-contain object-center'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageLoader;
