import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';


function PinterestCard ( {testFile} ) {
    return (
        <div className="card">

                <div className="title"> {testFile.title} </div>
                <div className="subtitle">Aviation explorer</div>

                <div className="images">
                    <img src={testFile.mainImg} alt="1" className="main" />
                </div>
                <button> 
                {/* <div className="subtitle"> Aviation Explorer</div> */}
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
        mainImg: require('./Images/tmain.jpeg'),
        subImg1: require('./Images/tsub1.jpeg'),
        subImg2: require('./Images/tsub2.jpeg'),
        subImg3: require('./Images/tsub3.jpeg'),
    },
    {
        title: "Lebannon",
        pins: 641,
        mainImg: require('./Images/lmain.jpeg'),
        subImg1: require('./Images/lsub1.jpeg'),
        subImg2: require('./Images/lsub2.jpeg'),
        subImg3: require('./Images/lsub3.jpeg'),
    },
    {
        title: "Israel",
        pins: 209,
        mainImg: require('./Images/imain.jpeg'),
        subImg1: require('./Images/isub1.jpeg'),
        subImg2: require('./Images/isub2.jpeg'),
        subImg3: require('./Images/isub3.jpeg'),
    },
    {
        title: "Ideas Repair",
        pins: 4850,
        mainImg: require('./Images/imain.jpeg'),
        subImg1: require('./Images/isub1.jpeg'),
        subImg2: require('./Images/isub2.jpeg'),
        subImg3: require('./Images/isub3.jpeg'),
    },
    {
        title: "Navigation",
        pins: 641,
        mainImg: require('./Images/imain.jpeg'),
        subImg1: require('./Images/isub1.jpeg'),
        subImg2: require('./Images/isub2.jpeg'),
        subImg3: require('./Images/isub3.jpeg'),
    },
    {
        title: "Great Aviation",
        pins: 209,
        mainImg: require('./Images/imain.jpeg'),
        subImg1: require('./Images/isub1.jpeg'),
        subImg2: require('./Images/isub2.jpeg'),
        subImg3: require('./Images/isub3.jpeg'),
    },
    
];



ReactDOM.render( 
    <PinterestCardList testFiles={testCards}/>, 
    document.querySelector('#root')
)

