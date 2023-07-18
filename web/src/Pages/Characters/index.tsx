import React from 'react';
import SearchCharacters from '../../components/SearchCharacters';

const Characters: React.FC = () => {
  return (
    <>
      {/* Outros elementos da página Characters */}
      <SearchCharacters endpoint="/characters" />
    </>
  );
};

export default Characters;

// import React, { useState } from 'react';
// import SearchCharacters from '../../components/SearchCharacters';
// import Pagination from '../../components/Pagination';

// const Characters: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (selectedPage: number) => {
//     setCurrentPage(selectedPage);
//   };

//   return (
//     <>
//       <Pagination
//         endpoint="/characters"
//         currentPage={currentPage}
//         onPageChange={handlePageChange}
//       />
//       {/* Outros elementos da página Characters */}
//       <SearchCharacters endpoint="/characters" />
//     </>
//   );
// };

// export default Characters;

