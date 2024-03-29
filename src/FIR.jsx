import './App.css'


function FIRFormPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pb-8 pt-8">
      {/* Scrollable container for the form */}
      <div className="bg-white shadow-md rounded-md p-8 max-w-xl w-full overflow-y-auto ">
            <h1 class="pt-6 text-2xl font-bold mb-4 text-blue-700 text-center">File an FIR</h1>

            <form class="max-w-sm mx-auto pb-6">
               

                <div>
                    {/*date picker*/}
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Place Of Offence</label>
                    <input class="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required
                        type="text"
                    // className={classes.placeofoffence}
                    // id="placeofoffence"
                    // value={placeOfOffence}
                    // onChange={handlePlaceOfOffenceChange}
                    />
                </div>
                <div class="mb-5">
                    <label for="zonalcode" class="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Zonal Code</label>
                    <input type="integer" class="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div class="mb-5">
                    <label for="useremail" class="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Enter email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div class="mb-5">

                    <label className='block mb-2 text-sm font-medium text-blue-700 dark:text-white'>Crime Type</label>
                    <select id="crimetype" className='bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    // //   className={classes.crimetypedropdown} 
                    // //   value={crimeType}
                    // //   onChange={handleCrimeTypeChange}
                    >
                        <option value="">Select Crime Type</option>
                        <option value="1">Murder</option>
                        <option value="2">Attempt to commit murder</option>
                        <option value="3">Dacoity</option>
                        <option value="4">Robbery (Excluding Chain Snatching)</option>
                        <option value="5">Robbery- Chain Snatching</option>
                        <option value="6">Extortion</option>
                        <option value="7">House Break in, Burglary, Theft</option>
                        <option value="8">Thefts</option>
                        <option value="9">Motor Vehicle Thefts</option>
                        <option value="10">Hurt</option>
                        <option value="11">Riots</option>
                        <option value="12">Rape</option>
                        <option value="13">Molestation</option>
                        <option value="14">Other</option>
                    </select>
                </div>

                <div class="mb-5">
                    <label className='block mb-2 text-sm font-medium text-blue-700 dark:text-white'>IPC Section</label>
                    <input class="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required
                        type="text"
                        //   className={classes.zonalcode}
                        id="ipcsection"
                    //   value={ipcSection}
                    //   onChange={handleIpcSectionChange}
                    />
                </div>
                <div className="mb-5">
                    <label className='block mb-2 text-sm font-medium text-blue-700 dark:text-white'>FIR Contents</label>
                    <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""
                        /* className={classes.textarea} */
                        id="firContents"
                    /* rows={2}
                    value={firContents}
                    onChange={handlefirContentsChange} */
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Suspect Details</label>
                    <textarea
                        rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""
                        id="suspectdetails"
                    //   rows={2}
                    //   value={suspectDetails}
                    //   onChange={handleSuspectDetailsChange}
                    />

                </div>
                <div className="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                    <input class="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:text-blue-50
            hover:file:bg-blue-700
          " id="cvFile" type="file" />
                    <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">*Upload your Evidence here. Max file size 50 MB</div>
                    {/* //   className={classes.chooseFilebtn} */}
                    {/* id="cvFile" */}
                    {/* //   onChange={handleCvFileChange} */}
                    {/* /> */}
                </div>
                {/* { */}
                {/* !cvFile &&  */}
                {/* ( */}

                {/* ) */}
                {/* } */}


                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Send Application</button>
            </form >

        </div >
        </div >
    );
}

export default FIRFormPage;
