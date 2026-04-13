import React from 'react'
import Wrapper from '../wrapper/Wrapper';

export default function ({className}) {
    const categories = ["Business", "Entertenment", "General", "Health", "Science", "Sports", "Technology"]
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className='max-w-full w-fit m-auto overflow-x-auto flex gap-5 px-4 scrollbar-none whitespace-nowrap'
        >
          {categories.map((category) => (
            <button key={category} className="btn btn-primary">
              {category}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
