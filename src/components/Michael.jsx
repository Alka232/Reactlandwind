import MichaelImage from '../images/michael-gouch.png'
const Michael =()=>{
    return(
        
        <section class="px-[8.7rem] py-[4.2rem] flex flex-col items-center">
            <div>
                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                </svg>
                "Landwind is just awesome.it contains tons of predesigned <br/>components and pages starting from login
                screento complex <br/> dashboard.perfect choice for your next SaaS application"
            </div>
            <div class="flex justify-center">
                <div class="px-1 py-2"><img src={MichaelImage} class="rounded-full" height="20" width="20" alt="Michael Image"/></div>
                <div class="text-[0.625rem]font-medium py-2 px-1">Michael-Gouch</div>
                <div class="text-gray-400 py-2 px-1 font-medium">|</div>
                <div class="text-gray-400 py-3 px-1 text-sm font-light">CEO at Google</div>
            </div>
        </section>
    )
}
export default Michael