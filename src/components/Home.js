import React from 'react';

const Home = ()=>{
    return (
        <div className='home'>
            <p className='blurb'>Using an online REST API from <a href='https://jsonplaceholder.typicode.com/'><span className='links'>EDAMAM</span></a>, this web app displays a list of recipes with each item having it's own page.
            </p>
            <h3>========================</h3>
            <p className='blurb'>NOTE !</p>
            <p className='blurb'>The design of this app is NOT practical. It was purely used as an exercise to use different React tools.</p>
            <p className='blurb'>Router - Redux - Thunk are not neccessary.</p>
        </div>
    )
}

export default Home