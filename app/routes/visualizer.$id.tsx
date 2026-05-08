import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const VisualizerId = () => {
    const { id } = useParams();
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const savedImage = sessionStorage.getItem(`upload_${id}`);
            if (savedImage) {
                setImage(savedImage);
            }
        }
    }, [id]);

    return (
        <div className="visualizer">
            {image ? (
                <img src={image} alt="Uploaded Floor Plan" style={{ maxWidth: '100%' }} />
            ) : (
                <p>Loading or no image found for ID: {id}</p>
            )}
        </div>
    )
}
export default VisualizerId
