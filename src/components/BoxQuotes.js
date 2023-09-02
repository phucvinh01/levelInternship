import React, { useEffect } from 'react'
import { getQuote } from '../API/QuotesAPI'
import { useState } from 'react'
import CardItem from './Quotes'


const Quotes = () => {

    const [quote, setQuote] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let res = await getQuote()
        if (res) {
            setQuote(res)
        }
    }

    return (
        <>
            <div className='sticky'>
                <h1 className='text-center'>Quotes for you</h1>
                {
                    quote && <>
                        <CardItem
                            author={ quote.author }
                            content={ quote.content }
                        />
                    </>
                }
            </div>

        </>
    )
}

export default Quotes