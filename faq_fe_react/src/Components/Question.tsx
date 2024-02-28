import React from 'react';

const Question = ({ Que }:any) => {
  return (
    <div className='mt-5 mx-auto items-center content-center flex justify-center'>
      <div className="flex justify-between self-center bg-gray-100 border rounded p-4 my-2 m-5 w-5/6">
          <p className="">{Que}</p>
        <div>
          <button className="px-2 py-2 w-auto bg-blue-500 text-white rounded mt-2 hover:bg-blue-600">View Question</button>
        </div>
      </div>

    </div>

    
  );
};

export default Question;
