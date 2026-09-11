import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImageWithFallback({ src, fallbackSrc, alt, className, ...props }) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
