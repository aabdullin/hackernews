import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';
import imain from './Images/imain.jpeg';
import isub1 from './Images/isub1.jpeg';
import isub2 from './Images/isub2.jpeg';
import isub3 from './Images/isub3.jpeg';
import tmain from './Images/tmain.jpeg';
import tsub1 from './Images/tsub1.jpeg';
import tsub2 from './Images/tsub2.jpeg';
import tsub3 from './Images/tsub3.jpeg';


function PinterestCard ( {testFile} ) {
    return (
        <div className="card">
                <div className="title"> {testFile.title} </div>
                <div className="subtitle"> - Beautiful country</div>
                <div className="images">
                    <img src={testFile.mainImg} className="main"/>
                    <div className="secondary"> 
                        <img src={testFile.subImg1} className="sub_image"/>
                        <img src={testFile.subImg2} className="sub_image"/>
                        <img src={testFile.subImg3} className="sub_image"/>
                    </div>
                    <button className="button"> Follow </button>
                </div>
        </div>
    )
}

PinterestCard.propTypes = {
    card: PropTypes.object.isRequired
}

function PinterestCardList ( {testFiles} ) {
    return (
        <div className="list_of_cards">
                {testFiles.map ( file => (
                    <PinterestCard testFile={file} key={file.id} />
                ))}
        </div>
    )
}
                 

PinterestCardList.propTypes = {
    testFiles: PropTypes.array
}


const testCards = [ 
    {
        title: "Turkey",
        pins: 4850,
        mainImg: tmain,
        subImg1: tsub1,
        subImg2: tsub2,
        subImg3: tsub3,
    },
    {
        title: "Israel",
        pins: 209,
        mainImg: imain,
        subImg1: isub1,
        subImg2: isub2,
        subImg3: isub3,
    },
    {
        title: "Jordan",
        pins: 4850,
        mainImg: tmain,
        subImg1: tsub1,
        subImg2: tsub2,
        subImg3: tsub3,
    },
    {
        title: "Morocco",
        pins: 641,
        mainImg: imain,
        subImg1: isub1,
        subImg2: isub2,
        subImg3: isub3,
    },
    {
        title: "UAE",
        pins: 209,
        mainImg: imain,
        subImg1: isub1,
        subImg2: isub2,
        subImg3: isub3,
    },
    
];



ReactDOM.render( 
    <PinterestCardList testFiles={testCards}/>, 
    document.querySelector('#root')
)

