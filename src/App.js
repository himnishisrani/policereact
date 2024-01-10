
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div>
      <h1>
        {/* FIRS for officer {location?.state?.full_name} */}
      </h1>
      <div className="search-filter-container">
        <nav class="bg-yellow-700 bg-opacity-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4 pt-2'>
              <FontAwesomeIcon icon={faUser} className='mr-2' /> {/* Adjust margin as needed */}
              FIRS for officer chulbul pandey
              {/* FIRS for officer {location?.state?.full_name} */}
            </h1>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  // onClick={applyFilters}
                  // className={`btn btn-block btn-primary ${isFilterApplied ? "button-active" : "button-inactive"
                  //   }`}
                  // disabled={!isFilterApplied}
                  >
                    Apply Filter
                  </button>
                </li>

                <li>
                  <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  // onClick={handleResetFilters}
                  // className={`btn btn-block btn-primary ${isFilterApplied ? "button-active" : "button-inactive"
                  //   }`}
                  // disabled={!isFilterApplied}
                  >
                    Reset Filter
                  </button>
                </li>
                <li>
                  <button
                    // onClick={navigateToFileFir}
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    File FIR
                  </button>
                </li>
                <li>
                  <button
                    // onClick={navigateToEvidenceAccess}
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Evidence Requests
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='grid grid-rows-2 md:grid-rows-6'>
         <div id="filter grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pt-6 pl-6 relative inline-block text-left ">
            <div className="md:col-span-1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 form-group col-sm-3 col-xs-6">
              Select Status
              <select
                data-filter="make"
                className="filter-make filter form-control"
              // onChange={handleStatusChange}
              // value={status}
              >
                {/* ... Options ... */}
              </select>
            </div>

            <div className="md:col-span-1 form-group col-sm-3 col-xs-6">
              Select Zonal Code
            </div>

            <div className="md:col-span-1 form-group col-sm-3 col-xs-6">
              Select Crime Type
              <select
                data-filter="price"
                className="filter-price filter form-control"
              // onChange={handleCrimeTypeChange}
              // value={crimeType}
              >
                {/* ... Options ... */}
              </select>
            </div>
            <div className="md:col-span-1 form-group col-sm-3 col-xs-6">
              Select IPC Section
              <select
                data-filter="type"
                className="filter-type filter form-control"
              // onChange={handleIpcSectionChange}
              // value={ipcSection}
              >
                {/* ... Options ... */}
              </select>
            </div>
            <div className="form-group col-sm-3 col-xs-6">
              
              <input
                // className={styles.transactionInput}
                placeholder="Enter Transaction Id"
              // value={firTransactionId}
              // onChange={handleFirTransactionIdChange}
              />
            </div>
            {/* Date Pickers */}
            {/* <DatePicker
          placeholder="Enter Start date"
          onDateSelect={setSelectedStartDate}
          reset={resetDatePicker}
          setIsFilterApplied={setIsFilterApplied}
         />
         <DatePicker
          placeholder="Enter End date"
          onDateSelect={setSelectedEndDate}
          reset={resetDatePicker}
          setIsFilterApplied={setIsFilterApplied}
         /> */}
        </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
