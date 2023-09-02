import React from 'react'
import img from '../asset/Vinhne.png'
import SliderStory from '../components/SliderStory';
const Home = () => {

    return (
        <>
            <div className='container mx-auto w-50 row border rounded-3 p-4'>
                <div className='col-12 p-3'>
                    <div className='row'>
                        <div className='p-avatar col-3'>
                            <img className='rounded-circle w-100' src={ img }></img>
                        </div>
                        <div className='col-9'>
                            <div className='d-flex align-items-center mb-3 mt-2'>
                                <h3 className='mt-1 me-5'>Nguyen Phuc Vinh</h3>
                                <div className='gap-1'>
                                    <button className='btn btn-primary p-2 mx-2' >Follow</button>
                                    <button className='btn btn-light  p-2'>Message</button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <p><strong>229</strong> posts</p>
                                <p><strong>24.7k</strong> followers</p>
                                <p><strong>249</strong> following</p>
                            </div>
                            <div className='align-items-center'>
                                <em>Vinhhandsomeee</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <div className='container'>
                        <SliderStory />
                    </div>
                </div>
            </div>
            <div className='container mx-auto w-50 row border rounded-3 p-4 mt-4'>
                <h3>React RoadMap of me</h3>

            </div>
        </>
    )
}

export default Home