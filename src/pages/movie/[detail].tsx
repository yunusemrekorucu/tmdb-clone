import { Bookmark, DefaultImage, Expand, Facebook, Grapichs, Hearth, Instagram, List, Play, RightArrow, Star, Twitter, Url } from "@/assets/Icons/Icon"; //prettier-ignore
import {
  AntManBanner,
  Banner,
  Banner2,
  MovieBanner,
  ProfilePhoto,
} from "@/assets/images";
import { ActorCard, KeywordBadge, TabCard } from "@/components";
import { mediaSocialItems, socialTabItems } from "@/utils/tabItems";
import Image from "next/image";

const MovieDetail = () => {
  return (
    <div className="border-3 pt-[64px]">
      <div className="relative h-[510px]">
        <div className="absolute w-[20%] h-full bg-[#1d1d5e] -z-10"></div>
        <Image
          className="absolute right-0 w-[80%] h-full -z-20"
          src={Banner}
          alt=""
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#1f1f5e] via-[#20205fd6] to-[#20205fd6] -z-10"></div>
        <div className="flex items-center h-full container z-10 text-white">
          <div className="flex w-full">
            <div className="relative min-w-[300px] h-[450px] rounded-lg overflow-hidden">
              <div className="flex items-center justify-center absolute w-full h-full bg-black opacity-0 hover:opacity-80 transition-all cursor-pointer">
                <div className="flex items-center absolute">
                  <Expand color="#ffffff" size={24} />
                  <span className="text-xl ml-2">Expand</span>
                </div>
              </div>
              <Image className="w-full h-full" src={MovieBanner} alt="" />
            </div>
            <div className="ml-10 w-full">
              <div>
                <h1 className="text-4xl">
                  Ant-Man and the Wasp: Quantumania (2023)
                </h1>
                <h6 className="font-light flex items-center">
                  <span className="border px-1 border-[#ffffff99] rounded-sm text-lightGray mr-2 text-sm">
                    PG-13
                  </span>{" "}
                  02/24/2023 (TR) Science Fiction, Adventure, Comedy 2h 5m
                </h6>
              </div>
              <div className="my-6">
                <div className="flex items-center">
                  <div className="center relative w-[64px] h-[64px] bg-[#032541] rounded-full">
                    <div className="absolute w-[90%] h-[90%] border-[3px] border-primary rounded-full" />
                    66%
                  </div>
                  <h4 className="w-[60px] font-semibold ml-3 leading-5">
                    User Score
                  </h4>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-x-5">
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <List color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Hearth color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Bookmark color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Star color="#fff" size={18} />
                    </div>
                    <div className="flex items-center font-medium">
                      <Play color="#fff" size={21} />
                      <span className="ml-2 text-sm">Play Trailer</span>
                    </div>
                  </div>
                </div>
                {/* Movie Subject */}
                <div className="mt-5">
                  <h6 className="text-sm">
                    Witness the beginning of a new dynasty.
                  </h6>
                  <div>
                    <h2 className="font-medium text-lg my-2">Overview</h2>
                    <p className="text-sm font-light">
                      Super-Hero partners Scott Lang and Hope van Dyne, along
                      with with Hope's parents Janet van Dyne and Hank Pym, and
                      Scott's daughter Cassie Lang, find themselves exploring
                      the Quantum Realm, interacting with strange new creatures
                      and embarking on an adventure that will push them beyond
                      the limits of what they thought possible.
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-y-4">
                    {new Array(6).fill(
                      <div>
                        <h2 className="font-semibold text-sm">Stan Lee</h2>
                        <h6 className="font-light text-sm">Characters</h6>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-white py-[30px]">
        <div className="container z-10">
          <div className="grid grid-cols-5 gap-x-6">
            <div className="col-span-4">
              <div>
                <h2 className="text-xl font-medium mb-4">Top Billed Cast</h2>
                <div className="flex items-center w-full overflow-auto pb-8 relative">
                  <div className="wider-shadow" />
                  {new Array(9).fill(<ActorCard />)}
                  <div className="flex items-center h-[250px] min-w-[138px]">
                    <h1 className="flex cursor-pointer">
                      <div>View More</div>
                      <span className="ml-1">
                        <RightArrow color="#000000" size={24} />
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <h2 className="text-md font-medium">Full Cast & Crew</h2>
              <div className="border-t border-[#d7d7d7] my-6" />
              <div>
                <TabCard title="Social" tabItems={socialTabItems}>
                  <div className="mb-10 mt-4">
                    <div className="flex h-[200px] border rounded-md p-6 border-lightGray shadow-sm shadow-gray-300">
                      <div className="w-[64px] h-[64px]">
                        <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-primary text-xl">
                          Y
                        </div>
                      </div>
                      <div className="flex flex-col justify-center ml-4">
                        <div className="flex flex-col">
                          <h1 className="text-lg font-semibold">UserName0</h1>
                          <div className="text-xs text-gray-400">
                            Written by rawatk on February 15, 2023
                          </div>
                        </div>
                        <div className="mt-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta obcaecati earum distinctio iure possimus
                          maxime dolorum error non, nesciunt doloremque quae
                          voluptates ipsum nemo quasi quibusdam sequi. Maiores
                          vel quo, asperiores, necessitatibus ipsam corporis,
                          temporibus nesciunt odio aliquid non dolorem?
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 font-medium text-md">
                      Read All Reviews
                    </div>
                    <div className="border-t border-[#d7d7d7] my-6" />
                  </div>
                </TabCard>
                <TabCard title="Media" tabItems={mediaSocialItems}>
                  <section className="my-4">
                    <div className="flex h-[300px] rounded-t-md overflow-auto">
                      <div className="min-w-[533px] h-full">
                        <Image
                          className="w-full  object-contain"
                          src={Banner2}
                          alt=""
                        />
                      </div>
                      <div className="min-w-[533px] object-contain">
                        <Image
                          className="w-full h-full object-cover"
                          src={Banner2}
                          alt=""
                        />
                      </div>
                      <div className="min-w-[200px]">
                        <Image
                          className="w-full h-full object-cover"
                          src={MovieBanner}
                          alt=""
                        />
                      </div>
                    </div>
                  </section>
                </TabCard>
                <div className="border-t border-[#d7d7d7] my-8" />
                <div className="relative border h-[258px] rounded-md overflow-hidden mb-10">
                  <Image
                    className="absolute object-cover h-full w-full"
                    src={AntManBanner}
                    alt=""
                  />
                  <div className="flex flex-col justify-center text-white absolute w-full h-full bg-[#032541bf] px-4">
                    <h1 className="text-3xl font-semibold">
                      Part of the Ant-Man Collection
                    </h1>
                    <h4 className="text-md ">
                      Includes Ant-Man, Ant-Man and the Wasp, and Ant-Man and
                      the Wasp: Quantumania
                    </h4>
                    <div className="bg-secondary rounded-2xl font-semibold flex items-center justify-center w-[230px] py-2 hover:bg-black transition-all mt-4 cursor-pointer">
                      VIEW THE COLLECTION
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#d7d7d7] my-8" />
                <div className="w-[250px] mb-8">
                  <h1 className="text-xl font-semibold">Recommendations</h1>
                  <div className="flex items-center justify-center h-[141px] w-[250px] rounded-md overflow-hidden bg-[#e3e3e3] my-2">
                    <DefaultImage color="#b5b5b5" size={74} />
                  </div>
                  <div className="flex itesm-center justify-between text-sm w-full">
                    <span>Deadpool 3</span>
                    <span>0%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Rigth Bar */}
            <section>
              <div className="flex gap-x-3">
                <Facebook color="#000" size={32} />
                <Twitter color="#000" size={32} />
                <Instagram color="#000" size={32} />
                <span className="border-l pl-2 border-lightGray">
                  <Url color="#000" size={32} />
                </span>
              </div>
              <div>
                <div className="text-sm mt-4">
                  <h4 className="font-semibold">Status</h4>
                  <div className="font-light">Relased</div>
                </div>
                <div className="text-sm mt-4">
                  <h4 className="font-semibold">Original Language</h4>
                  <div className="font-light">English</div>
                </div>
                <div className="text-sm mt-4">
                  <h4 className="font-semibold">Budget</h4>
                  <div className="font-light">-</div>
                </div>
                <div className="text-sm mt-4">
                  <h4 className="font-semibold">Revenue</h4>
                  <div className="font-light">$250,093,894.00</div>
                </div>
                <div className="text-sm mt-4 w-full">
                  <h4 className="font-semibold">Keywords</h4>
                  <div className="font-light my-3 flex flex-wrap gap-1">
                    {new Array(12).fill(<KeywordBadge title={"hero"} />)}
                  </div>
                </div>
                <div className="border-b border-lightGray w-full my-8" />
                <div>
                  <h4 className="font-semibold">Content Score</h4>
                  <div className="w-full h-10 bg-secondary rounded-md flex items-center mt-3">
                    <span className="ml-2 text-white">100</span>
                  </div>
                  <div className="text-sm">Yes looking good!</div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold"> Top Contributors</h4>
                  {new Array(4).fill(
                    <div className="flex items-center mb-3">
                      <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                        <Image src={ProfilePhoto} alt="" />
                      </div>
                      <div className="flex flex-col leading-4 ml-3">
                        <span className="font-semibold">566</span>
                        <span className="font-thin">username</span>
                      </div>
                    </div>
                  )}
                  <div className="text-sm font-light">View Edit History</div>
                </div>
                <div className="bg-secondary rounded-3xl center w-[110px] py-[6px] text-white mt-6">
                  <div>Edit Page</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
