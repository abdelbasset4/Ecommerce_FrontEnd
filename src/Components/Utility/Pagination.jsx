import ReactPaginate from 'react-paginate';


// eslint-disable-next-line react/prop-types
export default function Pagination() {

  const handlePageClick = (data)=>{
    console.log(data);
  }

  return (
    <div className='pagination flex justify-center'>
    <ReactPaginate
        breakLabel="....."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'flex border-2'}
        pageClassName={'bg-white rounded py-2 px-3 font-semibold'}
        activeClassName={"active"}
        previousClassName={"py-2 px-3 font-semibold"}
        nextClassName={"py-2 px-3 font-semibold"}
      />
    </div>
  )
}