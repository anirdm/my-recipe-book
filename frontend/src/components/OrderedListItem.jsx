import React from 'react'

const OrderedListItem = ({ count, text }) => {
    return (
        <li>
            <div className='flex gap-2 items-center'>
                <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                    {count + 1}
                </span>
                {text}
            </div>
        </li>
    )
}

export default OrderedListItem

