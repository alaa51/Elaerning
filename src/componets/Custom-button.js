import React from 'react';
import {Button} from "antd";

const CustomButton = (props) => {
    const {name, action, color} = props
    return (
        <div>
            <Button className={color} onClick={action}>{name}</Button>
        </div>
    );
};

export default CustomButton;
