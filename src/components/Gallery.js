import { ExpandableImage } from './ExpandableImage';

export function Gallery({ images }) {
    return (
        <div className={`grid gap-6 ${cols[images.length]}`}>
            {images.map((src, i) => (
                <div>
                    <ExpandableImage key={i} src={src} alt="case study" />
                </div>
            ))}
        </div>
    );
}
const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 xl:grid-cols-3',
};
