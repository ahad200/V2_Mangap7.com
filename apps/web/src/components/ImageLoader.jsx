
import React, { useState, useEffect } from 'react';
import { convertGoogleDriveUrl, buildGoogleDriveSrcSet } from '@/lib/googleDriveUtils.js';

/**
 * @param sizes    Responsive `sizes` hint so the browser picks the smallest suitable image.
 * @param priority Load immediately with high priority (use only for above-the-fold images).
 */
const ImageLoader = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  sizes = '100vw',
  priority = false,
}) => {
  const [status, setStatus] = useState('loading'); // 'loading', 'loaded', 'error'
  const [currentSrc, setCurrentSrc] = useState('');
  const [srcSet, setSrcSet] = useState(undefined);
  const [hasFallenBack, setHasFallenBack] = useState(false);

  useEffect(() => {
    setStatus('loading');
    setCurrentSrc(convertGoogleDriveUrl(src, 1200));
    setSrcSet(buildGoogleDriveSrcSet(src));
    setHasFallenBack(false);
  }, [src]);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    // If the converted URL fails, fallback to the original URL once
    if (!hasFallenBack && currentSrc !== src) {
      setHasFallenBack(true);
      setSrcSet(undefined);
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
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          className={`transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${className || 'h-full w-full object-contain object-center'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          // React 18 only passes the lowercase attribute through to the DOM
          {...(priority ? { fetchpriority: 'high' } : {})}
          decoding="async"
        />
      )}
    </div>
  );
};

export default ImageLoader;
