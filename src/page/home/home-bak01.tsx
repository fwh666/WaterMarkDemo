import React from "react";

/**
 * 1. demo列表链接
 * 2. 点击跳转到对应页面
 */

function Home() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    return (
        <div>
            <h1>home</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home
