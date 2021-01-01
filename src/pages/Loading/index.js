import React from 'react'
import styles from './index.module.css'

const Loading = () => {
    return (
        <div class="canvas">
            <div class="triangle left rotate1" id="p1"></div>
            <div class="triangle right" id="p2"></div>
            <div class="triangle left" id="p3"></div>
            <div class="triangle right" id="p4"></div>
        </div>
    );
}

export default Loading;