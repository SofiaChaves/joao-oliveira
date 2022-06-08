import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Pointers({ length, onChange, value }) {
    return (
        <div className="flex gap-3">
            {[...Array(length).keys()].map((i) => (
                <div
                    key={i}
                    onClick={() => onChange(i)}
                    className={`w-4 h-4 border-2 border-black cursor-pointer ${
                        i === value ? 'bg-black' : ''
                    }`}
                ></div>
            ))}
        </div>
    );
}

export function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex(images.length - 1 === index ? 0 : index + 1);
    };

    const previous = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const goTo = (index) => {
        setIndex(index);
    };

    return (
        <div className="flex items-center w-full">
            <button onClick={previous} className="text-3xl">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-full px-8 overflow-hidden flex flex-col items-center">
                <img
                    src={images[index]}
                    alt="case study"
                    className="max-h-[50vh] mb-5"
                />
                <Pointers
                    length={images.length}
                    onChange={goTo}
                    value={index}
                />
            </div>
            <button onClick={next} className="text-3xl">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
