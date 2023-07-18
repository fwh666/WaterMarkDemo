import React, { useRef } from 'react';
import { Watermark } from '@pansy/watermark';


const MyComponent: React.FC = () => {
    const imageRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);

    const options = {
        text: ['示例水印', '17766666666'],
        width: 120,
        height: 64,
        gapX: 150,
        gapY: 150,
    }
    const watermark = new Watermark({ ...options });



    const handleGenerateWatermark = () => {
        const imageElement = imageRef.current;
        const textElement = textRef.current;

        if (imageElement && textElement) {
            const imageSrc = imageElement.files?.[0];
            const text = textElement.value;

            if (imageSrc) {
                const reader = new FileReader();
                reader.onload = () => {
                    const imageBase64 = reader.result as string;

                    const watermarkOptions = {
                        text: text,
                        textSize: 24,
                        textColor: 'rgba(0, 0, 0, 0.4)',
                        textFont: 'Arial',
                        textBaseline: 'middle',
                        textAlign: 'center',
                        x: 20,
                        y: 20,
                    };

                    watermark.show()
                    // Watermark.fromImage(imageBase64)
                    //     .loadFont('path/to/font.woff')
                    //     .text(watermarkOptions)
                    //     .then((result) => {
                    //         const img = result.toImage();
                    //         document.body.appendChild(img);
                    //     });
                };
                reader.readAsDataURL(imageSrc);
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" ref={imageRef} />
            <input type="text" ref={textRef} />
            <button onClick={handleGenerateWatermark}>生成水印</button>
        </div>
    );
};

export default MyComponent;