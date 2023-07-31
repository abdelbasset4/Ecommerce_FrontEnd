import ReactPaginate from 'react-paginate';


// eslint-disable-next-line react/prop-types
export default function Pagination({numberPages,onPress}) {

  const handlePageClick = (data)=>{
    onPress(data.selected +1 )
  }

  return (
    <div className='pagination flex justify-center'>
    <ReactPaginate
        breakLabel="....."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        previousLabel="< previous"
        pageCount={numberPages}
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