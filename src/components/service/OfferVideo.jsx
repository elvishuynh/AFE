const OfferVideo = () => {
    return (
        <section id="offer-video-container" className="bg-black text-white relative font-azo-sans isolate overflow-hidden container mx-auto">
            <div>
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-full">
                            <h1 id="offer-title"className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">LIMITED TIME OFFER!</h1>
                            <video id="offer-video" src="/ppf_offer_video.mp4" autoPlay loop muted playsInline className="mt-12 w-full" />
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default OfferVideo;