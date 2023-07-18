import React, { useState } from "react";
import { Watermark } from '@pansy/watermark';

const App = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0]);
    };

    const handleTextChange = (e: any) => {
        setText(e.target.value);
    };

    const options = {
        text: ['示例水印', '17766666666'],
        width: 120,
        height: 64,
        gapX: 150,
        gapY: 150,
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const watermarkedImage = new Watermark({ ...options });

        // const watermarkedImage = new Watermark(image)
        //     .text(text)
        //     .size(100)
        //     .render();

        console.log(watermarkedImage);
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default App;