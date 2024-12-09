import React from 'react';
import Button from '../atomicomponent/Button';

function BuyButton(props) {

    if (props.status === 'Low Stock') {
        return <Button labels="Inform " />
    }
    else {
        return <Button labels="Buy" />
    }
}

export default BuyButton;