import Usedtoolimage from '../images/feature-1.png';
const Usedtool=()=>{
    return(
        <div className="px-[8.7rem] flex mb-4 space-y-20  gap-28 items-center justify-between">
                <div>
                    <h1 className="text-3xl text-gray-900 font-extrabold max-w-2xl mb-4 justify-right">Work with tools
                        already you use</h1>
                    <p className="text-xl max-w-2xl mb-8 font-weight-500 font-light text-gray-500">This free and open-source
                        landing
                        page template was built using the utility classNamees from Tailwind CSS and based on the components
                        from the Flowbite Library and the Blocks System.
                    </p>

                    <hr/>
                    <list>
                        <li className="list-none flex py-2"><svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous
                                integration and deployment</span>
                        </li>
                        <li className="list-none flex py-2"><svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development
                                workflow
                            </span></li>
                        <li className="list-none py-2 flex"><svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><span className="text-base font-medium  leading-tight text-gray-900 dark:text-white">Knowledge
                                management

                            </span></li>

                    </list>
                    <div className="max-w-2xl text-xl mb-6 py-2 font-light text-gray-500">Deliver great service experiences
                        fast - without the complexity of traditional ITSM solutions.
                    </div>

                </div>

                <div className="w-[500px]">
                    <img src={Usedtoolimage} className="w-full" alt="second image"/>
                </div>
            </div>
    )
}
export default Usedtool