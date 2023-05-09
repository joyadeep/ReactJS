/* eslint-disable react/prop-types */

const NewsCard = ({data}) => {
  return (
    <div className='rounded-lg  bg-slate-100 p-5 flex flex-col gap-y-3 cursor-pointer hover:bg-slate-200 '>
        <h1 className="text-xl text-center font-semibold">{data.title}</h1>
        <p>{data.description}</p>
        <div className=" text-sm flex justify-between items-center">
            <div className="text-slate-500">{data.date.toString().substring(0,16)}</div>
            <a className="text-blue-400 font-semibold" href={data.url} rel="noreferrer" target="_blank" >Read more</a>
        </div>
    </div>
  )
}

export default NewsCard