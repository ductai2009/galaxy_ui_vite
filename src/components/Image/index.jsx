import { Fragment, useEffect, useState } from 'react';
import images from '../../assets/image';
import style from './Image.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Image({ fallBack: srcFallBack, to, alt, src, ...props }) {
    const timestamp = new Date().getTime();
    const navigate = useNavigate();
    const [fallBack, setFallBack] = useState(src);
    // const [fallBack, setFallBack] = useState(src + `?t=${timestamp}`);

    useEffect(() => {
        try {
            if (!fallBack) {
                setFallBack(images.noImage);
            }
        } catch (error) {
            console.log('error load img: ', error);
        }
    }, [src]);

    const handleError = () => {
        if (srcFallBack) {
            // setFallBack(srcFallBack + `?t=${timestamp}`);
            setFallBack(srcFallBack);
        } else {
            setFallBack(images.noImage);
            console.log('NoImage: ', fallBack);
        }
    };

    return (
        <LazyLoadImage
            effect="blur"
            wrapperProps={{
                style: { transitionDelay: '1s' },
            }}
            className={style.wrapper}
            src={fallBack}
            {...props}
            onError={() => handleError()}
            loading="lazy"
            // placeholderSrc={images.noImage}

            threshold={100}
            alt={alt}
        />
    );
}

export default Image;
