"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ERROR_IMG_SRC = 'public/error.png'

interface ImageWithFallbackProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, width, height, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image src={ERROR_IMG_SRC} alt="Error loading image" width={100} height={100} {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  )
}
