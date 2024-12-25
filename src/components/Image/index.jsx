import { Fragment, useEffect, useState } from 'react';
import images from '../../assets/image';
import style from './Image.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Image({ fallBack: srcFallBack, to, alt, src, ...props }) {
    const timestamp = new Date().getTime();
    const navigate = useNavigate();
    const [fallBack, setFallBack] = useState(src ? `${src}?t=${new Date().getTime()}` : images.noImage);

    useEffect(() => {
        if (src) {
            setFallBack(`${src}?t=${new Date().getTime()}`);
        } else {
            setFallBack(images.noImage);
        }
    }, [src]);

    const handleError = () => {
        setFallBack(srcFallBack || images.noImage);
    };

    return (
        <LazyLoadImage
            effect="blur"
            wrapperProps={{
                style: { transitionDelay: '1s' },
            }}
            className={style.wrapper}
            src={src}
            {...props}
            onError={(e) => handleError(e)}
            loading="lazy"
            // placeholderSrc={images.noImage}

            threshold={100}
            alt={alt}
        />
    );
}

export default Image;
