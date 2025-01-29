import Globe from 'react-globe.gl';
import React, { useState, useRef, useCallback } from 'react';
import Button from "../components/Button.jsx";

const About = () => {

    //GLOBE SETTINGS
    const ARC_REL_LEN = 0.4; // relative to whole arc
    const FLIGHT_TIME = 1000;
    const NUM_RINGS = 3;
    const RINGS_MAX_R = 5; // deg
    const RING_PROPAGATION_SPEED = 5; // deg/sec

    const [arcsData, setArcsData] = useState([]);
    const [ringsData, setRingsData] = useState([]);

    const prevCoords = useRef({ lat: 0, lng: 0 });
    const emitArc = useCallback(({ lat: endLat, lng: endLng }) => {
        const { lat: startLat, lng: startLng } = prevCoords.current;
        prevCoords.current = { lat: endLat, lng: endLng };

        // add and remove arc after 1 cycle
        const arc = { startLat, startLng, endLat, endLng };
        setArcsData(curArcsData => [...curArcsData, arc]);
        setTimeout(() => setArcsData(curArcsData => curArcsData.filter(d => d !== arc)), FLIGHT_TIME * 2);

        // add and remove start rings
        const srcRing = { lat: startLat, lng: startLng };
        setRingsData(curRingsData => [...curRingsData, srcRing]);
        setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== srcRing)), FLIGHT_TIME * ARC_REL_LEN);

        // add and remove target rings
        setTimeout(() => {
            const targetRing = { lat: endLat, lng: endLng };
            setRingsData(curRingsData => [...curRingsData, targetRing]);
            setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== targetRing)), FLIGHT_TIME * ARC_REL_LEN);
        }, FLIGHT_TIME);
    }, []);




    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("danny.zhou49@gmail.com");
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2500)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid1.png" alt="grid-1" className={"w-full sm:h-[276px] h-fit  object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Hey, I'm Danny</p>
                            <p className={"grid-subtext"}>Currently a junior in Computer Science at SUNY Binghamton University, looking to pursue a career in Software Development or Data Science/Analytics.</p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/testing.png" alt="grid-2" className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Python, Flask, Numpy, Pandas, Scikit-learn, Matplotlib, Seaborn</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className={"grid-container"}>
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                onGlobeClick={emitArc}
                                arcsData={arcsData}
                                arcColor={() => 'darkOrange'}
                                arcDashLength={ARC_REL_LEN}
                                arcDashGap={2}
                                arcDashInitialGap={1}
                                arcDashAnimateTime={FLIGHT_TIME}
                                arcsTransitionDuration={0}
                                ringsData={ringsData}
                                ringColor={() => t => `rgba(255,100,50,${1 - t})`}
                                ringMaxRadius={RINGS_MAX_R}
                                ringPropagationSpeed={RING_PROPAGATION_SPEED}
                                ringRepeatPeriod={FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS}
                                labelsData={[{
                                    lat:40.6782, lng:-73.9442,
                                    text: "I live here!",
                                }]}
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>Flexible with Different Locations & Time Zones</p>
                            <p className={"grid-subtext"}>I currently live in Brooklyn, New York, but I am flexible and open to relocation and remote opportunities</p>
                            <Button name={"Contact Me"} isBeam containerClass={"w-full mt-10"}/>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid3.png" alt="grid-3" className={"w-full sm:h-[266px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>My Passion for Coding</p>
                            <p className={"grid-subtext"}>I love solving problems and learning new things through code. Coding in itself feels like a fun puzzle to me, and I'm always eager to take on new challenges. I find joy in the process of coding and the satisfaction of seeing my code come to life.</p>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[176px] sm:h-[276px] h-fit object-contain"/>
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contact Me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/check.svg' : 'assets/copy.svg'} alt="copy" className={"w-6 h-6"}/>
                                <p className={"lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"}>danny.zhou49@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
