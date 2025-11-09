import React from 'react'
import AltHero from '../components/AltHero'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <div>
            <AltHero heroTitle="Contact us" subTitle="Our friendly team is always here to chat." />
            <div>
                {/* Hero */}
                <section className="bg-gray-900">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <span className='inline-block p-3 rounded-full text-secondary-accent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950'>
                                    <Mail />
                                </span>

                                <h2 className="mt-4 text-lg font-medium text-gray-500">Email</h2>
                                <p className="mt-2 text-gray-500">Our friendly team is here to help.</p>
                                <p className="mt-2 text-secondary-accent/80">hello@merakiui.com</p>
                            </div>

                            <div>
                                <span className='inline-block p-3 rounded-full text-secondary-accent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950'>
                                    <MapPin />
                                </span>

                                <h2 className="mt-4 text-lg font-medium text-gray-500">Office</h2>
                                <p className="mt-2 text-gray-500">Come say hello at our office HQ.</p>
                                <p className="mt-2 text-secondary-accent/80">100 Smith Street Collingwood VIC 3066 AU</p>
                            </div>

                            <div>
                                <span className='inline-block p-3 rounded-full text-secondary-accent bg-gradient-to-r from-gray-700 via-gray-950 to-gray-700'>
                                    <Phone />
                                </span>

                                <h2 className="mt-4 text-lg font-medium text-gray-500">Phone</h2>
                                <p className="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-secondary-accent/80">+1 (555) 000-0000</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            {/* <div class="max-w-5xl max-lg:max-w-3xl mx-auto bg-white p-4">
                <div class="text-center px-6">
                    <h2 class="text-slate-900 text-3xl font-bold">Contact Us</h2>
                    <p class="text-[15px] text-slate-600 mt-4">Have some big idea or brand to develop and need help?</p>
                </div>

                <div class="grid lg:grid-cols-5 items-center p-2 [box-shadow:0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12">
                    <div class="lg:col-span-2 bg-indigo-800 rounded-lg p-6 h-full max-lg:order-1 relative overflow-hidden max-lg:mt-12">
                        <h3 class="text-[24px] text-white font-medium">Contact Information</h3>
                        <p class="text-[15px] text-slate-300 leading-relaxed mt-4">Have some big idea or brand to develop and need help?</p>
                        <div class="mt-16 relative z-50">
                            <ul class="space-y-8">
                                <li class="flex items-center text-slate-200 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16px" height="16px"
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                    <a href="javascript:void(0)" class="text-[15px] ml-4">
                                        info@example.com
                                    </a>
                                </li>
                                <li class="flex items-center text-slate-200 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16px" height="16px" viewBox="0 0 482.6 482.6">
                                        <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
                                    </svg>
                                    <a href="javascript:void(0)" class="text-[15px] ml-4">
                                        +158 996 888
                                    </a>
                                </li>
                                <li class="flex items-center text-slate-200 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16px" height="16px" viewBox="0 0 368.16 368.16">
                                        <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                                        <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                                    </svg>
                                    <a href="javascript:void(0)" class="text-[15px] ml-4">
                                        123 Street 256 House
                                    </a>
                                </li>
                            </ul>

                            <ul class="flex flex-wrap gap-y-4 gap-x-5 mt-16">
                                <li class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-slate-900"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-slate-900"
                                            viewBox="0 0 511 512">
                                            <path
                                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="bg-slate-200 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-slate-900"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-teal-500"></div>
                    </div>

                    <div class="px-4 sm:px-8 py-4 lg:col-span-3">
                        <form>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="relative flex items-center">
                                    <input type="text" placeholder="First Name"
                                        class="px-2 py-3 bg-white w-full text-sm text-slate-900 border-b border-gray-300 focus:border-slate-900 outline-none" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-2"
                                        viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path
                                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                            data-original="#000000"></path>
                                    </svg>
                                </div>

                                <div class="relative flex items-center">
                                    <input type="email" placeholder="Email"
                                        class="px-2 py-3 bg-white w-full text-sm text-slate-900 border-b border-gray-300 focus:border-slate-900 outline-none" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-2"
                                        viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                data-original="#000000"></path>
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="relative flex items-center col-span-full">
                                    <textarea placeholder="Write Message"
                                        class="px-2 pt-3 bg-white w-full text-sm text-slate-900 border-b border-gray-300 focus:border-slate-900 outline-none"></textarea>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-2"
                                        viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                data-original="#000000"></path>
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <button type="button"
                                class="mt-12 flex items-center justify-center text-sm font-medium lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* <div class="max-w-6xl max-lg:max-w-3xl mx-auto bg-white p-4">
                <div
                    class="grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-lg:before:hidden">
                    <div>
                        <h2 class="text-slate-900 text-3xl font-bold">Get In Touch</h2>
                        <p class="text-[15px] text-slate-600 mt-4 leading-relaxed">Have a specific inquiry Our
                            experienced team is ready to engage with you.</p>

                        <form>
                            <div class="space-y-4 mt-8">
                                <input type="text" placeholder="Full Name"
                                    class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />
                                <input type="text" placeholder="Street"
                                    class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />
                                <div class="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                                    <input type="text" placeholder="City"
                                        class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />

                                    <input type="text" placeholder="Postcode"
                                        class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />
                                </div>
                                <input type="number" placeholder="Phone No."
                                    class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />

                                <input type="email" placeholder="Email"
                                    class="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none" />

                                <textarea placeholder="Write Message"
                                    class="px-2 pt-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none"></textarea>
                            </div>

                            <button type="button"
                                class="mt-8 flex items-center justify-center text-sm font-medium w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2"
                                    viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </form>

                        <ul class="mt-4 flex flex-wrap justify-center gap-6">
                            <li class="flex items-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                                <a href="javascript:void(0)" class="text-sm ml-3">
                                    <span class="font-medium">info@example.com</span>
                                </a>
                            </li>
                            <li class="flex items-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                                    viewBox="0 0 482.6 482.6">
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                        data-original="#000000"></path>
                                </svg>
                                <a href="javascript:void(0)" class="text-sm ml-3">
                                    <span class="font-medium">+158 996 888</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="z-10 relative h-full max-lg:min-h-[350px]">
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            class="left-0 top-0 h-full w-full" frameborder="0"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div> */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* <div class="p-4">
                <div class="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div>
                        <h2 class="text-slate-900 text-3xl font-bold">Let's Talk</h2>
                        <p class="text-[15px] text-slate-600 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                        <div class="mt-12">
                            <h2 class="text-slate-900 text-base font-semibold">Email</h2>
                            <ul class="mt-4">
                                <li class="flex items-center">
                                    <div class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                            viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000" />
                                        </svg>
                                    </div>
                                    <a href="javascript:void(0)" class="text-sm ml-4">
                                        <small class="block text-slate-900">Mail</small>
                                        <span class="text-blue-600 font-medium">info@example.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-12">
                            <h2 class="text-slate-900 text-base font-semibold">Socials</h2>
                            <ul class="flex mt-4 space-x-4">
                                <li class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                            viewBox="0 0 511 512">
                                            <path
                                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form class="space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='email' placeholder='Email'
                            class="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='text' placeholder='Subject'
                            class="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"></textarea>
                        <button type='button'
                            class="text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2">Send message</button>
                    </form>
                </div>
            </div> */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* <div class="px-4 min-h-screen flex items-center justify-center p-2">
                <div class="max-w-6xl mx-auto relative">
                    <div class="grid lg:grid-cols-3 items-center gap-y-12">
                        <div class="grid grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
                            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-blue-600" viewBox="0 0 512 512">
                                    <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000"></path>
                                    <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000"></path>
                                </svg>
                                <h4 class="text-slate-900 text-sm font-semibold mt-4">Visit office</h4>
                                <p class="text-xs text-slate-600 mt-1.5"> 123 Main Street, City, Country</p>
                            </div>
                            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-blue-600" viewBox="0 0 473.806 473.806">
                                    <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000"></path>
                                </svg>
                                <h4 class="text-slate-900 text-sm font-semibold mt-4">Call us</h4>
                                <p class="text-xs text-slate-600 mt-1.5">+158 996 888</p>
                            </div>
                            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-blue-600" viewBox="0 0 32 32">
                                    <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000"></path>
                                    <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000"></path>
                                </svg>
                                <h4 class="text-slate-900 text-sm font-semibold mt-4">Chat to us</h4>
                                <p class="text-xs text-slate-600 mt-1.5">info@example.com</p>
                            </div>
                            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-blue-600" viewBox="0 0 100 100">
                                    <path d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z" data-original="#000000"></path>
                                </svg>
                                <h4 class="text-slate-900 text-sm font-semibold mt-4">Fax</h4>
                                <p class="text-xs text-slate-600 mt-1.5">+1-548-2588</p>
                            </div>
                        </div>

                        <div class="lg:col-span-2 bg-gray-100 rounded-lg sm:p-10 p-6 z-10 max-lg:-order-1">
                            <h2 class="text-3xl text-slate-900 text-center font-semibold mb-8">Contact us</h2>
                            <form>
                                <div class="max-w-md mx-auto space-y-3">
                                    <input type='text' placeholder='Name'
                                        class="w-full bg-white rounded-md py-3 px-4 text-sm border border-gray-300 focus:border-gray-600 outline-none" />
                                    <input type='email' placeholder='Email'
                                        class="w-full bg-white rounded-md py-3 px-4 text-sm border border-gray-300 focus:border-gray-600 outline-none" />
                                    <input type='email' placeholder='Phone No.'
                                        class="w-full bg-white rounded-md py-3 px-4 text-sm border border-gray-300 focus:border-gray-600 outline-none" />
                                    <textarea placeholder='Message' rows="6"
                                        class="w-full bg-white rounded-md px-4 text-sm pt-3 border border-gray-300 focus:border-gray-600 outline-none"></textarea>
                                    <button type='button'
                                        class="text-white w-full relative bg-black hover:bg-[#111] rounded-md text-sm px-6 py-3 cursor-pointer !mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="mr-2 inline" viewBox="0 0 548.244 548.244">
                                            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* <div class="max-w-6xl max-lg:max-w-3xl mx-auto px-4 py-8">
                <div class="bg-white [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] rounded-sm p-6 sm:p-8">
                    <h2 class="text-3xl text-slate-900 font-bold text-center">Contact us</h2>

                    <div class="grid lg:grid-cols-2 items-start gap-12 mt-12">
                        <form class="space-y-4 text-slate-900">
                            <div>
                                <label class="text-sm text-slate-900 font-medium mb-2 block">Name</label>
                                <input type='text' placeholder='Enter Name'
                                    class="w-full bg-gray-100 py-2.5 px-4 text-sm border border-gray-100 focus:bg-transparent focus:border-blue-600 outline-none transition-all" />
                            </div>
                            <div>
                                <label class="text-sm text-slate-900 font-medium mb-2 block">Email</label>
                                <input type='email' placeholder='Enter Email'
                                    class="w-full bg-gray-100 py-2.5 px-4 text-sm border border-gray-100 focus:bg-transparent focus:border-blue-600 outline-none transition-all" />
                            </div>
                            <div>
                                <label class="text-sm text-slate-900 font-medium mb-2 block">Phone</label>
                                <input type='email' placeholder='Enter Phone No.'
                                    class="w-full bg-gray-100 py-2.5 px-4 text-sm border border-gray-100 focus:bg-transparent focus:border-blue-600 outline-none transition-all" />
                            </div>
                            <div>
                                <label class="text-sm text-slate-900 font-medium mb-2 block">Message</label>
                                <textarea placeholder='Enter Message' rows="6"
                                    class="w-full bg-gray-100 px-4 text-sm pt-3 border border-gray-100 focus:bg-transparent focus:border-blue-600 outline-none transition-all"></textarea>
                            </div>
                            <button type='button'
                                class="text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium px-4 py-2.5 cursor-pointer !mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </form>

                        <div class="grid sm:grid-cols-2 gap-6 sm:gap-12 mt-6">
                            <div class="flex items-start bg-white">
                                <div class="border border-gray-300 shrink-0 w-12 h-10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-blue-600" viewBox="0 0 512 512">
                                        <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000"></path>
                                        <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-slate-900 text-[15px] font-semibold">Visit office</h4>
                                    <p class="text-[13px] text-slate-600 mt-1.5"> 123 Main Street, City, Country</p>
                                </div>
                            </div>

                            <div class="flex items-start bg-white">
                                <div class="border border-gray-300 shrink-0 w-12 h-10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-blue-600" viewBox="0 0 473.806 473.806">
                                        <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-slate-900 text-[15px] font-semibold">Call us</h4>
                                    <p class="text-[13px] text-slate-600 mt-1.5"> +158 996 888</p>
                                </div>
                            </div>

                            <div class="flex items-start bg-white">
                                <div class="border border-gray-300 shrink-0 w-12 h-10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-blue-600" viewBox="0 0 32 32">
                                        <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000"></path>
                                        <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-slate-900 text-[15px] font-semibold">Chat to us</h4>
                                    <p class="text-[13px] text-slate-600 mt-1.5">info@example.com</p>
                                </div>
                            </div>

                            <div class="flex items-start bg-white">
                                <div class="border border-gray-300 shrink-0 w-12 h-10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-blue-600" viewBox="0 0 100 100">
                                        <path d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                <div class="ml-6">
                                    <h4 class="text-slate-900 text-[15px] font-semibold">Fax</h4>
                                    <p class="text-[13px] text-slate-600 mt-1.5">+1-548-2588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 🔥🔥🔥Alternative form ui */}
            {/* 🔥🔥🔥Alternative form ui */}
        </div>
    )
}