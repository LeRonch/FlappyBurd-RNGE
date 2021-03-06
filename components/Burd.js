import React from 'react';
import Matter from 'matter-js';
import {View } from 'react-native'

const Burd = (props, dispatch) => {

    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody /2;
    const yBody = props.body.position.y - heightBody /2;

    const color = props.color;

    return(
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}
        >
        </View>
    )

}

export default (world, color, pos, size) => {

   const initialBurd = Matter.Bodies.rectangle(
       pos.x, 
       pos.y, 
       size.width, 
       size.height, 
       {label: 'Burd'}
    )

    Matter.World.add(world, initialBurd)

    return {
        body: initialBurd,
        color,
        pos,
        renderer: <Burd />
    }
}