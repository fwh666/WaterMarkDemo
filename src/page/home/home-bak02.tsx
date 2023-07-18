/**
 * 
 * 1. 如何上传图片且保留原始图片信息
2. 如何获取输入的文字信息
3. 如何将信息加工输出带有水印的信息
4. 如何将信息回显到页面
5. 结果支持原数据的下载
 */
import React, { useState } from 'react';
import { Watermark } from '@pansy/react-watermark';
import Content from '../content';
import './ImageUpload.css'


const ImageUpload: React.FC = () => {

    const [selectedImage, setSelectedImage] = useState<any>();
    const [textInput, setTextInput] = useState<string>('');
    const [viewFlag, setViewFlag] = useState<string>('none');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files![0];

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        }

        reader.readAsDataURL(file);
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
    }

    const handleSaveData = () => {
        const data = {
            image: selectedImage,
            text: textInput
        };
        console.log(data);
        // 将数据做处理，例如发送到服务器或保存到本地等-数据整合水印
        setViewFlag('flex')

        // 清除选择的图片和文本输入框
        setSelectedImage(null);
        setTextInput('');
    }

    const options = {
        text: [textInput, '17766666666'],
        width: 120,
        height: 64,
        gapX: 150,
        gapY: 150,
    }

    return (
        <div className='image-upload'>
            <h2>Image Upload</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br />
            <input type="text" value={textInput} onChange={handleTextChange} />
            <br />
            {selectedImage && (
                <img src={selectedImage} alt="Selected" style={{ width: '200px' }} className='selected-image' />
            )}
            <br />
            <button onClick={handleSaveData}>Save Data</button>

            {/* 回显内容-TODO-无法加载出这个div */}
            <div style={{ display: viewFlag }}>
                <Watermark {...options}>
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected" style={{ width: '200px' }} />
                    )}
                </Watermark>
            </div>
            {/* <div style={{ display: 'none' }}>
                <Watermark {...options}>
                    <Content />

                    {selectedImage && (
                        <img src={selectedImage} alt="Selected" style={{ width: '200px' }} />
                    )}
                </Watermark>
            </div> */}
        </div>
    );
}

export default ImageUpload;
